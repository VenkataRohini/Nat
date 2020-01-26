"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class mortgagePage {
    constructor() {
        this.mortgageText = protractor_1.element(protractor_1.by.css("h1[class='blue boldText headingSize01  center ']"));
    }
    clickingMortgageYesOrNo() {
        protractor_1.element(protractor_1.by.id("selectorItemHaveNationwideMortgage1")).click();
    }
    clickingFirstTimeBuy() {
        protractor_1.element(protractor_1.by.id("selectorItemNationwideMortgageTypeNo0")).click();
    }
    enterPropertyValue(propertyValue) {
        protractor_1.element(protractor_1.by.id("SearchPropertyValue")).sendKeys(propertyValue);
    }
    entermortgageAmount(mortgageAmount) {
        protractor_1.element(protractor_1.by.id("SearchDepositAmount")).sendKeys(mortgageAmount);
    }
    entertermORYears(term) {
        protractor_1.element(protractor_1.by.id("SearchMortgageTerm")).sendKeys(term);
    }
    clickOnFindMortgageRates() {
        //element(by.buttonText("Find a mortgage rate")).click();
        protractor_1.element(protractor_1.by.css("button[data-di-id='#myButton']")).click();
    }
    selectedFixedrateCheckbox() {
        protractor_1.element(protractor_1.by.css("label[for='input-fixed']")).click();
    }
    selectedProductFeeCheckbox() {
        protractor_1.element(protractor_1.by.css("label[for='product-fee-input-fee']")).click();
    }
    selectedHelpToBuy() {
        protractor_1.element(protractor_1.by.css("label[for='HelpToBuyInput']")).click();
    }
    selectedMoreDetailsInfo() {
        protractor_1.element(protractor_1.by.xpath("//*[text()='More info and apply']/following-sibling::*[1][text()=' for 5 yr  Fixed']/preceding-sibling::*")).click();
    }
    selectedFixedMortgageApply() {
        protractor_1.element(protractor_1.by.css("a[data-productname*='5 yr Fixed']")).click();
    }
    getMortgageStartedHeading() {
        this.mortgageText.getText().then(function (text) {
            return text;
        });
    }
    waitForElement() {
        protractor_1.browser.manage().timeouts().implicitlyWait(2000);
    }
    wait() {
        protractor_1.browser.sleep(3000);
    }
}
exports.mortgagePage = mortgagePage;
