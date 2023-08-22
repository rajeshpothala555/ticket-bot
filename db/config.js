const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ticket', 'root', 'AMMAnanna@123', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Ticket = require('../models/ticket')(sequelize, Sequelize);
db.User = require('../models/usermodel')(sequelize,Sequelize);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Synced.......");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;