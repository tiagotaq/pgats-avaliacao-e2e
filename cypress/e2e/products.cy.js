import Products from '../pages/Products.js';
import ProductDetail from '../pages/ProductDetail.js';

describe('Testes de Produtos', () => {
    beforeEach(() => {
        cy.visit('/products');
        Products.titulo().should('have.text', 'All Products');
    });
    it('Verificar lista de produtos e detalhes do primeiro produto', () => {
        Products.linkViewProduct1().click();
        ProductDetail.nomeProduto().should('have.text', 'Blue Top');
        ProductDetail.informacoesDoProduto().should('contain', 'Category: Women > Tops');
        ProductDetail.informacoesDoProduto().should('contain', 'Rs. 500');
        ProductDetail.informacoesDoProduto().should('contain', 'Availability: In Stock');
        ProductDetail.informacoesDoProduto().should('contain', 'Condition: New');
        ProductDetail.informacoesDoProduto().should('contain', 'Brand: Polo');
    });
    it('Pesquisar produto', () => {
        Products.campoPesquisarProdutos().type('Men Tshirt');
        Products.botaoPesquisarProdutos().click();
        Products.informacoesDoProduto().scrollIntoView().should('contain', 'Men Tshirt');
    });
});
