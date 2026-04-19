require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  define: {
    freezeTableName: true
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});


sequelize.sync({ force: true })
  .then(() => console.log('DB synced successfully.'))
  .catch(err => console.error('DB sync error:', err));

module.exports = sequelize;