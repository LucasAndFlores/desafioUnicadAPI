const express = require('express')
const router = express.Router()
const entregasController = require('../controllers/entregasController')
const middlewareValidacao = require('../middlewares/validation')
const schema = require('../middlewares/schemaValidation')

router.get('/',  entregasController.todasEntregas)
router.post('/', middlewareValidacao(schema.entregas), entregasController.criarEntregas)
router.put('/:id',middlewareValidacao(schema.entregas), entregasController.editarEntregas)
router.delete('/:id', entregasController.deletarEntregas)

module.exports = router