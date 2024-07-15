import { Locator, Page, BrowserContext } from '@playwright/test';
export class AlertBannerPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly bannerTitle: Locator;
    readonly justAButton_Btn: Locator;
    readonly anotherButton_Btn: Locator;
    readonly pageDescription: Locator;
    readonly closeButton_Btn: Locator;



    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.justAButton_Btn = page.locator("//a[normalize-space()='Just a button']")
        this.anotherButton_Btn = page.locator("//a[normalize-space()='Another Button']")
        this.pageDescription = page.locator("//div[@class='alert-banner__description']")
        this.closeButton_Btn = page.locator("//button[@type='button']//*[name()='svg']")
        this.bannerTitle= page.locator("//h2[@id='alert-banner__title']")

    }
}
