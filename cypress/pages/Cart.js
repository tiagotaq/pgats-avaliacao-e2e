class Cart {
    dadosProduto1 = () => cy.get('#product-1');
    linkViewCart = () => cy.contains('[href="/view_cart"]', 'View Cart');
    botaoProceedToCheckout = () => cy.contains('a', 'Proceed To Checkout');
}

export default new Cart;