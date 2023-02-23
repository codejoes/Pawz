//import models
const Animal = require('./animal');
const Cat = require('./cat');
const Dog = require('./dog');
const User = require('./user');
//create relationships

//Animal.belongsToMany(User, {
    //foreignKey:"user_id",
//})

//Cat.belongsTo()

//export modules
module.exports = {
    Animal,
    User
}