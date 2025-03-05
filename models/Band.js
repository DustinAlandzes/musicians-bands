const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
let Band = sequelize.define('Band', {})

module.exports = {
    Band
};