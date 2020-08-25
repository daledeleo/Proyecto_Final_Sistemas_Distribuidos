
const Sequelize = require('sequelize')

const sequelize = require('../config/database')

const User = sequelize.conn.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  role : Sequelize.STRING,
  permissionLevel : Sequelize.INTEGER
}, {
  tableName: 'usuarios', // this will define the table's name
  paranoid: true
})

// sequelize.conn
//   .sync({ force: true })
//   .then(function(err) {
//     console.log('It worked!');
//   }, function (err) {
//     console.log('An error occurred while creating the table:', err);
//   });
//

exports.createUser = (userData) => {
  return User.create(userData).then(function(user) {
    return user;
  });
}

exports.findByUsername = async (id) => {
    var usuario = await User.findOne({where: { username: id} });
      return usuario;
};

exports.findAllUsers = async () => {
  var usuario = await User.findAll();
    return usuario;
};
