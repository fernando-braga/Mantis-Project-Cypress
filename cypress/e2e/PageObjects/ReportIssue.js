/// <reference types="cypress" />

class reportIssuePage {
        
        elements = {        
            
            createTaskButton: () => cy.get('.menu-text').contains('Criar Tarefa'),
            pageContent: () => cy.get('.page-content', { timeout: 5000 }),
            categoryDropdown: () => cy.get('#category_id'),
            reproducibilityDropdown: () => cy.get('#reproducibility'),
            severityDropdown: () => cy.get('#severity'),
            priorityDropdown: () => cy.get('#priority'),
            summaryField: () => cy.get('#summary'),
            descriptionField: () => cy.get('#description'),
            stepsToReproduceField: () => cy.get('#steps_to_reproduce'),
            additionalInfoField: () => cy.get('#additional_info'),
            tagsField: () => cy.get('#tag_string'),
            existingTagsDropdown: () => cy.get('select[name="tag_select"]'),
            uploadFileArea: () => cy.get('.dropzone.center.dz-clickable'),
            fileInput: () => cy.get('#file-upload'),
            submitIssueButton: () => cy.get('.btn.btn-primary'),
            viewIssuesDetails: () => cy.get('.ace-icon.fa.fa-bars'),
            bugSummary: () => cy.get('td.bug-project'),
        };
    
        goToReportIssuePage() {
            this.elements.createTaskButton().click();
            this.elements.pageContent().should('be.visible');
        }

        selectCategory() {
            this.elements.categoryDropdown().select('[Todos os Projetos] categoria teste');
        }

        selectReproducibility() {           
            this.elements.reproducibilityDropdown()
                .find('option')
                .then(options => {
                    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
                    cy.wrap(options[randomIndex]).then(option => {
                        cy.wrap(option).invoke('val').then(value => {
                            this.elements.reproducibilityDropdown().select(value);
                        });
                    });
                });
        }

        selectSeverityAndPriority() {
            const severityOptions = ["trivial", "texto", "mínimo", "recurso", "grande", "travamento", "obstáculo"];
            const priorityOptions = ["nenhuma", "baixa", "normal", "alta", "urgente", "imediato"];
            this.selectRandomOptionFromDropdown(this.elements.severityDropdown(), severityOptions)
                .then(selectedSeverity => {
                    let filteredPriorityOptions;
                    if (["grande", "travamento", "obstáculo"].includes(selectedSeverity)) {
                        filteredPriorityOptions = ["alta", "urgente", "imediato"];
                    } else {
                        filteredPriorityOptions = priorityOptions;
                    }
    
                    this.selectRandomOptionFromDropdown(this.elements.priorityDropdown(), filteredPriorityOptions);
                });
        }
    
        selectRandomOptionFromDropdown(dropdownElement, optionsToConsider) {
            return dropdownElement
                .find('option')
                .then(options => {
                    const filteredOptions = Array.from(options).filter(option => {
                        return optionsToConsider.includes(option.innerText.trim());
                    });
    
                    const randomIndex = Math.floor(Math.random() * filteredOptions.length);
                    const selectedOption = filteredOptions[randomIndex];
    
                    cy.wrap(selectedOption).invoke('val').then(value => {
                        dropdownElement.select(value);
                    });
    
                    return cy.wrap(selectedOption).invoke('text');
                });
        }

        enterRandomSummary() {
            const phrases = [
                "Application is experiencing intermittent issues",
                "Error in data loading process",
                "System crashes under heavy load",
                "Unexpected behavior during user login"
            ];
    
            const randomIndex = Math.floor(Math.random() * phrases.length);
            const randomPhrase = phrases[randomIndex];
            const randomTitle = `[BUG] - ${randomPhrase}`;
    
            this.elements.summaryField().type(randomTitle);
        }

        fillOutForms() {
            this.elements.descriptionField().type(
                "As a user\n" +
                "I want to navigate through application pages\n" +
                "So I can use all functionalities"
            );
    
            this.elements.stepsToReproduceField().type(
                "Given I enter my credentials on login page\n" +
                "And I log into application\n" +
                "When I click to navigate to other pages from menu icons\n" +
                "Expected Result: Page loads and I proceed to next page\n" +
                "Actual result: The page loading is taking too long to proceed and intermittently returning timeout error"
            );
    
            this.elements.additionalInfoField().type(
                "Error occurs in different tested browsers"
            );
    
            this.elements.tagsField().type("Os 777," + "Test Enviroment");    
            this.elements.existingTagsDropdown().select("bug");
        }

        uploadIssueEvidenceFile(filePath) {
            this.elements.uploadFileArea().then(uploadFile => {
                const input = Cypress.$('<input type="file" style="display: block;" id="file-upload">');
                uploadFile.append(input);
                this.elements.fileInput().attachFile(filePath);
            });

            cy.wait(5000); 
        }

        submitIssue() {
            this.elements.submitIssueButton().click();
            cy.wait(200);
            this.elements.viewIssuesDetails().should('be.visible');
        }

        verifyNewCreationOnTimelineBox() {
            this.elements.bugSummary().should('contain', 'Fernando Santos´s Project');
            
        }
}

export default reportIssuePage