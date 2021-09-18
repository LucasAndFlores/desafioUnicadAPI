const app = require('../../app')
const request = require('supertest')

describe('Testando rota PUT', () => {
    it('editando um usuario', async () => {
        const response = await request(app)
        .put('/v1/entregas/1')
        .send(
        {   nome_cliente: "luiza",
            data_de_entrega: "2021-12-25",
            ponto_de_partida: "rua almirante noronha",
            num_ponto_de_partida: 123,
            ponto_de_destino: "avenida paulista",
            num_ponto_de_destino: 452,
        }
        )
        expect(response.status).toBe(200)
    }) 

    it('erro ao editar usuario sem id', async () => {
        const response = await request(app)
        .put('/v1/entregas/')
        .send(
            {   nome_cliente: "luiza",
            data_de_entrega: "2021-12-25",
            ponto_de_partida: "rua almirante noronha",
            num_ponto_de_partida: 123,
            ponto_de_destino: "avenida paulista",
            num_ponto_de_destino: 452,
        }
        )
        expect(response.status).toBe(404)

        
    }) 

    it('erro ao editar usuario sem body', async () => {
        const response = await request(app)
        .put('/v1/entregas/1')
        .send(
            { }
        )
        expect(response.status).toBe(400)

        
    }) 

})