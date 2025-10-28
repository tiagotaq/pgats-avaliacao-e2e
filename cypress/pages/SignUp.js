class SignUp {
    radioMr = () => cy.get('input[type="radio"][value="Mr"]');
    campoPassword = () => cy.get('[data-qa="password"]');
    comboDay = () => cy.get('[data-qa="days"]');
    comboMonth = () => cy.get('[data-qa="months"]');
    comboYear = () => cy.get('[data-qa="years"]');
    campoFisrtName = () => cy.get('[data-qa="first_name"]');
    campoLastName = () => cy.get('[data-qa="last_name"]');
    campoAddress = () => cy.get('[data-qa="address"]');
    comboCountry = () => cy.get('[data-qa="country"]');
    campoState = () => cy.get('[data-qa="state"]');
    campoCity = () => cy.get('[data-qa="city"]');
    campoZipCode = () => cy.get('[data-qa="zipcode"]');
    campoMobileNumber = () => cy.get('[data-qa="mobile_number"]');
    botaoCreateAccount = () => cy.get('[data-qa="create-account"]')

    cadastrarUsuario(usuario){
        this.radioMr().check();
        this.campoPassword().type(usuario.password);
        this.comboDay().select(usuario.birthDay);
        this.comboMonth().select(usuario.birthMonth);
        this.comboYear().select(usuario.birthYear);
        this.campoFisrtName().type(usuario.fisrtName);
        this.campoLastName().type(usuario.lastName);
        this.campoAddress().type(usuario.address)
        this.comboCountry().select(usuario.country);
        this.campoState().type(usuario.state);
        this.campoCity().type(usuario.city);
        this.campoZipCode().type(usuario.zipCode);
        this.campoMobileNumber().type(usuario.phone);
        this.botaoCreateAccount().click();
    };
};

export default new SignUp;