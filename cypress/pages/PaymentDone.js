class PaymentDone {
    tituloOrderPlaced = () => cy.get('[data-qa="order-placed"]');
}

export default new PaymentDone;