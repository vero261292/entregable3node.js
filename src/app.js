// Configuración y conexión a la base de datos
import express from 'express'
import db from './utils/database.js'
import userRoutes from './components/users/users.routes.js'
import categoriesRoutes from './components/categories/category.routes.js'
import taskRoutes from './components/tasks/task.routes.js'
import initModels from './models/initModels.js'

// Llamada a la función initModels para inicializar los modelos de la base de datos
initModels()

// Autenticación de la base de datos
db.authenticate()
  .then(() => console.log('Conexión exitosa'))
  .catch(err => console.log(err))

// Sincronización de la base de datos
db.sync()
  .then(() => console.log('Sincronización completa'))
  .catch(err => console.log(err))

const PORT = process.env.PORT ?? 8000

const app = express()

// llamar al controlador de user
app.use(express.json())
app.use(userRoutes, categoriesRoutes, taskRoutes)


app.get('/', (req, res) => {
  res.send('OK')
})

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`)
})