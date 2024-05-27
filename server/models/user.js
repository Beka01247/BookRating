'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }

  User.init({
    user_id: {
      type: DataTypes.INTEGER,  
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,  
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true, 
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users', 
    timestamps: false  
  });

  return User;
};
