require('chromedriver');

var SeleniumWebdriver = require('selenium-webdriver');
var {
    defineSupportCode
} = require('cucumber');

function CustomWorld() {
    this.driver = new SeleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();
}

defineSupportCode(function ({
    setWorldConstructor
}) {
    setWorldConstructor(CustomWorld);
});