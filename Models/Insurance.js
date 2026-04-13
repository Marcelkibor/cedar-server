const dbConnect = require('../config/db.config'); 
const { DataTypes } = require('sequelize');

const Insurance = dbConnect.define('Insurance', {
name: {
    type: DataTypes.STRING,
    allowNull: false
},
image: {
    type: DataTypes.STRING,
    allowNull: false
}   
});

module.exports = Insurance;