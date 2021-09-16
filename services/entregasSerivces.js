const entregasRepo = require('../repositories/entregasRepo')

const entregasService = {

    listarEntregas: async () => {
        try {
            let listarTodas = await entregasRepo.listar()
            return listarTodas
        } catch (error) {
            return error
        }
    },
    
    criarEntregas: async (req) => {
        try {
            let { nome_cliente,
                data_de_entrega,
                ponto_de_partida,
                num_ponto_de_partida,
                ponto_de_destino, 
                num_ponto_de_destino } = req.body

            const criado = await entregasRepo.criar({

                nome_cliente,
                data_de_entrega,
                ponto_de_partida,
                num_ponto_de_partida,
                ponto_de_destino, 
                num_ponto_de_destino 
            })
            
            return criado
        } catch (error) {
            return error
        }
    },
    editarEntregas: async (req) => {
        try {
            let { id } = req.params

            let { nome_cliente,data_de_entrega,
                ponto_de_partida,
                num_ponto_de_partida,
                ponto_de_destino, 
                num_ponto_de_destino } = req.body

            const atualizandoEntrega = await entregasRepo.editar(
                {
                nome_cliente,data_de_entrega,
                ponto_de_partida,
                num_ponto_de_partida,
                ponto_de_destino, 
                num_ponto_de_destino, 
            } , {
                where: {id: id}
            })
            const entregaAtualizada = await entregasRepo.localizar(
                id = id
            )
            
            return entregaAtualizada
        } catch (error) {
            return error
        }
    },

    deletarEntregas: async (req) => {
        try {
            let { id } = req.params
            let deletarEntrega = await entregasRepo.deletar({
                where: {id: id}
            })
            return deletarEntrega
        } catch (error) {
            return error
        }
    },
}

module.exports = entregasService