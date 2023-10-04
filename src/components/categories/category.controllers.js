
import Category from '../../models/categories.model.js'

// POST: crear categorias
const createCategory = async (req, res) => {
  try {
    const { body } = req
    const categories = await Category.create(body)
    res.status(201).json(categories)
  } catch (error) {
    res.status(400).json(error)
  }
}

export { createCategory }