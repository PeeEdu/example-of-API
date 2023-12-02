const express = require('express');
const cors = require ('cors');
const app = express();
const pedido = require('./controllers/pedido');
const order = require('./models/pedido');
const pasteis = require('./models/pasteis');
const sequelize = require('./sequelize-config');

app.use(express.json());

app.use('/pedido', pedido)


app.get("/", (req, res) => {
    return res.json({titulo: "Como criar API"});
});

sequelize.sync({force:true})
  .then(() => {
    console.log('Modelo sincronizado com o banco de dados.');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar modelo:', err);
  });

app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});

