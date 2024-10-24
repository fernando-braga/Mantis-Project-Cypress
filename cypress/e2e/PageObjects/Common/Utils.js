/// <reference types="cypress" />
import login_page from "../LoginPage";

const loginPage = new login_page()
class utilsPage{

    accessApplication(){
        cy.visit('/')
    }

    loginIntoApplication() {
        this.accessApplication();

        const userName = "Fernando_Santos";
        const password = "Senhadesafiotecnico**";
        
        loginPage.elements.userNameField().type(userName);
        loginPage.elements.loginBtn().click();
        loginPage.elements.passwordField().type(password);    
        loginPage.elements.enterBtn().click();
        cy.url({ timeout: 10000 }).should('include', '/my_view_page.php'); 
        cy.get('#sidebar').should('be.visible');     
        
    }
}

export default utilsPage