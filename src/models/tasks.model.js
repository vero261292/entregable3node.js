import { DataTypes } from 'sequelize'
import db from '../utils/database.js'

//Modelo de tabla para Tasks
const Task = db.define('tasks', {
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id"
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id"
  },
})

export default Task