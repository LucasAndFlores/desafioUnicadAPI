'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('entregas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_cliente: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      data_de_entrega: {
        type: Sequelize.DATEONLY,
        required: true,
        allowNull: false
      },
      ponto_de_partida: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      num_ponto_de_partida: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false
      },
      ponto_de_destino: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      num_ponto_de_destino: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('entregas');
  }
};