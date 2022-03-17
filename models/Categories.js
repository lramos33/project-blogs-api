const { DataTypes } = require('sequelize');

const categoriesAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize, _DataTypes) => {
  const categories = sequelize.define('categories', categoriesAttributes, {
    timeStamps: false, 
    tableName: 'Categories',
  });

  return categories;
};