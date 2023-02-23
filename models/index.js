//import models
const Animal = require('./animal');
const Post = require('./posts');
const User = require('./user');
//create relationships

//Animal.belongsToMany(User, {
    //foreignKey:"user_id",
//})

//Cat.belongsTo()

//export modules
module.exports = {
    Animal,
    User,
    Post
}