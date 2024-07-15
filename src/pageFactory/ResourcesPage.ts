import { Locator, Page, BrowserContext } from '@playwright/test';
export class ResourcesPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly ResourcesPage_Btn: Locator
    readonly blogLink: Locator;
    readonly blogPageSummary: Locator;
    readonly mashHeadCardContent: Locator;
    readonly mashHeadCarousel: Locator;
    readonly relatedArticleCard: Locator;
  



    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.ResourcesPage_Btn = page.locator("//nav[@class='header__primary']//button[@class='header__primary-btn'][normalize-space()='Resources']")
        this.blogLink = page.locator("(//*[contains(text(),'Blog')])[2]")
        this.blogPageSummary = page.locator("//*[contains(@class,'project-masthead-carousel__heading')]");
        this.mashHeadCardContent = page.locator("(//div[contains(@class,'project-masthead-card__content')])[1]");
        this.mashHeadCarousel = page.locator("//button[contains(@class,'project-masthead-carousel__thumb')]");
        this.relatedArticleCard = page.locator("//figure[contains(@class,'figure figure__container')]")


    }
}
