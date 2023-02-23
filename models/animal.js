const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Animal extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Animal.init(
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
            references: {
                model: "user",
                key: "id"
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_type: {
            type: DataTypes.STRING,
            allowNull: false,  
        },
        pet_photo: {
            type: DataTypes.TEXT,
            defaultValue: null,
        },
        pet_info: {
            type: DataTypes.STRING,
            defaultValue: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'animal',
    },

)
module.exports = Animal; 