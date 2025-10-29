class Products {
    titulo = () => cy.get('.title');
    linkViewProduct1 = () => cy.get('a[href="/product_details/1"]');
    campoPesquisarProdutos = () => cy.get('[placeholder="Search Product"]');
    botaoPesquisarProdutos = () => cy.get('#submit_search');
    informacoesDoProduto = () => cy.get('.productinfo');
    botaoAddToCartProduct1 = () => cy.get('.productinfo [data-product-id="1"]');
};

export default new Products;