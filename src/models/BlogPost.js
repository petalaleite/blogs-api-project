
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'blog_post'
  })
  Posts.associate = (models) => {
    Posts.belongsTo(models.User, { foreignKey: 'userId', as: 'user '})
  }
  return Posts
}