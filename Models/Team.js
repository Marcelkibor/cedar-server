const dbConnect = require('../config/db.config'); 
const { DataTypes } = require('sequelize');

const Team = dbConnect.define('Team', {
fullname: {
    type: DataTypes.STRING,
    allowNull: false
},
position: {
    type: DataTypes.STRING,
    allowNull: false
},
image: {
    type: DataTypes.STRING,
    allowNull: false
}   
});

module.exports = Team;