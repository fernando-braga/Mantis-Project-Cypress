/// <reference types="cypress" />

class myViewPage {
    
    elements = {
        leftMenu: () => cy.get('#sidebar'),
        mainMenuOptions: () => cy.get('.white'),
        reportIssueBtn: () => cy.get('.hidden-sm > .btn-group > .btn'),
        searchForId: () => cy.get('input[name="bug_id"]'), 
        confirmId: () => cy.get('.bug-id'),
        timelineBox: () => cy.get('#timeline'),
    }

    verifyLeftMenuItems() {
        const expectedIcons = ["Minha Visão", "Ver Tarefas", "Criar Tarefa", "Registro de Mudanças", "Planejamento"];

        this.elements.leftMenu()
            .find('li > a > span.menu-text') 
            .then(menuItems => {
                const menuItemsText = Cypress.$(menuItems).map((index, item) => {
                    return Cypress.$(item).text().trim();
                }).get(); 

                cy.log('Itens do Menu:', menuItemsText.join(', '));

                expectedIcons.forEach(icon => {
                    expect(menuItemsText).to.include(icon);
                });
            });
    }

    verifyIssuesFromHomePageMainMenu() {
        {
            const titles = [
                "Não Atribuídos",
                "Relatados por Mim",
                "Resolvidos",
                "Modificados Recentemente (30 Dias)",
                "Monitorados por Mim"
            ];
    
            titles.forEach(title => {
                this.elements.mainMenuOptions().filter(`:contains(${title})`).each(($element) => {
                    cy.wrap($element).click();     
                    cy.url().should('include', 'view_all_bug_page.php?filter=');                    
                    cy.go('back');
                });
            });
        }
    }

    goToReportIssueFromNavbar() {
        this.elements.reportIssueBtn().click(); 
        cy.url().should('include', 'bug_report_page.php');
    }

    searchIssueByIdOnHomePage() {
        this.elements.searchForId().type('0001890').type('{enter}'); 
        this.elements.confirmId().should('contain.text', '0001890');
    }

    verifyTimelineBox() {
        this.elements.timelineBox().should('exist');
        this.elements.timelineBox().invoke('text').should('contain', 'Linha do tempo');
    }

}

export default myViewPage;
