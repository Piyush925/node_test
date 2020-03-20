'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t)=>{
      return Promise.all([
        queryInterface.addColumn('Activities','startTime',{
          type:Sequelize.INTEGER
        },{transaction:t}),
        queryInterface.addColumn('Activities','endTime',{
          type:Sequelize.INTEGER
        },{transaction:t})
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
