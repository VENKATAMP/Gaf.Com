import { Locator, Page, BrowserContext } from '@playwright/test';

export class ContractorListingPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly findAContractorIcon: Locator;
    readonly resTab: Locator;
    readonly comTab: Locator;
    readonly verMyContractorTab: Locator;
    readonly zipCodeInFindCont: Locator;
    readonly findAContractorBtnInFindCont: Locator;
    readonly zipCodeInFindContErrorMsg: Locator;
    readonly countryInFindCont: Locator;
    readonly resedentialSecBtn: Locator;
    readonly commercialSecBtn: Locator;
    readonly resComReviewFilter: Locator;
    readonly resComCerLevelFilter: Locator;
    readonly comTechFilter: Locator;
    readonly refineResCountryDropDown: Locator;
    readonly refineResDistanceDropDown: Locator;
    readonly sortByDropDown: Locator;
    readonly contractorFirstImage: Locator;
    readonly contractorImages: Locator;
    readonly zipCodeInRefineRes: Locator;
    readonly crossIconInRefineRes: Locator;
    readonly searchIconInRefineRes: Locator;
    readonly findAcontractorNearYouHeader: Locator;

       //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.findAContractorIcon = page.locator("//button[@class='field__input-search']");
        this.resTab = page.locator("//ul[@class='tabbed-container__tabs-list']//button[contains(text(),'Residential')]");
        this.comTab = page.locator("//ul[@class='tabbed-container__tabs-list']//button[contains(text(),'Commercial')]");
        this.verMyContractorTab = page.locator("//ul[@class='tabbed-container__tabs-list']//button[contains(text(),'Verify My Contractor')]");
        this.zipCodeInFindCont = page.locator("//input[@id='select-country:r0:']");
        this.findAContractorBtnInFindCont = page.locator("(//div[@class='zip-form__submit-wrapper'])[1]/button");
        this.zipCodeInFindContErrorMsg = page.locator("(//div[@class='zip-form__error-message'])[1]/p");
        this.countryInFindCont = page.locator("//select[@id='select-country:r1:']");  
        this.commercialSecBtn = page.locator("//div[@class='toggle-switch']/button[text()='Commercial']");  
        this.resedentialSecBtn = page.locator("//div[@class='toggle-switch']/button[text()='Residential']");  
        this.resComReviewFilter = page.locator("(//span[text()='Google Reviews'])[2]/parent::button");  
        this.resComCerLevelFilter = page.locator("(//span[text()='Certification Level'])[2]/parent::button");    
        this.comTechFilter = page.locator("(//span[text()='Technologies'])[2]/parent::button");
        this.refineResCountryDropDown = page.locator("//select[contains(@id,'select-country')]"); 
        this.refineResDistanceDropDown = page.locator("//select[contains(@id,'select-distance')]"); 
        this.sortByDropDown = page.locator("//select[contains(@id,'coveo-select')]"); 
        this.contractorImages = page.locator("//article//picture/img"); 
        this.contractorFirstImage = page.locator("(//article//picture/img)[1]"); 
        this.zipCodeInRefineRes = page.locator("//input[contains(@id,'select-country')]");
        this.crossIconInRefineRes = page.locator("//div[@class='contractor-listing__left-wrapper']//button[@class='field__input-close']");
        this.searchIconInRefineRes = page.locator("//div[@class='contractor-listing__left-wrapper']//button[@class='field__input-search']");
        this.findAcontractorNearYouHeader=page.locator("//h1[text()='Find a Contractor Near You']");
        } 
}