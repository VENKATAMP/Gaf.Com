import { Locator, Page, BrowserContext } from '@playwright/test';

export class UserReviewLandingPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly headerInReviewLanding: Locator;
    readonly descriptionInReviewLanding: Locator;
    readonly productSearchInput: Locator;
    readonly seachInputClearIcon: Locator;
    readonly searchInputSearchLensIcon: Locator;
    readonly continueButton: Locator;
    readonly skipToContractorReviewButton: Locator;
    readonly myReviewHeader: Locator;
    readonly productErrorMessage: Locator;
    readonly searchInputSuggestionText: Locator;
    readonly contractorSearchInput: Locator;
    readonly contractorSearchInputClearIcon: Locator;
    readonly contractorSearchInputLensIcon: Locator;
    readonly contractorSearchSuggestionText: Locator;
    readonly contractorSearchcontinueButton: Locator;

    readonly singleStar: Locator;
    readonly twoStar: Locator;
    readonly threeStar: Locator;
    readonly fourStar: Locator;
    readonly fiveStar: Locator;
    readonly reviewTitle: Locator;
    readonly reviewDescription: Locator;
    readonly addPhoto: Locator;
    readonly addVideo: Locator;
    readonly recommendText: Locator;
    readonly recommendYes: Locator;
    readonly recommendNo: Locator;
    readonly nicknameText: Locator;
    readonly locationText: Locator;
    readonly email: Locator;
    readonly describeDropdown: Locator;
    readonly recommendLevel0: Locator;
    readonly recommendLevel1: Locator;
    readonly recommendLevel2: Locator;
    readonly recommendLevel3: Locator;
    readonly recommendLevel4: Locator;
    readonly recommendLevel5: Locator;
    readonly recommendLevel6: Locator;
    readonly recommendLevel7: Locator;
    readonly recommendLevel8: Locator;
    readonly recommendLevel9: Locator;
    readonly recommendLevel10: Locator;
    readonly checkBox: Locator;
    
       //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.headerInReviewLanding = page.locator("//h2[@class='user-review-landing__heading']");
        this.descriptionInReviewLanding = page.locator("//p[@class='user-review-landing__description']");
        this.productSearchInput = page.getByPlaceholder("Search by Product Name");
        this.seachInputClearIcon =page.locator(".field__input-close");
        this.searchInputSearchLensIcon =page.locator(".field__input-search");
        this.searchInputSuggestionText =page.locator("//p[@class='user-review-landing__countdown']");
        this.continueButton=page.locator("//button[@title='Product']");
        
        this.contractorSearchInput = page.getByPlaceholder("Search by Product Name");
        this.contractorSearchInputClearIcon =page.locator(".field__input-close");
        this.contractorSearchInputLensIcon =page.locator(".field__input-search");
        this.contractorSearchSuggestionText =page.locator("//p[@class='user-review-landing__countdown']");
        this.contractorSearchcontinueButton=page.locator("//button[@title='Product']");

        this.skipToContractorReviewButton = page.locator("//button[contains(@class,'user-review-landing-thank-you__button')]");
        this.myReviewHeader = page.locator("//span[text()='My Review']");
        this.productErrorMessage = page.locator("//span[@class='user-review-landing__error']");
        this.singleStar = page.locator("//span[text()='1 star. Poor.']");
        this.twoStar = page.locator("//span[text()='2 stars. Fair.']");
        this.threeStar = page.locator("//span[text()='3 stars. Average.']");
        this.fourStar = page.locator("//span[text()='4 stars. Good.']");
        this.fiveStar = page.locator("//span[text()='5 stars. Excellent.']");
        this.reviewTitle = page.locator("//input[@id='bv-text-field-title']");
        this.reviewDescription = page.locator("//textarea[@id='bv-textarea-field-reviewtext']");
        this.addPhoto = page.locator("//span[text()='ADD PHOTO']");
        this.addVideo = page.locator("//button[contains(text(),'ADD VIDEO')]");
        this.recommendText = page.locator("//legend[contains(text(),'Would you recommend this product to a friend?')]");
        this.recommendYes = page.locator("//label[text()='YES']");
        this.recommendNo = page.locator("//label[text()='NO']");
        this.nicknameText = page.locator("//input[@id='bv-text-field-usernickname']");
        this.locationText= page.locator("//input[@id='bv-text-field-userlocation']");
        this.email = page.locator("//input[@class='bv-text bv-focusable bv-email']");
        this.describeDropdown = page.locator("//select[@id='bv-select-field-contextdatavalue_Role']");
        this.recommendLevel0 = page.locator("//label[text()='0']");
        this.recommendLevel1 = page.locator("//label[text()='1']");
        this.recommendLevel2 = page.locator("//label[text()='2']");
        this.recommendLevel3 = page.locator("//label[text()='3']");
        this.recommendLevel4 = page.locator("//label[text()='4']");
        this.recommendLevel5 = page.locator("//label[text()='5']");
        this.recommendLevel6 = page.locator("//label[text()='6']");
        this.recommendLevel7 = page.locator("//label[text()='7']");
        this.recommendLevel8 = page.locator("//label[text()='8']");
        this.recommendLevel9 = page.locator("//label[text()='9']");
        this.recommendLevel10 = page.locator("//label[text()='10']");
        this.checkBox = page.locator("//input[@id='bv-checkbox-reviews-termsAndConditions']")
    } 
}