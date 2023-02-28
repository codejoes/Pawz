const { Post } = require('../models');

const postData = [
    {
        user_id: 2,
        title: "Daisy",
        text: 'My dog is the best!',

    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;