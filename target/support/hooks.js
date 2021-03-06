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
const { BeforeAll, Before, After, Status } = require("cucumber");
const protractor_1 = require("protractor");
BeforeAll({ timeout: 10 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
}));
Before(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // To know the scenario currently running
        console.log('Executing the scenario:--> ' + scenario.pickle.name);
    });
});
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // Take screenshot in case of failure
        if (scenario.result.status === Status.FAILED) {
            // screenShot is a base-64 encoded PNG
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
    });
});
