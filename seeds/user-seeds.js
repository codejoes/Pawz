const { User } = require('../models');

const userData = [
    {
        name: 'codejoes',
        email: 'codejoes@gmail.com',
        password: 'password1234',
    },
    {
        name: 'braddahis',
        email: 'braddahis@gmail.com',
        password: 'password1234',
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;