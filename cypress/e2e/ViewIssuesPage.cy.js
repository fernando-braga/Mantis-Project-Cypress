/// <reference types="cypress" />

import utilsPage from "./PageObjects/Common/Utils";
import viewIssuesPage from "./PageObjects/ViewIssuesPage";

describe('View Issues Page Tests', () => {
    const utils = new utilsPage();
    const view_issues_page = new viewIssuesPage();
    
    beforeEach('Access Application', () => {
        utils.accessApplication();
        utils.loginIntoApplication();        
    });

    it('Verify Filters Test', () => {
        view_issues_page.goToViewIssuePage();
        view_issues_page.issuesFiltersFunctionalities();
        view_issues_page.resetBtn();
    });

    it('Apply Filters Test', () => {
        view_issues_page.goToViewIssuePage();
        view_issues_page.applyFilter();
        view_issues_page.clickApplyFilterBtn();
        view_issues_page.filterSearchResult();
    });

    it('Search For Issue By ID Test', () => {
        view_issues_page.goToViewIssuePage();
        view_issues_page.searchForIssueById();
    });

    it('Viewing Issues Section', () => {
        view_issues_page.goToViewIssuePage();
        view_issues_page.DownloadIssuesAsCSV();
        view_issues_page.DownloadIssuesAsExcel();
    })

})