const entregasServices = require('../services/entregasSerivces')

const EntregasController = {

    todasEntregas: async (req,res) =>  {
        try {
            let listarTodas = await entregasServices.listarEntregas()
            
            res.status(200).json(listarTodas)
        } catch (error) {
            return error
        }
    },

    criarEntregas: async (req,res) =>  {
        try {
            let criarEntrega = await entregasServices.criarEntregas(req)
           
            res.status(200).json(criarEntrega)
        } catch (error) {
            return error
        }
    },

    editarEntregas: async (req,res) =>  {
        try {
            
            let editarEntrega = await entregasServices.editarEntregas(req)
            
            res.status(200).json(editarEntrega)
        } catch (error) {
            return error
        }
    },

    deletarEntregas: async (req,res) =>  {
        try {
            
            let deletarEntrega = await entregasServices.deletarEntregas(req)
            
            res.status(200).json(deletarEntrega)
        } catch (error) {
            return error
        }
    }
}

module.exports = EntregasController