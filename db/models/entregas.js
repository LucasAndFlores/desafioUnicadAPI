'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entrega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  entrega.init({
    nome_cliente: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    data_de_entrega: {
      type: DataTypes.DATEONLY,
      required: true,
      allowNull: false
    },
    ponto_de_partida: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    num_ponto_de_partida: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false
    },
    ponto_de_destino: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    num_ponto_de_destino: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'entregas',
    underscored: true
  });
  return entrega;
};