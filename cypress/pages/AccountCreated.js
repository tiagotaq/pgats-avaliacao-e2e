class AccountCreated {
    tituloContaCriada = () => cy.get('[data-qa="account-created"]');
    botaoContinue = () => cy.get('[data-qa="continue-button"]');
};

export default new AccountCreated;