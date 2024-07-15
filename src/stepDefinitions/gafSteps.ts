import { Page, BrowserContext } from "@playwright/test";
import test from '../lib/BaseTest'
import { WebActions } from "../lib/WebActions";
import ENV from "../lib/env";
import { HomePage } from "../pageFactory/HomePage";




let webActions: WebActions;
let context: BrowserContext;
let homePage: HomePage;


/*test.afterEach(async ({ page }) => {
    await page.close();
})


test.beforeEach(async ({ page, context }) => {
    await initializePageObjects(page, context);
})






