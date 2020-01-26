"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const properties = require("../properties/properties");
class nationwideHomePage {
    hoverOnTopNavigation(topNavigation) {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.css("a[data-nbs-analytics-options*='|Level1|" + topNavigation + "']"))).perform();
    }
    clickOnSubNavigation(subNavigation) {
        return protractor_1.element(protractor_1.by.xpath("//nav[@aria-label='New mortgage customers']//a[contains(@aria-label,'" + subNavigation + "')]")).click();
    }
    get() {
        protractor_1.browser.get(properties.properties.applicationUrl);
    }
}
exports.nationwideHomePage = nationwideHomePage;
