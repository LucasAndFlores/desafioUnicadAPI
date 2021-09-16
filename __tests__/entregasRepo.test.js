const entregasRepo = require('../repositories/entregasRepo')
const usuarioFake = require('./fakes/user')


entregasRepo
describe('teste repositorio', () => {
    it("puxar todas entregas", async () => {
        const todasEntregas = await entregasRepo.listar()
        expect(todasEntregas).toEqual(todasEntregas)
    }), 
    it("cadastrar entrega no repo", async () => {
        const cadastrar = await entregasRepo.criar(usuarioFake)
        expect(cadastrar).toBe(cadastrar)
    } )
})