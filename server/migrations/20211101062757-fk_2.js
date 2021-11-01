"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("likes", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_users_likes",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("likes", {
      fields: ["postId"],
      type: "foreign key",
      name: "fk_posts_likes",
      references: {
        table: "posts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("likes", "fk_users_likes");
    await queryInterface.removeConstraint("likes", "fk_posts_likes");
  },
};
