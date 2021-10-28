'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  gear.init({
    title: DataTypes.STRING,
    intro: DataTypes.STRING,
    src: DataTypes.STRING,
    title1: DataTypes.STRING,
    intext: DataTypes.STRING,
    interviewer: DataTypes.STRING,
    li1: DataTypes.STRING,
    li2: DataTypes.STRING,
    li3: DataTypes.STRING,
    li4: DataTypes.STRING,
    final: DataTypes.STRING,
    ftext: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'gear',
  });
  return gear;
};