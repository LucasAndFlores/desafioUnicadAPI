const app = require('../../app')
const request = require('supertest')

describe('Testando rota GET', () => {
    it('trazer todos os usuarios', async () => {
        const response = await request(app)
        .get('/v1/entregas/')
        expect(response.status).toBe(200)
    }) 

    it('erro ao trazer todos os usuarios', async () => {
        const response = await request(app)
        .get('/v1/entregas/1')
        expect(response.status).toBe(404)
    }) 

})