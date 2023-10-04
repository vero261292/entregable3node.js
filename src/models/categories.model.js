import {  DataTypes } from 'sequelize'
import db from '../utils/database.js'

//Modelo de tabla para Category
const Category = db.define(
  'categories',
  {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

  }
)

export default Category
