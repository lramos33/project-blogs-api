const { DataTypes } = require('sequelize');

const usersAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize, _DataTypes) => {
  const Users = sequelize.define('Users', usersAttributes, { 
    timeStamps: false,
    tableName: 'Users',
  });

  Users.associate = (models) => {
    Users.hasMany(models.BlogPosts, { foreignKey: 'UserId', as: "BlogPosts" });
  }

  return Users;
};
