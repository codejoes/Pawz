const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Cat extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        animal_id: {
            type: DataTypes.INT,
            allowNull: false,
            references: {
                model: 'animal',
                key: 'id',
                unique: false,
            } 
        },
        cat_type: {
            type: DataTypes.STRING,
            allowNull: false,  
        },
        cat_photo: {
            type: DataTypes.TEXT,
            defaultValue: null,
        },
        cat_info: {
            type: DataTypes.STRING,
            defaultValue: false,
        }
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
          modelName: 'cat',
    }  
    
);

module.exports = Cat;