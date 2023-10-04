import { Router } from 'express'
import { createCategory } from './category.controllers.js'


// Ruta de categorias
const router = Router()

router.route('/categories').post(createCategory)


export default router
