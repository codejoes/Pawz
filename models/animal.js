const { Model, DataTypes } = require('sequilize');
const bcrypt = require ('../config/connection');
const sequilze = require ('../config/connectiin');

class animal extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

userInfo.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIcrement: true,
            },
        user_id: {
            type: DataTypes.INTERGER, 
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
        sequilze,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'animals',
        },

)
module.exports = animal; 