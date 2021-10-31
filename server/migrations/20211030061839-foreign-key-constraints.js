"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //writerId(posts)-userId(users)
    await queryInterface.addConstraint("posts", {
      fields: ["writerId"],
      type: "foreign key",
      name: "fk_post_user",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    //userId(comments)-userId(users)
    await queryInterface.addConstraint("comments", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_comment_user",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    //userId(comments)-userId(users)
    await queryInterface.addConstraint("comments", {
      fields: ["postId"],
      type: "foreign key",
      name: "fk_comment_post",
      references: {
        table: "posts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("posts", "fk_post_user");
    await queryInterface.removeConstraint("comments", "fk_comment_user");
    await queryInterface.removeConstraint("comments", "fk_comment_post");
  },
};
