import { browser, protractor, ExpectedConditions } from "protractor";
import { nationwideHomePage } from "../pages/nationwideHomePage";
const { Given, When, Then, setDefaultTimeout } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

setDefaultTimeout(600 * 1000);

const natHome: nationwideHomePage = new nationwideHomePage();


Given('I am on Nationwide home page', async function () {
   await natHome.get();
  });

 /* When('I hover mouse on {string} top navigation and click on {string} sub navigation', async function (topNavigation: string, subNavigation: string) {
   await natHome.hoverOnTopNavigation(topNavigation);
   await  natHome.clickOnSubNavigation(subNavigation);
  });*/

  When('I hover mouse on {string} top navigation', async function (topNavigation: string) {
   await natHome.hoverOnTopNavigation(topNavigation);
 });

 When('Iclick on {string} sub navigation', async function (subNavigation: string) {
  await browser.manage().timeouts().implicitlyWait(50000); 
  await  natHome.clickOnSubNavigation(subNavigation);
 });
