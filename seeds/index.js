const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

//import other seeds
const seedUsers = require('./user-seeds');
const seedAnimals = require('./animal-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

//connect and seed


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedAnimals();
    console.log('\n----- ANIMALS SEEDED -----\n');
  
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
  
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
  };
  
  seedAll();