module.exports = (sequelize, DataTypes) => {
  PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTERGER, primaryKey: true },
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
  })
  return PostCategory
}