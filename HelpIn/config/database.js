
var Sequelize = require('sequelize')

var connection = new Sequelize('milton', 'postgres', null, {
  host: "localhost",
  port: 5432,
  dialect: 'postgres',
  language: 'en',
  // sync: { force: true },
})

connection
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });


  module.exports = {
      conn : connection
  };
