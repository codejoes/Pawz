//import other seeds
const seedUsers = require('./user-seeds');
const seedAnimals = require('./animal-seeds');
const seedPosts = require('./post-seeds');

//connect and seed
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- CATEGORIES SEEDED -----\n');
  
    await seedAnimals();
    console.log('\n----- PRODUCTS SEEDED -----\n');
  
    await seedPosts();
    console.log('\n----- TAGS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();