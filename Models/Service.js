const dbConnect = require('../config/db.config'); 
const { DataTypes } = require('sequelize');

const Service = dbConnect.define('Service', {
name: {
    type: DataTypes.STRING,
    allowNull: false
},
description: {
    type: DataTypes.TEXT,
    allowNull: false
}   
});

module.exports = Service;