import { Locator, Page, BrowserContext } from '@playwright/test';
export class RoofingGafPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly RoofingPage_Btn: Locator
    readonly pageSummary: Locator;
    readonly findContractor: Locator;
    readonly alertRoman : Locator;
    readonly roofingMaterials_Btn: Locator;
    readonly residentialRoofingMaterials_lnk: Locator;
    readonly commercialRoofingMaterials_lnk: Locator;



    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.RoofingPage_Btn = page.locator("//nav[@class='header__primary']//button[@class='header__primary-btn'][normalize-space()='Roofing Materials']")
        this.pageSummary = page.locator("//nav[@class='header__primary']//div[@id='primary-menu-30874AE93DD6434AB730EE037E79DA55']//p[@class='header__primary-content-copy']")
        this.findContractor = page.locator("//a[@class='btn btn--primary header__cta']");
        this.alertRoman = page.locator("//p[@class='alert-banner__heading'][contains ( text(), 'Roman')]");
        this.roofingMaterials_Btn = page.locator("//nav[@class='header__primary']//button[@class='header__primary-btn'][normalize-space()='Roofing Materials']")
        this.residentialRoofingMaterials_lnk = page.locator("(//*[contains(text(),'Residential Roofing Materials')])[1]")
        this.commercialRoofingMaterials_lnk = page.locator("(//*[contains(text(),'Commercial Roofing Materials')])[1]")
    }
}
