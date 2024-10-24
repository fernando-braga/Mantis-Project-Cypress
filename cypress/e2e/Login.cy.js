/// <reference types="cypress" />

import utilsPage from "./PageObjects/Common/Utils";
import loginPage from "./PageObjects/LoginPage";

describe('Login', () => {
    const login_page = new loginPage();
    const utils = new utilsPage();

    beforeEach('Access Application', () => {
        utils.accessApplication();
    });

    it('Login into application', () => {
        login_page.elements.pageTitle().should('have.text', '\n\nLogin ');
        utils.loginIntoApplication();
    })
})