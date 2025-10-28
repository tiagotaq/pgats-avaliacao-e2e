class ProductDetail {
    informacoesDoProduto = () => cy.get('.product-information');
    nomeProduto = () => cy.get('.product-information h2');
};

export default new ProductDetail;