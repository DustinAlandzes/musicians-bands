const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../db');
class Musician extends Model {}

// initializing our Musician model and passing in the schema object and the connection object
Musician.init(
    {
        name: DataTypes.STRING,
        instrument: DataTypes.STRING,
    },
    {
        sequelize: sequelize,
        modelName: "Musician"
    }
);

module.exports = {
    Musician
};