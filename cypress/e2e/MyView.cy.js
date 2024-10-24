/// <reference types="cypress" />

import utilsPage from "./PageObjects/Common/Utils";
import myViewPage from "./PageObjects/MyViewPage";

describe('My View Page tests', () => {
    const utils = new utilsPage();
    const my_view_page = new myViewPage();

    beforeEach('Access Application', () => {
        utils.accessApplication();
        utils.loginIntoApplication();        
    });

    it('Verify Left Menu Icons', () => {
        my_view_page.verifyLeftMenuItems();
    });

    it('Go To My Issues Page From Home Page', () => {
        my_view_page.verifyIssuesFromHomePageMainMenu();
    });

    it('Go to Report Issue Page From Home Page', () => {
        my_view_page.goToReportIssueFromNavbar();
    });

    it('Search Issue By ID', () => {
        my_view_page.goToReportIssueFromNavbar();
    });

    it('Verify Timeline Box', () => {
        my_view_page.verifyTimelineBox();
    });
})
