

const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

router.get('/', ProdutoController.listar);


router.post('/', ProdutoController.adicionar);


router.get('/remover/:id', ProdutoController.remover);

module.exports = router;
