const models = require('../db/models')

const entregasRepo = {
     
    criar: async req => {

            const inserir = await models.entregas.create(req)
            return inserir
     }, 
     
     editar: async (req, where) => {

            const editado = await models.entregas.update(
                req,
                where
            )

     },

     listar: async () => {
            const listar = await models.entregas.findAll({})
            return listar
     }, 

     localizar: async id => {

            const localizar = await models.entregas.findByPk(id)
            return localizar
     }, 
     deletar: async where => {

            const destruir = await models.entregas.destroy(where)
            return "Entrega deletada"
     }, 
}

module.exports = entregasRepo