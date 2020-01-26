import { browser, protractor, ExpectedConditions, element } from "protractor";
import { mortgagePage } from "../pages/mortgagePage";
import { threadId } from "worker_threads";
const { Given, When, Then, setDefaultTimeout } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

setDefaultTimeout(800 * 1000);

const mortPage: mortgagePage = new mortgagePage();

When('I click on mortageNo option', async function () {
 await mortPage.clickingMortgageYesOrNo();
});

When('I click on first time buy option', async function () {
  await browser.manage().timeouts().implicitlyWait(20000);
   await mortPage.clickingFirstTimeBuy();
});

When('I enter property value {string}', async function (propValue:string) {
   await mortPage.enterPropertyValue(propValue);
  
  });

  When('I enter Mortgage amount {string}', async function (mortAmount:string) {
  await mortPage.entermortgageAmount(mortAmount);
   
  });

  When('I enter terms of year {string}', async function (years:string) {
    await mortPage.entertermORYears(years);
  });

  When('I selected help to buy option', async function () {
    await mortPage.selectedHelpToBuy();
  });

  When('I click on Find mortgage button', async function () {
   await browser.manage().timeouts().implicitlyWait(20000); 
   await mortPage.clickOnFindMortgageRates();
   await browser.sleep(4000);
   });

  
  When('I selected the Mortgage type as fixed rate', async function () {
   await mortPage.selectedFixedrateCheckbox();
   await browser.sleep(1000);
  });

  When('I selected the Product Fee as with Fee',async function () {
   await mortPage.selectedProductFeeCheckbox();
   await browser.sleep(1000);
  });

  When('I expanded the more details info', async function () {
  await browser.manage().timeouts().implicitlyWait(30000);
  await mortPage.selectedMoreDetailsInfo();
  });

  When('I selected the Fiveyears fixed mortgage', async function () {
   await browser.manage().timeouts().implicitlyWait(30000);
   await mortPage.selectedFixedMortgageApply();
   await browser.sleep(1000);
  });
 
 When('I Started Mortgage application' , async function(){
  await browser.manage().timeouts().implicitlyWait(30000);
   await expect(mortPage.getMortgageStartedHeading()).to.eventually.contains("First time buyers - Apply for a Nationwide mortgage");
   })