import { Locator, Page, BrowserContext } from '@playwright/test';
export class RoofingContShinglesPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly shingleProductTypeFilter: Locator;
    readonly colorBlendFilter: Locator;
    readonly warrantiesProtectionFilter: Locator;
    readonly shingleProductFilterCat: Locator;
    readonly colorBlendFilterCat: Locator;
    readonly warrantiesProtectionFilterCat: Locator;
    readonly warrantiesProtectionFilterTooltipIcon: Locator;
    readonly shingleProductAllFilterTypes: Locator;
    readonly colorBlendAllFilterTypes: Locator;
    readonly warrantiesProtectionAllFilterTypes: Locator;
    readonly clearAllFilter: Locator;
    readonly appliedFilter: Locator;
    readonly address: Locator;



    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.colorBlendFilter = page.locator("(//div[@class='shingle-listing__filters']//span[@class='facet__title'])[5]/parent::button")
        this.warrantiesProtectionFilter = page.locator("(//div[@class='shingle-listing__filters']//span[@class='facet__title'])[6]/parent::button")
        this.shingleProductFilterCat = page.locator("(//div[@class='shingle-listing__filters']//div[@class='facet__panel'])[4]")
        this.colorBlendFilterCat = page.locator("(//div[@class='shingle-listing__filters']//div[@class='facet__panel'])[5]")
        this.shingleProductTypeFilter= page.locator("(//div[@class='shingle-listing__filters']//span[@class='facet__title'])[4]/parent::button")
        this.warrantiesProtectionFilterCat= page.locator("(//div[@class='shingle-listing__filters']//div[@class='facet__panel'])[6]")
        this.warrantiesProtectionFilterTooltipIcon= page.locator("(//div[@class='shingle-listing__filters']//span[@class='facet__title'])[6]/following::button[contains(@class,'facet__tooltip')]")
        this.shingleProductAllFilterTypes= page.locator("(//div[@class='shingle-listing__filters']//span[@class='facet__title'])[4]/following::div[1]/ul/li//input")
        this.colorBlendAllFilterTypes= page.locator("(//div[@class='shingle-listing__filters']//span[@class='facet__title'])[5]/following::div[1]/ul/li//input")
        this.warrantiesProtectionAllFilterTypes= page.locator("(//div[@class='shingle-listing__filters']//span[@class='facet__title'])[6]/following::div[1]/ul/li//input")
        this.clearAllFilter= page.locator("//button[contains(@class,'clear-all-filters')]");
        this.appliedFilter= page.locator("//button[contains(@class,'clear-all-filters')]/parent::li/following-sibling::li/button");   
        this.address= page.getByPlaceholder("Enter your address");
    }
    async clickApplyFilter(): Promise<void> {
        await this.appliedFilter.click();
    }
    async clickClearAllFilter(): Promise<void> {
        await this.clearAllFilter.click();
    }
}
