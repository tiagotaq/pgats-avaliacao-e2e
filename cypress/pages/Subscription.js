class Subscription {
    campoYourEmailAddress = () => cy.get('input[placeholder="Your email address"]');
    botaoSubscribe = () => cy.get('#subscribe');
    mensagemSucesso = () => cy.get('#success-subscribe');
};

export default new Subscription;