"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("posts", "like", {
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 0,
    });
    await queryInterface.addColumn("posts", "comment", {
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 0,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("posts", "like");
    await queryInterface.removeColumn("posts", "comment");
  },
};
