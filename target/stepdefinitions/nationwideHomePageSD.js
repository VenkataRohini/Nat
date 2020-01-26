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
const nationwideHomePage_1 = require("../pages/nationwideHomePage");
const { Given, When, Then, setDefaultTimeout } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
setDefaultTimeout(600 * 1000);
const natHome = new nationwideHomePage_1.nationwideHomePage();
Given('I am on Nationwide home page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield natHome.get();
    });
});
/* When('I hover mouse on {string} top navigation and click on {string} sub navigation', async function (topNavigation: string, subNavigation: string) {
  await natHome.hoverOnTopNavigation(topNavigation);
  await  natHome.clickOnSubNavigation(subNavigation);
 });*/
When('I hover mouse on {string} top navigation', function (topNavigation) {
    return __awaiter(this, void 0, void 0, function* () {
        yield natHome.hoverOnTopNavigation(topNavigation);
    });
});
When('Iclick on {string} sub navigation', function (subNavigation) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().timeouts().implicitlyWait(50000);
        yield natHome.clickOnSubNavigation(subNavigation);
    });
});
