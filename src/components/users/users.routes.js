import { Router } from 'express'
import { createUser, getAllUsers } from './users.controllers.js'

//Ruta para usuarios
// Ruta parz crear usuarios
// Ruta para agregar task
const router = Router()

router.route('/users').post(createUser).get(getAllUsers)

export default router