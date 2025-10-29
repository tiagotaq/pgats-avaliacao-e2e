class Menu {
    logout = () => cy.get('a[href="/logout"]');
    signUpLogin = () => cy.get('a[href="/login"]');
    products = () => cy.get('a[href="/products"]');
};

export default new Menu;