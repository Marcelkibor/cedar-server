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
// const sequelize = new Sequelize
// ({
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres',
//   logging: false,
//   define: {
//     freezeTableName: true
//   },
// });

sequelize.sync({ alter: true })
  .then(() => console.log('DB synced successfully.'))
  .catch(err => console.error('DB sync error:', err));

module.exports = sequelize;