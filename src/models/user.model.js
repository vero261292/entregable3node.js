import { DataTypes } from 'sequelize'
import db from '../utils/database.js'

//Modelo de tabla para usuarios
const User = db.define('users', {
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(40),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
})

export default User