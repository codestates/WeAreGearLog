'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gears', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      intro: {
        type: Sequelize.STRING
      },
      src: {
        type: Sequelize.STRING
      },
      title1: {
        type: Sequelize.STRING
      },
      intext: {
        type: Sequelize.STRING
      },
      interviewer: {
        type: Sequelize.STRING
      },
      li1: {
        type: Sequelize.STRING
      },
      li2: {
        type: Sequelize.STRING
      },
      li3: {
        type: Sequelize.STRING
      },
      li4: {
        type: Sequelize.STRING
      },
      final: {
        type: Sequelize.STRING
      },
      ftext: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gears');
  }
};