class Payment {
    campoNameOnCard = () => cy.get('[data-qa="name-on-card"]');
    campoCardNumber = () => cy.get('[data-qa="card-number"]');
    campoCvc = () => cy.get('[data-qa="cvc"]');
    campoExpirationMonth = () => cy.get('[data-qa="expiry-month"]');
    campoExpirationYear = () => cy.get('[data-qa="expiry-year"]');
    botaoPayAndConfirmOrder = () => cy.get('[data-qa="pay-button"]');
    mensagemSucesso = () => cy.get('#success_message');
}

export default new Payment;