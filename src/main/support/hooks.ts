const { BeforeAll, Before, After, Status } = require("cucumber");
import * as fs from "fs";
import { browser, protractor, element } from "protractor";
import { By } from "selenium-webdriver";
import { config } from "../config/config";
import * as properties from "../properties/properties";

BeforeAll({ timeout: 10 * 1000 }, async () => {

});

Before(async function (scenario) {
    // To know the scenario currently running
    console.log('Executing the scenario:--> ' + scenario.pickle.name);
});

After(async function (scenario) {
    // Take screenshot in case of failure
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});