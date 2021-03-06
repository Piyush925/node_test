'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t)=>{
      return Promise.all([
        queryInterface.addColumn('Activities','start_Time',{
          type:Sequelize.STRING
        },{transaction:t}),
        queryInterface.addColumn('Activities','end_Time',{
          type:Sequelize.STRING
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
