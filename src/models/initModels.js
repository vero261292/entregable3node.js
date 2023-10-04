import Category from './categories.model.js'
import Task from './tasks.model.js'
import User from './user.model.js'

//Relaciones entre tablas
const initModels = () => {
  // relationship between users and tasks

  // User - Task
  User.hasMany(Task, { foreignKey: 'userId' })
  Task.belongsTo(User, { foreignKey: 'userId' })

  // Category - Task
  Category.hasMany(Task, { foreignKey: 'categoryId' })
  Task.belongsTo(Category, { foreignKey: 'categoryId' })
}

export default initModels