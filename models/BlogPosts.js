const { DataTypes } = require('sequelize');

const blogPostsAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', blogPostsAttributes, {
    timeStamps: false,
    tableName: 'BlogPosts',
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, { foreignKey: 'UserId', as: "User" })
  };

  return BlogPosts;
};