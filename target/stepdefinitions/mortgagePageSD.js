"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const mortgagePage_1 = require("../pages/mortgagePage");
const { Given, When, Then, setDefaultTimeout } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
setDefaultTimeout(800 * 1000);
const mortPage = new mortgagePage_1.mortgagePage();
When('I click on mortageNo option', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield mortPage.clickingMortgageYesOrNo();
    });
});
When('I click on first time buy option', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().timeouts().implicitlyWait(20000);
        yield mortPage.clickingFirstTimeBuy();
    });
});
When('I enter property value {string}', function (propValue) {
    return __awaiter(this, void 0, void 0, function* () {
        yield mortPage.enterPropertyValue(propValue);
    });
});
When('I enter Mortgage amount {string}', function (mortAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        yield mortPage.entermortgageAmount(mortAmount);
    });
});
When('I enter terms of year {string}', function (years) {
    return __awaiter(this, void 0, void 0, function* () {
        yield mortPage.entertermORYears(years);
    });
});
When('I selected help to buy option', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield mortPage.selectedHelpToBuy();
    });
});
When('I click on Find mortgage button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().timeouts().implicitlyWait(20000);
        yield mortPage.clickOnFindMortgageRates();
        yield protractor_1.browser.sleep(4000);
    });
});
When('I selected the Mortgage type as fixed rate', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield mortPage.selectedFixedrateCheckbox();
        yield protractor_1.browser.sleep(1000);
    });
});
When('I selected the Product Fee as with Fee', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield mortPage.selectedProductFeeCheckbox();
        yield protractor_1.browser.sleep(1000);
    });
});
When('I expanded the more details info', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        yield mortPage.selectedMoreDetailsInfo();
    });
});
When('I selected the Fiveyears fixed mortgage', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        yield mortPage.selectedFixedMortgageApply();
        yield protractor_1.browser.sleep(1000);
    });
});
When('I Started Mortgage application', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        yield expect(mortPage.getMortgageStartedHeading()).to.eventually.contains("First time buyers - Apply for a Nationwide mortgage");
        yield console.log(mortPage.getMortgageStartedHeading());
    });
});
