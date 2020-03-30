'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    email: DataTypes.STRING,
    date: DataTypes.STRING,
    activity: DataTypes.STRING,
    start_Time:DataTypes.STRING,
    end_Time:DataTypes.STRING

  }, {});
  Activity.associate = function(models) {
    // associations can be defined here
    
  };
  return Activity;
};