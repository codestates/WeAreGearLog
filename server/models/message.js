"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  message.init(
    {
      userId: DataTypes.INTEGER,
      roomId: DataTypes.INTEGER,
      body: DataTypes.STRING,
      ownedByCurrentUser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "message",
    }
  );
  return message;
};
