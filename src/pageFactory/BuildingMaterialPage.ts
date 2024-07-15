import { Locator, Page, BrowserContext } from '@playwright/test';
export class BuildingMaterialPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly BuildingMaterialPage_Btn: Locator
    readonly pageSummary: Locator;



    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.BuildingMaterialPage_Btn = page.locator("//nav[@class='header__primary']//button[@class='header__primary-btn'][normalize-space()='Building Materials']")
        this.pageSummary = page.locator("//nav[@class='header__primary']//div[@id='primary-menu-848DB2A650014913A64AB2018B50481D']//p[@class='header__primary-content-copy']")

    }
}
