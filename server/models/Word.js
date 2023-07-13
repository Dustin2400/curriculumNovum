const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Word extends Model {}

Word.init(
  {
    word: {
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
    modelName: 'word'
  }
);

module.exports = Word