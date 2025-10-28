class Menu {
    logout = () => cy.get('a[href="/logout"]');
    signUpLogin = () => cy.get('a[href="/login"]');
};

export default new Menu;