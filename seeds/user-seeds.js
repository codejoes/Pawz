const { User } = require('../models');

const userData = [
    {
        username: 'codejoes',
        password: '1234',
    },
    {
        username: 'braddahis',
        password: '1234',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;