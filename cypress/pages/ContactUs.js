class ContactUs {
    campoName = () => cy.get('[data-qa="name"]');
    campoEmail = () => cy.get('[data-qa="email"]');
    campoSubject = () => cy.get('[data-qa="subject"]');
    campoMessage = () => cy.get('[data-qa="message"]');
    botaoChooseFile = () => cy.get('input[type="file"]');
    botaoSubmit = () => cy.get('[data-qa="submit-button"]');
    mensagemSucesso = () => cy.get('.contact-form .alert-success');
    botaoHome = () => cy.get('.btn-success');
};

export default new ContactUs;