'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Activity,{foreignKey: 'email'});
  User.hasMany(models.Activity,{foreignKey: 'email'});
  };
  return User;
};