const { Router } = require('express');
require('dotenv').config()
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const recipesRouter = require("./recipes.js")
const dietRouter = require("./diets.js")


router.use('/recipes', recipesRouter)
router.use('/diets', dietRouter)








module.exports = router;
