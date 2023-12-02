const express = require('express');
const router = express.Router();
//const db = require("./../db/models");

router.post('/createOrder', async (req, res) =>{
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    let responsavel = req.body.responsavel;
    let pagamento = req.body.pagamento;

    data = {
        Nome: nome,
        Endereco: endereco,
        Telefone: telefone,
        Responsavel: responsavel,
        Pagamento: pagamento
    }
    

    return res.json(data)
})

module.exports = router;