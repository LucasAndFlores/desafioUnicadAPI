const models = require('../db/models')

const entregasRepo = {
     
    criar: async req => {
        try {
            const inserir = await models.entregas.create(req)
            return inserir
        } catch (error) {
            let erro = (error.errors[0].message)
            return {message: erro}
        }
     }, 
     
     editar: async (req, where) => {
        try {
            const editado = await models.entregas.update(
                req,
                where
            )
        } catch (error) {
            let erro = (error.errors[0].message)
            return {message: erro}
        }
     },

     listar: async () => {
        try {
            const listar = await models.entregas.findAll({})
            return listar
        } catch (error) {
            let erro = (error.errors[0].message)
            return {message: erro}
        }
     }, 

     localizar: async id => {
        try {
            const localizar = await models.entregas.findByPk(id)
            return localizar
        } catch (error) {
            let erro = (error.errors[0].message)
            return {message: erro}
        }
     }, 
     deletar: async where => {
        try {
            const destruir = await models.entregas.destroy(where)
            return "Entrega deletada"
        } catch (error) {
            let erro = (error.errors[0].message)
            return {message: erro}
        }
     }, 
}

module.exports = entregasRepo