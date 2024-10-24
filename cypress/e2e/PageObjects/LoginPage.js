/// <reference types="cypress" />

class loginPage{
    
    elements = {
        pageTitle: () => cy.get('h4.header.lighter.bigger'),
        userNameField: () =>  cy.get('#username'),
        passwordField: () => cy.get('#password'),
        loginBtn: () => cy.get('.btn-success'),
        enterBtn: () => cy.get('.width-40'),
    }
}

export default loginPage