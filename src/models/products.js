const sequelizePaginate = require('sequelize-paginate')

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        as: 'Supplier',
        foreignKey: 'UserId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      this.hasMany(models.Product_in, {
        foreignKey: 'ProductId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      this.hasMany(models.Product_out, {
        foreignKey: 'ProductId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

    }
  };
  Products.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    image_url:DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  sequelizePaginate.paginate(Products)
  return Products;
};