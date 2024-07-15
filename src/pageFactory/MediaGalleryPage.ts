import { Locator, Page, BrowserContext } from '@playwright/test';
export class MediaGalleryPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly MediaGalleryPage_Header: Locator
    readonly MediaGalleryPage_Image: Locator




    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.MediaGalleryPage_Header= page.locator("//*[contains(@class,'media-gallery__title')]");
    }
}
