import Subscription from '../pages/Subscription.js';

describe('Testes de Subscription', () => {
    beforeEach(() => {
        cy.visit('');
    });
    it('Enviar uma mensagem de contato', () => {
        Subscription.campoYourEmailAddress().scrollIntoView().type('tiago@email.com');
        Subscription.botaoSubscribe().click();
        Subscription.mensagemSucesso().should('contain', 'You have been successfully subscribed!');
    });
});
