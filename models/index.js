//import models
const Animal = require('./animal');
const Post = require('./posts');
const User = require('./user');
const Comment = require('./comment');
//create relationships

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});


Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

Animal.belongsTo(User, {
  foreignKey: "user_id",
})

User.hasMany(Animal, {
  foreignKey: 'user_id'
})


//export modules
module.exports = {
  Animal,
  User,
  Post,
  Comment
}