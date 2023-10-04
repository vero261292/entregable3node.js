import Category from '../../models/categories.model.js'
import Task from '../../models/tasks.model.js'
import User from '../../models/user.model.js'

// GET: de todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'password'],
      include: [
        {
          model: Task,
          attributes: ['id', 'title', 'description', 'completed'],
          include: { model: Category, attributes: ['name', 'description'] },
        },
      ],
    })
    res.json(users)
  } catch (error) {
    res.status(400).json(error)
    console.log(error)
  }
}

// POST: crear usuarios
const createUser = async (req, res) => {
  try {
    const { body } = req
    const users = await User.create(body)
    res.status(201).json(users)
  } catch (error) {
    res.status(400).json(error)
  }
}



export { getAllUsers, createUser }