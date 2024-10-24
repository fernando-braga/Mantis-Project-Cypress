/// <reference types="cypress" />

import utilsPage from "./PageObjects/Common/Utils";
import reportIssuePage from "./PageObjects/ReportIssue";

describe('Report Issues Tests', () => {
    const utils = new utilsPage();
    const report_issue = new reportIssuePage();
    
    beforeEach('Access Application', () => {
        utils.accessApplication();
        utils.loginIntoApplication();        
    });

    it('Create New Issue', () => {
        const imagePath = 'error-img.png';
        
        report_issue.goToReportIssuePage();
        report_issue.selectCategory();
        report_issue.selectReproducibility();
        report_issue.enterRandomSummary();
        report_issue.fillOutForms();
        report_issue.uploadIssueEvidenceFile(imagePath);
        report_issue.submitIssue();
        report_issue.verifyNewCreationOnTimelineBox();
    })
})