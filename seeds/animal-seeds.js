const { Animal } = require('../models');

const animalData = [
    {
        user_id: 1,
        name: 'Bob',
        pet_type: 'German Shepherd',
        pet_info: 'My dog likes to play fetch.',

    },
];

const seedAnimals = () => Animal.bulkCreate(animalData);

module.exports = seedAnimals;