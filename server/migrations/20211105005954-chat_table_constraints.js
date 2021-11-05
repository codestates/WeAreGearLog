"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("messages", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_users_messages",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("messages", {
      fields: ["roomId"],
      type: "foreign key",
      name: "fk_chatrooms_messages",
      references: {
        table: "chatrooms",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("chatroom_joins", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_users_chatroom_joins",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("chatroom_joins", {
      fields: ["roomId"],
      type: "foreign key",
      name: "fk_chatrooms_chatroom_joins",
      references: {
        table: "chatrooms",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("chatrooms", {
      fields: ["postId"],
      type: "foreign key",
      name: "fk_posts_chatrooms",
      references: {
        table: "posts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("messages", "fk_users_messages");
    await queryInterface.removeConstraint("messages", "fk_chatrooms_messages");
    await queryInterface.removeConstraint(
      "chatroom_joins",
      "fk_users_chatroom_joins"
    );
    await queryInterface.removeConstraint(
      "chatroom_joins",
      "fk_chatrooms_chatroom_joins"
    );
    await queryInterface.removeConstraint("chatrooms", "fk_posts_chatrooms");
  },
};
