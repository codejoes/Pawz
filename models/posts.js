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
    //     id: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false,
    //         primaryKey: true,
    //         autoIncrement: true,
    //     },
    //     user_id: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false,
    //         reference: {
    //             model: 'user',
    //             key: 'id',
    //             unique: false,
    //         },
    //     },
    //     password: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //         validate: {
    //           len: [8],
    //         },  
    //     },
    //     user_photo: {
    //         type: DataTypes.TEXT,
    //         defaultValue: null,
    //     },
    //     loggedIn: {
    //         type: DataTypes.BOOLEAN,
    //         defaultValue: false,
    //     }
    },
    {
        // hooks: {
        //     beforeCreate: async (newUserData) => {
        //       newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //       return newUserData;
        //     },
        //     beforeUpdate: async (updatedUserData) => {
        //       updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //       return updatedUserData;
        //     },
        //   },
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'post',
    }  
    
);

module.exports = Post;