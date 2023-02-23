const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'user',
                key: 'id',
                unique: false,
            },
        },
        post_text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'post',
    }  
    
);

module.exports = Post;