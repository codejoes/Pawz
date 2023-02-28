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

//Animal.belongsToMany(User, {
    //foreignKey:"user_id",
//})

//Cat.belongsTo()

//export modules
module.exports = {
    Animal,
    User,
    Post,
    Comment
}