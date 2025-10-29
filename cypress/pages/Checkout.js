class Checkout {
    dadosYourDeliveryAddress = () => cy.get('#address_delivery');
    dadosYourBillingAddress = () => cy.get('#address_invoice');
    dadosProduto1 = () => cy.get('#product-1');
    precoProduto1 = () => cy.get('#product-1 .cart_price');
    quantidadeProduto1 = () => cy.get('#product-1 .cart_quantity');
    totalProduto1 = () => cy.get('#product-1 .cart_price');
    totalCarrinho = () => cy.get('.cart_total_price');
    campoComentario = () => cy.get('#ordermsg textarea');
    botaoPlaceOrder = () => cy.contains('[href="/payment"]', 'Place Order');
}

export default new Checkout;