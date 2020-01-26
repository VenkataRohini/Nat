import { browser, element, by, protractor, ElementFinder, $$, $, ExpectedConditions, WebElement } from "protractor";
import * as properties from "../properties/properties";

export class mortgagePage {

  mortgageText=  element(by.css("h1[class='blue boldText headingSize01  center ']"))  
  clickingMortgageYesOrNo(){
   
   element(by.id("selectorItemHaveNationwideMortgage1")).click();
   
  }

  clickingFirstTimeBuy(){
    
    element(by.id("selectorItemNationwideMortgageTypeNo0")).click();
   
  }
    
    enterPropertyValue(propertyValue: string){
       element(by.id("SearchPropertyValue")).sendKeys(propertyValue);
    }

    entermortgageAmount(mortgageAmount: string){
      element(by.id("SearchDepositAmount")).sendKeys(mortgageAmount);
    }

    entertermORYears(term: string){
      element(by.id("SearchMortgageTerm")).sendKeys(term);
    }

    clickOnFindMortgageRates(){
      
       //element(by.buttonText("Find a mortgage rate")).click();
       element(by.css("button[data-di-id='#myButton']")).click();
    }

    selectedFixedrateCheckbox(){
      element(by.css("label[for='input-fixed']")).click();
     
    }

    selectedProductFeeCheckbox(){
      element(by.css("label[for='product-fee-input-fee']")).click();
      
    }

    selectedHelpToBuy(){
    
      element(by.css("label[for='HelpToBuyInput']")).click();
    }

    selectedMoreDetailsInfo(){
    
      element(by.xpath("//*[text()='More info and apply']/following-sibling::*[1][text()=' for 5 yr  Fixed']/preceding-sibling::*")).click();
    }
    selectedFixedMortgageApply(){
    
     element(by.css("a[data-productname*='5 yr Fixed']")).click();
     
    }

    getMortgageStartedHeading(){
      this.mortgageText.getText().then(function(text){
        return text;
    })
    }

    
    waitForElement(){
      browser.manage().timeouts().implicitlyWait(2000);
    }
    wait(){
      browser.sleep(3000);
    }

  
}