const { Comment } = require('../models');

const commentData = [
    {
        post_id: 1,
        text: 'Your dog sucks!',

    },
    {
        post_id: 1,
        text: 'My dog survived Vick!',

    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;