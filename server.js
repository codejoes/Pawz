const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controller');
const helpers = require('./utils/helpers');
const formidable = require("formidable");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

cloudinary.config({
  secure: true,
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloud_Api_Key,
  api_secret: process.env.Cloud_Api_Secret,
});

// Log the configuration
console.log(cloudinary.config());


//Post route that captures file
app.post("/api/uploads", (req, res, next) => {

  const form = new formidable.IncomingForm();
  //Grabbing file path
  form.parse(req, function (err, fields, files) {

    console.log(files.profilePic.filepath);
    var oldPath = files.profilePic.filepath;
    //Creating new filename and directory to store file locally
    var newPath =
      path.join(__dirname, "uploads") + "/" + files.profilePic.originalFilename;
    var rawData = fs.readFileSync(oldPath);

    fs.writeFile(newPath, rawData, function (err) {
      if (err) console.log(err);
      //Upload to Cloudinary
      uploadImage(newPath);
      //Delete file locally
      deletefile(newPath);
      res.redirect(`/profile`);
    });
  });
});

// Cloudinary Function that Uploads an image file
const uploadImage = async (imagePath) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    const id = sessionId;
    
    console.log(result);
    console.log(result.public_id);
    // User.update({'user_photo': `${result.url}`}, {
    //   where: {
    //     id: id,
    //   }
    // })
  } catch (error) {
    console.error(error);
  }
};

// Function to delete uploaded image
const deletefile = async (filePath) => {
  const removeFile = await fs.access(filePath, (error) => {
    if (!error) {
      fs.unlink(filePath, function (error) {
        if (error) console.error("Error Occured:", error);
        console.log("File deleted!");
      });
    } else {
      console.error("Error Occured:", error);
    }
  });
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});