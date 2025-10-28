class Login {
    campoNameSignUp = () => cy.get('[data-qa="signup-name"]');
    campoEmailSignUp = () => cy.get('[data-qa="signup-email"]');
    botaoSignUp = () => cy.get('[data-qa="signup-button"]');
    campoEmailLogin = () => cy.get('[data-qa="login-email"]');
    campoSenhaLogin = () => cy.get('[data-qa="login-password"]');
    botaoLogin = () => cy.get('[data-qa="login-button"]');

    realizarLogin(usuario, senha) {
        this.campoEmailLogin().type(usuario);
        this.campoSenhaLogin().type(senha);
        this.botaoLogin().click();
    };

    acessarFormularioDeSignUp(nome, email) {
        this.campoNameSignUp().type(nome);
        this.campoEmailSignUp().type(email);
        this.botaoSignUp().click();
    };
};

export default new Login;