const { DataTypes } = require('sequelize');

const postsCategoriesAttributes = {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
};

module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', postsCategoriesAttributes, {
    timestamps: false,
    tableName: 'PostsCategories',
  });

  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories', through: PostsCategories, foreignKey: 'postId', otherKey: 'categoryId',
    });

    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'posts', through: PostsCategories, foreignKey: 'categoryId', otherKey: 'postId',
    });
  };

  return PostsCategories;
};