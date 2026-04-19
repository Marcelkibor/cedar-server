const dbConnect = require('../config/db.config'); 
const { DataTypes } = require('sequelize');

const Team = dbConnect.define('Team', {
name: {
    type: DataTypes.STRING,
    allowNull: false
},
image: {
    type: DataTypes.STRING,
    allowNull: false
},
title: {
    type: DataTypes.STRING,
    allowNull: false
},
description: {
    type: DataTypes.TEXT,
    allowNull: false
},  
});

module.exports = Team;