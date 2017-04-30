var testData = require('../data/MarketingPortalTestData.js').testData;
module.exports = {
    '0.Marketing Portal Launch': function(browser) {
        launchMarketingPortalAndAssertLaunch(browser);
        performAssertionsOnLaunchedPage(browser);
    },
    '1.Searching Customer Account': function(browser) {
        selectUserRole(browser);
        selectNumberTheCustomerCalled(browser);
        enterAccountNumberAndOtherDetails(browser);
        clickNextButton(browser);
        expectConfirmationModalAndTakeAction(browser);
    },
    '2.Verify and/or Enter the Customer Information Below.': function(browser) {
        browser
            .waitForElementVisible('//*[@id="container"]/div/div/div[1]/div[2]/div/div[1]/div/div/fieldset/legend', 1000)
            .assert.containsText('//*[@id="container"]/div/div/div[1]/div[2]/div/div[1]/div/div/fieldset/legend', "Step 2. Verify and/or Enter the Customer's Information Below.")
            .click('//*[@id="text-state"]')
            .pause('500')
            .click('//*[@id="text-state"]/option[2]')
            .click('/html/body')
            .pause('500')
            .setValue('//*[@id="text-home-phone"]', testData.homePhone)
            .pause('500')
            .click('//*[@id="radio-preferred-phone-type"]/label[1]')
            .pause('1000')
            .click('//*[@id="next-btn"]')
            .waitForElementVisible('/html/body/div/div/div[2]', 1000);
        browser.saveScreenshot('/screenshots/failure.png');
        browser.assert.containsText('//*[@id="purchase-title"]', 'Message');
        browser.expect.element('/html/body/div/div/div[2]/div/div').to.be.present;

    },
    '2.1.Intermediate Modal': function(browser) {
        browser
            .useXpath()
            .click('//*[@name="isPrequalified" and @id="questionYes"]')
            .pause('2000')
            .click('//*[@name="isIntrestedHome"and @id="questionYes"]')
            .pause('2000')
            .click('//*[@name="isOfferMade" and @id="questionNo"]')
            .pause('2000')
            .click('//*[@name="isOtherAgentWorking" and @id="questionYes"]')
            .pause('2000')
            .click('//*[@id="purchase-next"]')
            .pause('2000')
            .assert.containsText('//*[@id="container"]/div/div/div[1]/div[2]/div/div[2]/div/fieldset/legend', 'Step 3. Complete hot transfer with the information below.');
    },
    '3.Complete hot transfer with the information below.': function(browser) {
        browser
            .useCss()
            .click('#ddlTeamId option:nth-child(2)')
            .pause('1000')
            .click('#ddlMpName option:nth-child(2)')
            .pause('1000')
            .useXpath()
            .click('//*[@id="btnSubmit"]')
            .pause('1000');
    },
    '4.Confirmation': function(browser) {
        browser.expect.element('//*[@id="lblLeadStatus"]').to.be.present;
    },
    'End Test': function(browser) {
        browser
            .pause('1000')
            .end();
    }
};

function selectUserRole(browser) {
    browser
        .click('//*[@id="selectRole"]')
        .pause('500')
        .click('//*[@id="MP"]')
        .click('/html/body')
        .pause('500');
}

function selectNumberTheCustomerCalled(browser) {
    browser
        .click('//*[@id="ddlSearch"]')
        .pause('500')
        .click('//*[@id="1"]')
        .click('/html/body')
        .pause('500')
        .waitForElementVisible('//*[@id="dvDynamic"]', 2000);
}

function enterAccountNumberAndOtherDetails(browser) {
    browser
        .pause('2000')
        .click('//*[@id="rdNewHome"]')
        .pause('1000')
        .setValue('//*[@id="txtAccount"]', testData.accountNumber)
        .pause('1000')
        .setValue('//*[@id="txtSSn"]', testData.primarySSN)
        .pause('1000')
        .setValue('//*[@id="txtZip"]', testData.propertyZip);
}

function clickNextButton(browser) {
    browser
        .click('//*[@id="next-btn"]')
        .pause('1000');
}

function expectConfirmationModalAndTakeAction(browser) {
    browser
        .useCss()
        .waitForElementVisible('body > div > div > div.fade.in.modal', 1000)
        .pause('1000');
    browser
        .useXpath();
    browser.
    expect.element('//*[@id="purchase-close"]').to.be.present;
    browser
        .click('//*[@id="purchase-close"]');
}

function launchMarketingPortalAndAssertLaunch(browser) {
    browser
        .url('http://localhost:12485/')
        .waitForElementVisible('body', 1000)
        .useXpath()
        .assert.containsText('//*[@id="container"]/div/div/div[1]/div[2]/div/fieldset/legend', 'Step 1. Search for the Customer’s Account.');
}

function performAssertionsOnLaunchedPage(browser) {
    var expectUserRoleElement = browser.expect.element('//*[@id="selectRole"]');
    expectUserRoleElement.to.be.present;
    expectUserRoleElement.to.be.a('select');
    var expectNumberCalledElement = browser.expect.element('//*[@id="ddlSearch"]');
    expectNumberCalledElement.to.be.present;
    expectNumberCalledElement.to.be.a('select');
}