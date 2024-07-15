import { Locator, Page, BrowserContext } from "@playwright/test";

export class PressReleasePage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly pressReleaseHeader: Locator;
    readonly pressReleaseIntroText: Locator;
    readonly pressReleaseDropdown: Locator;
    readonly pressReleaseResult: Locator;
    readonly pressReleaseLink1: Locator;
    readonly pressReleaseLink2: Locator;
    readonly pressReleaseTop1: Locator;
    readonly pressReleaseTop2: Locator;
    readonly pressReleaseCookies: Locator



    constructor (page: Page, context: BrowserContext){
        this.page= page;
        this.context=context;
        this.pressReleaseHeader= page.locator("//h1[@class='simple-masthead__heading']");
        this.pressReleaseIntroText= page.locator("//div[@class='rtf simple-masthead__copy']");
        this.pressReleaseDropdown= page.locator("//select[contains(@class, 'field__select')]");
        this.pressReleaseResult= page.locator("//div[@class='press-release-listing__summary']");
        this.pressReleaseLink1= page.locator("(//li[@class= 'simple-masthead__item'])[1]//a[@class='link link--arrow']");
        this.pressReleaseLink2= page.locator("(//li[@class= 'simple-masthead__item'])[2]//a[@class='link link--arrow']");
        this.pressReleaseTop1= page.locator("//h3[@id=':r3:']//a[@class='link--inline']");
        this.pressReleaseTop2= page.locator("//h3[@id=':r4:']//a[@class='link--inline']");
        this.pressReleaseCookies= page.locator("//div[@id='onetrust-close-btn-container']/button");
    }
}