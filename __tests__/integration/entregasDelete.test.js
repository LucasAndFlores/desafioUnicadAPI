const app = require('../../app')
const request = require('supertest')

describe('Testando rota DELETE', () => {
    it('excluindo um usuario', async () => {
        const response = await request(app)
        .delete('/v1/entregas/1')
        expect(response.status).toBe(200)
    }) 

    it('erro ao excluir usuario sem id', async () => {
        const response = await request(app)
        .delete('/v1/entregas/')
        expect(response.status).toBe(404)

        
    }) 

})