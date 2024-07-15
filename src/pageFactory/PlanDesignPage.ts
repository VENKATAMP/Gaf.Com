import { Locator, Page, BrowserContext } from '@playwright/test';
export class PlanDesignPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly PlanDesignPage_Btn: Locator
    readonly pageSummary: Locator;



    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.PlanDesignPage_Btn = page.locator("//nav[@class='header__primary']//button[@class='header__primary-btn'][normalize-space()='Plan and Design']")
        this.pageSummary = page.locator("//nav[@class='header__primary']//p[@class='header__primary-content-copy'][normalize-space()='Let us help you plan your next big project']")

    }
}
