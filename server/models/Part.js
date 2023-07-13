const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Part extends Model {}

Part.init(
  {
    part: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    definition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    root: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transliteral: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'part'
  }
);

module.exports = Part;