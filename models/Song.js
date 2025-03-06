const {  Model, DataTypes } = require('sequelize');
const {sequelize} = require('../db');

// TODO - define the Song model
class Song extends Model {}

// initializing our Song model and passing in the schema object and the connection object
Song.init(
    {
        title: DataTypes.STRING,
        year: DataTypes.INTEGER,
        length: DataTypes.INTEGER,
    },
    {
        sequelize: sequelize,
        modelName: "Song"
    }
);

module.exports = {
    Song
};