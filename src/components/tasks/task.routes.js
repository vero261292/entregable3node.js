
import { Router } from 'express'
import { createTask, allTasksUser, deleteTask, changeTask } from './task.controllers.js'

// Ruta de la tarea
const router = Router()

router.route('/tasks').post(createTask)

router.route('/tasks/:id').get(allTasksUser).delete(deleteTask).put(changeTask)

export default router
