class ProdutoService {
    constructor() {
        this.produtos = []; 
    }

    
    listarProdutos() {
        return this.produtos;
    }

   
    adicionarProduto(produto) {
        this.produtos.push(produto);
        return produto;
    }

    
    atualizarProduto(id, produtoAtualizado) {
        const produtoIndex = this.produtos.findIndex(produto => produto.id === id);
        if (produtoIndex === -1) {
            throw new Error("Produto não encontrado!");
        }
        this.produtos[produtoIndex] = { ...this.produtos[produtoIndex], ...produtoAtualizado };
        return this.produtos[produtoIndex];
    }

    
    removerProduto(id) {
        const produtoIndex = this.produtos.findIndex(produto => produto.id === id);
        if (produtoIndex === -1) {
            throw new Error("Produto não encontrado!");
        }
        this.produtos.splice(produtoIndex, 1);
        return { message: "Produto removido com sucesso!" };
    }
}

module.exports = ProdutoService;
