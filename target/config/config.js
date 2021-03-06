"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    ignoreUncaughtExceptions: true,
    SELENIUM_PROMISE_MANAGER: true,
    // From line 12 to 20 to run the tests in SauceLabs
    chromeDriver: 'C:/driver/chromedriver.exe',
    directConnect: true,
    capabilities: {
        browserName: "chrome",
        'chromeOptions': {
            'args': ['--start-maximized'],
            useAutomationExtension: false
        },
    },
    // From line 22 to 34 to run the tests in SauceLabs
    // sauceUser: 'XXXXXX', --> saucelabs user name
    // sauceKey: 'XXXXXXX', --> sauce key
    // sauceSeleniumAddress: 'ondemand.saucelabs.com:443/wd/hub',
    // sauceBuild: 'XXXXXXX',
    // capabilities: {
    //     browserName: 'chrome',
    //     version: '65.0',
    //     platform: 'Windows 7',
    //     parentTunnel: 'sauce_admin',
    //     tunnelIdentifier: 'OptumSharedTunnel-Stg',
    //     maxDuration: 10800
    // },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../test/features/*.feature",
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../stepdefinitions/*.js", "../support/*.js", "../pages/*.js"],
        strict: true,
        tags: "@demo"
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    },
};
