const entregasRepo = require('../repositories/entregasRepo')

const entregasService = {

    listarEntregas: async () => { 
            let listarTodas = await entregasRepo.listar()
            return listarTodas
    },
    
    criarEntregas: async (req) => {
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
    },
    editarEntregas: async (req) => {

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
    },

    deletarEntregas: async (req) => {
            let { id } = req.params
            let deletarEntrega = await entregasRepo.deletar({
                where: {id: id}
            })
            return deletarEntrega
}
}

module.exports = entregasService