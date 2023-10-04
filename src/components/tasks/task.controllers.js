import { where } from 'sequelize'
import Task from '../../models/tasks.model.js'
import User from '../../models/user.model.js'
import Category from '../../models/categories.model.js'

//POST: crear una tarea
const createTask = async (req, res) => {
  try {
    const { body } = req
    const tasks = await Task.create(body)
    res.status(201).json(tasks)
  } catch (error) {
    res.status(400).json(error)
  }
}

//GET: llamar todas las tareas
const allTasksUser = async (req, res) => {
  try {
    const { id } = req.params

    const taskUser = await User.findAll({
      where: { id },
      attributes: ['id', 'name'],
      include: [
        {
          model: Task,
          attributes: ['id', 'title', 'description', 'completed'],
          include: [{ model: Category, attributes: ['name'] }],
        },
      ],
    })
    res.json(taskUser)
  } catch (error) {
    res.status(400).json(error)
  }
}

//DEL: eliminar una tarea
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    await Task.destroy({
      where: { id },
    })
    res.status(204).end()
  } catch (error) {
    res.status(400).json(error)
  }
}

//UPDATE: Actualizar estado de completado
const changeTask = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const users = await Task.update(body, {
      where: { id },
    })
    res.json(users)
  } catch (error) {
    res.status(400).json(error)
  }
}

export { createTask, allTasksUser, deleteTask, changeTask }