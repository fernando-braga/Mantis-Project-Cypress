/// <reference types="cypress" />

class viewIssuesPage{
    
    elements = {

        viewIssues: () => cy.get('.menu-icon.fa.fa-list-alt'),
        filterTitle: () => cy.get('#filter > .widget-header'),
        reporterFilter: () => cy.get('#reporter_id_filter'),
        assignedToFilter: () => cy.get('#handler_id_filter'),
        monitoredByFilter: () => cy.get('#user_monitor_filter'),
        noteByFilter: () => cy.get('#note_user_id_filter'),
        priorityFilter: () => cy.get('#show_priority_filter'),
        severityFilter: () => cy.get('#show_severity_filter'),
        viewStatusFilter: () => cy.get('#view_state_filter'),
        showStickyIssuesFilter: () => cy.get('#sticky_issues_filter'),
        categoryFilter: () => cy.get('#show_category_filter'),
        hideStatusFilter: () => cy.get('#hide_status_filter'),
        statusFilter: () => cy.get('#show_status_filter'),
        resolutionFilter: () => cy.get('#show_resolution_filter'),
        filterByDateSubmitted: () => cy.get('#do_filter_by_date_filter'),
        filterByLastUpdateDate: () => cy.get('#do_filter_by_last_updated_date_filter'),
        profileFilter: () => cy.get('#show_profile_filter'),
        platformFilter: () => cy.get('#platform_filter'),
        osFilter: () => cy.get('#os_filter'),
        osVersion: () => cy.get('#os_build_filter'),
        relationshipsFilter: () => cy.get('#relationship_type_filter'),
        tagsFilter: () => cy.get('#tag_string_filter'),
        showFilters: () => cy.get('#per_page_filter'),
        sortByFilters: () => cy.get('#show_sort_filter'),
        matchTypeFilters: () => cy.get('#match_type_filter'),
        highlightChangedHours: () => cy.get('#highlight_changed_filter'),
        resetButton: () => cy.get('.btn-toolbar > .form-inline > .btn'),
        reporterIdFilter: () => cy.get('#reporter_id_filter'),
        applyFilterBtn: () => cy.get('.btn-toolbar > .form-inline > .btn'),
        severityColumn: () => cy.get('.buglist-headers > .column-severity'),
        severityColumnListFirstResultDisplayed: () => cy.get('tbody > :nth-child(1) > .column-severity'),
        severityColumnListSecondtResultDisplayed: () => cy.get(':nth-child(2) > .column-severity') ,
        numberColumn: () => cy.get('.buglist-headers > .column-id'),
        numberColumnListResult: () => cy.get('tbody > tr > .column-id'),
        filterApplied: () => cy.get('#bug_action'),
        filterSearchField: () => cy.get('#filter-search-txt'),
        viewIssues: () => cy.get('.menu-icon.fa.fa-list-alt'),
        downloadCSV: () => cy.get('[href="csv_export.php"]'),
        downloadExcel: () => cy.get('[href="excel_xml_export.php"]'),
    }

    goToViewIssuePage() {
        this.elements.viewIssues().click();        
    }

    issuesFiltersFunctionalities() {
        this.elements.filterTitle().contains(' Filtros ');
        this.elements.reporterFilter().click();
        this.elements.assignedToFilter().click();
        this.elements.monitoredByFilter().click();
        this.elements.noteByFilter().click();
        this.elements.priorityFilter().click();
        this.elements.severityFilter().click();
        this.elements.viewStatusFilter().click();
        this.elements.showStickyIssuesFilter().click();
        this.elements.categoryFilter().click();
        this.elements.hideStatusFilter().click();
        this.elements.statusFilter().click();
        this.elements.resolutionFilter().click();
        this.elements.filterByDateSubmitted().click();
        this.elements.filterByLastUpdateDate().click();
        this.elements.profileFilter().click();
        this.elements.platformFilter().click();
        this.elements.osFilter().click();
        this.elements.osVersion().click();
        this.elements.relationshipsFilter().click();
        this.elements.tagsFilter().click();
        this.elements.showFilters().click();
        this.elements.sortByFilters().click();
        this.elements.matchTypeFilters().click();
        this.elements.highlightChangedHours().click();
    }

    resetBtn() {
        this.elements.resetButton().click();
    }

    applyFilter() {
        this.elements.severityFilter().click();
        cy.get('#show_severity_filter_target > .input-xs').select('trivial');
        Cypress.on('uncaught:exception', (err, runnable) => {            
            return false;
        });
    }

    clickApplyFilterBtn() {
        this.elements.applyFilterBtn().click();
    }

    filterSearchResult() {
        this.elements.severityColumn().contains('Gravidade');
        this.elements.severityColumnListFirstResultDisplayed().contains('trivial');
        this.elements.severityColumnListSecondtResultDisplayed().contains('trivial');
    }

    searchForIssueById() {
        this.elements.filterSearchField().type('1894');
        this.elements.applyFilterBtn();
        this.elements.numberColumn().contains('Núm');
        this.elements.numberColumnListResult().should('have.text', '0001894');
    }
    
    DownloadIssuesAsCSV() {
        const fileName = 'Fernando_Santos´s_Project.csv'; 
        const downloadsFolder = Cypress.config('downloadsFolder'); 

        this.elements.downloadCSV().click();
        cy.wait(1000); 
        cy.readFile(`${downloadsFolder}/${fileName}`).should('exist');
    }
    
    DownloadIssuesAsExcel() {
        const fileName = 'Fernando_Santos´s_Project.xml';
        const downloadsFolder = Cypress.config('downloadsFolder'); 
    
        this.elements.downloadExcel().click();
        cy.wait(1000); 
    
        cy.readFile(`${downloadsFolder}/${fileName}`).should('exist');
    }
    
}

export default viewIssuesPage