const app = require('../../app')
const request = require('supertest')

describe('Testando rota POST', () => {
    it('criar um usuario', async () => {
        const response = await request(app)
        .post('/v1/entregas/')
        .send(
        {   nome_cliente: "luiza",
            data_de_entrega: "2021-12-25",
            ponto_de_partida: "rua almirante noronha",
            num_ponto_de_partida: 123,
            ponto_de_destino: "rua do tatuape",
            num_ponto_de_destino: 452,
        }
        )
        expect(response.status).toBe(200)
    }) 

    it('erro de entrega igual já existe', async () => {
        const response = await request(app)
        .post('/v1/entregas/')
        .send(
        {   nome_cliente: "luiza",
            data_de_entrega: "2021-12-25",
            ponto_de_partida: "rua almirante noronha",
            num_ponto_de_partida: 123,
            ponto_de_destino: "rua do tatuape",
            num_ponto_de_destino: 452,
        }
        )
        expect(response.status).toBe(200)
    }) 

    it('erro ao criar usuario sem o body', async () => {
        const response = await request(app)
        .post('/v1/entregas/')
        .send(
        {
            nome_cliente: "luiza"
        }
        )
        expect(response.status).toBe(400)
    }) 

})