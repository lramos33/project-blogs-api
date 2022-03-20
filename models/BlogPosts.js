const { DataTypes, Sequelize } = require('sequelize');

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
    defaultValue: Sequelize.fn('now'),
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
  },
};

module.exports = (sequelize, _DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', blogPostsAttributes, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPosts;
};