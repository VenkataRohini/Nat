import { browser, element, by, protractor, ElementFinder, $$, $, WebElement, ExpectedConditions } from "protractor";
import * as properties from "../properties/properties";

export class nationwideHomePage {

    
    
    hoverOnTopNavigation(topNavigation: string){
      browser.actions().mouseMove(element(by.css("a[data-nbs-analytics-options*='|Level1|" + topNavigation + "']"))).perform();
    }

    clickOnSubNavigation(subNavigation: string){
      return element(by.xpath("//nav[@aria-label='New mortgage customers']//a[contains(@aria-label,'" + subNavigation + "')]")).click();
    }

    

    get(): void {
        browser.get(properties.properties.applicationUrl);
    }
  }