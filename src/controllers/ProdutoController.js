const ProdutoService = require('../services/ProdutoService');
const produtoService = new ProdutoService();

class ProdutoController {
    
    listarProdutos(req, res) {
        try {
            const produtos = produtoService.listarProdutos();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    
    adicionarProduto(req, res) {
        try {
            const { nome, descricao, preco } = req.body;
            const novoProduto = { id: Date.now(), nome, descricao, preco };
            produtoService.adicionarProduto(novoProduto);
            res.status(201).json(novoProduto);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

   
    atualizarProduto(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { nome, descricao, preco } = req.body;
            const produtoAtualizado = produtoService.atualizarProduto(id, { nome, descricao, preco });
            res.status(200).json(produtoAtualizado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    removerProduto(req, res) {
        try {
            const id = parseInt(req.params.id);
            const result = produtoService.removerProduto(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ProdutoController();
