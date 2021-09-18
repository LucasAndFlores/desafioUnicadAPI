const entregasServices = require('../services/entregasSerivces')

const EntregasController = {

    todasEntregas: async (req,res) =>  {

        let listarTodas = await entregasServices.listarEntregas()
            
        res.status(200).json(listarTodas)

    },

    criarEntregas: async (req,res) =>  {

        let criarEntrega = await entregasServices.criarEntregas(req)
        
        // if(criarEntrega === req.body) {
        //     return res.status(409).send("message: entrega already exist")
        // }

        res.status(200).json(criarEntrega)

    },
    editarEntregas: async (req,res) =>  {

            
        let editarEntrega = await entregasServices.editarEntregas(req)
            
        res.status(200).json(editarEntrega)

    },

    deletarEntregas: async (req,res) =>  {

            
        let deletarEntrega = await entregasServices.deletarEntregas(req)
            
        res.status(200).json(deletarEntrega)

    }
}

module.exports = EntregasController