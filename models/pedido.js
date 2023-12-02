const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config')

const order = sequelize.define('Order', {
    Nome: {
        type:DataTypes.STRING,
        allowNull:false
    },
    Endereco: {
        type:DataTypes.STRING,
        allowNull:false
    },
    Telefone: {
        type:DataTypes.STRING,
        allowNull:false
    },
    Responsavel: {
        type:DataTypes.STRING,
        allowNull:false
    },
    Pagamento: {
        type:DataTypes.STRING,
        allowNull:false
    },
})

module.exports = order