import { Locator, Page, BrowserContext } from '@playwright/test';

export class LinkGridGridLinkPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly linkGridHeader: Locator;
    readonly linkGridIntroText: Locator;
    readonly linkGridButton: Locator;
    readonly gridLinks: Locator;
    readonly gridLinkIcon: Locator;
    readonly gridLinkArrowIcon: Locator;
    
       //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.linkGridHeader = page.locator("(//section[@class='link-grid'])[1]//h2");
        this.linkGridIntroText = page.locator("(//section[@class='link-grid'])[1]//p");
        this.linkGridButton = page.locator("(//section[@class='link-grid'])[2]//a[@type='button']");
        this.gridLinks = page.locator("(//section[@class='link-grid'])[1]//li/a");
        this.gridLinkIcon = page.locator("(//section[@class='link-grid'])[1]//img");
        this.gridLinkArrowIcon = page.locator("(//section[@class='link-grid'])[1]//*[local-name()='svg']");
    } 
}