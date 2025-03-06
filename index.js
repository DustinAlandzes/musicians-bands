const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here

// Band has many musicians and a musician only has one band
Band.hasMany(Musician)
Musician.belongsTo(Band)

// band has multiple songs
// multiple bands can have the same song
Band.belongsToMany(Song, {through: 'anything'})
Song.belongsToMany(Band, {through: 'anything'})


module.exports = {
    Band,
    Musician,
    Song
};
