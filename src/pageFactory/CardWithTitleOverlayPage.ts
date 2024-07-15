import { Locator, Page, BrowserContext } from '@playwright/test';

export class CardWithTitleOverlayPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly cardWithTitleOverlayImage: Locator;
    readonly cardWithTitleOverlayImageLink: Locator;
    readonly cardImageHeader: Locator;
    readonly cardImageIntroText: Locator;
    readonly cardImageButton: Locator;
    readonly cardWithButtonRowHeading: Locator;
    readonly cardContainer: Locator;
    readonly cardContainerWithFourCards: Locator;
    readonly cardWithTitleOverlayRowWithHeading: Locator;
    readonly cardWithTitleOverlayLinkListImage: Locator;
    readonly cardWithTitleOverlayLinkListHeading: Locator;
    readonly cardWithTitleOverlayLinkList: Locator;
    
       //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.cardWithTitleOverlayImage = page.locator("(//a[contains(@class,'card-content__overlay')])[1]//img");
        this.cardWithTitleOverlayImageLink = page.locator("(//a[contains(@class,'card-content__overlay')])[1]");
        this.cardImageHeader = page.locator("(//a[contains(@class,'card-content__overlay')])[1]//h3");
        this.cardImageIntroText = page.locator("(//a[contains(@class,'card-content__overlay')])[1]/following-sibling::div");
        this.cardImageButton = page.locator("(//a[contains(@class,'card-content__overlay')])[1]/following-sibling::a");
        this.cardWithButtonRowHeading=page.locator("(//section[@data-section='Four Card Row ']//a)[1]");
        this.cardContainer=page.locator("//section[@data-section='Four Card Row ']");
        this.cardContainerWithFourCards=page.locator("//section[@data-section='Four Card Row ']//div[contains(@class,'card-content card-content--button')]");
        this.cardWithTitleOverlayRowWithHeading=page.locator("//h2[@class='card-row__heading']").first();
        this.cardWithTitleOverlayLinkListImage=page.locator("(//div[contains(@class,'card-content__overlay')])[1]//img");
        this.cardWithTitleOverlayLinkListHeading=page.locator("(//div[contains(@class,'card-content__overlay')])[1]//h3");
        this.cardWithTitleOverlayLinkList=page.locator("(//div[contains(@class,'card-content__overlay')])[1]/following-sibling::ul/li");
    } 
     async clickElement(){
        await this.cardWithTitleOverlayImage.click();
     }
}