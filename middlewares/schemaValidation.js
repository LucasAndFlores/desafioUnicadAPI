const Joi = require('joi')
const schemas = {
    entregas: Joi.object().keys({
        nome_cliente: Joi.string().required(),
        data_de_entrega: Joi.date().required(),
        ponto_de_partida: Joi.string().required(),
        num_ponto_de_partida: Joi.number().required(),
        ponto_de_destino: Joi.string().required(),
        num_ponto_de_destino: Joi.number().required(),
    }), 
}
module.exports = schemas