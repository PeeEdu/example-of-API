const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config')

const pasteis = sequelize.define('Pasteis', {
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // Pelo menos 1 pastel deve ser pedido
    },
  },
  sabor: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Queijo', 'Frango', 'Carne', 'Calabresa', 'Palmito', 'Chocolate', 'Morango', 'Banana', 'Doce de Leite', 'Romeu e Julieta', 'Vegetariano']],
    },
  },
});

module.exports = pasteis