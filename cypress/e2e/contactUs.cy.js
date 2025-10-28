import ContactUs from '../pages/ContactUs.js';

describe('Testes de Contact Us', () => {
    beforeEach(() => {
        cy.visit('/contact_us');
    });
    it('Enviar uma mensagem de contato', () => {
        ContactUs.campoName().type('Tiago');
        ContactUs.campoEmail().type('tiago@email.com');
        ContactUs.campoSubject().type('Problema com cadastro de usuário');
        ContactUs.campoMessage().type('Não estou conseguindo cadastrar um usuário. Preciso de ajuda.');
        ContactUs.botaoChooseFile().selectFile('cypress/fixtures/arquivosDeAnexo/arquivoDeTexto.txt').should(function (input) {
            expect(input[0].files[0].name).to.equal('arquivoDeTexto.txt');
        });
        ContactUs.botaoSubmit().click();
        ContactUs.mensagemSucesso().should('have.text', 'Success! Your details have been submitted successfully.');
        ContactUs.botaoHome().click();
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
    });
});
