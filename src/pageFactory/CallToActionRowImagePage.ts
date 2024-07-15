import { Locator, Page, BrowserContext } from '@playwright/test';

export class CallToActionRowImagePage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly leftImage: Locator;
    readonly rightImage: Locator;
    readonly leftImagePrimaryBtn: Locator;
    readonly leftImageSecodoryButton: Locator;
    readonly rightImagePrimaryBtn: Locator;
    readonly rightImageSecodoryButton: Locator;
    
       //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.leftImage = page.locator("//section[@data-section='Call To Action Row with Image Left']//img");
        this.rightImage = page.locator("//section[@data-section='Call TO Action with Image Right']//img");
        this.leftImagePrimaryBtn = page.locator("//section[@data-section='Call To Action Row with Image Left']//a[contains(@class,'primary')]");
        this.leftImageSecodoryButton = page.locator("//section[@data-section='Call To Action Row with Image Left']//a[contains(@class,'secondary')]");
        this.rightImagePrimaryBtn = page.locator("//section[@data-section='Call TO Action with Image Right']//a[contains(@class,'primary')]");
        this.rightImageSecodoryButton = page.locator("//section[@data-section='Call TO Action with Image Right']//a[contains(@class,'secondary')]");
    } 


}