import { Locator, Page, BrowserContext } from '@playwright/test';

export class ContractorDetailsPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly nextSlideArrowIcon: Locator;
    readonly prevSlideArrowIcon: Locator;
    readonly resPlaceHolderFirstImage: Locator;
    readonly resPlaceHolderSecondImage: Locator;
    readonly contName: Locator;
    readonly avgRatingStarsReviews: Locator;
    readonly ratingStarsIcons: Locator;
    readonly ratingValue: Locator;
    readonly totalRatings: Locator;
    readonly address: Locator;
    readonly website: Locator;
    readonly phone: Locator;
    readonly aboutHeader: Locator;
    readonly expandAbout: Locator;
    readonly collapseAbout: Locator;
    readonly sortByDropDown: Locator;
    readonly certificationsHeader: Locator;
    readonly contractorFirstImage: Locator;
    readonly contractorImages: Locator;
    readonly detailsHeader: Locator;
    readonly reviewsHeader: Locator;
    readonly contractorIDLabel: Locator;
    readonly contractorID: Locator;
    readonly stateLicenceNumberLabel: Locator;
    readonly stateLicenceNumber: Locator;
    readonly technologiesLabel: Locator;
    readonly aboutUsJumpLink: Locator;
    readonly certificationsJumpLink: Locator;
    readonly conDetailsJumpLink: Locator;
    readonly reviewsJumpLink: Locator;
    readonly seeAllReviewsBtn: Locator;

       //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.nextSlideArrowIcon = page.locator("//div[@class='image-masthead-carousel__carousel']//button[@title='Next Slide']");
        this.prevSlideArrowIcon = page.locator("//div[@class='image-masthead-carousel__carousel']//button[@title='Prev Slide']");
        this.resPlaceHolderFirstImage = page.locator("//div[@class='image-masthead-carousel__carousel']//ul/li[1]/img");
        this.resPlaceHolderSecondImage = page.locator("//div[@class='image-masthead-carousel__carousel']//ul/li[2]/img");
        this.contName = page.locator("//div[@class='image-masthead-carousel__content']/h1");
        this.avgRatingStarsReviews = page.locator("//div[@class='image-masthead-carousel__content']//div[@class='rating-stars']");
        this.ratingStarsIcons = page.locator("//div[@class='image-masthead-carousel__content']//div[@class='rating-stars__stars']");
        this.ratingValue = page.locator("//div[@class='image-masthead-carousel__content']//div[@class='rating-stars__stars']/following-sibling::span[1]");  
        this.totalRatings = page.locator("//div[@class='image-masthead-carousel__content']//div[@class='rating-stars__stars']/following-sibling::span[2]");  
        this.address = page.locator("//div[@class='image-masthead-carousel__content']//address");  
        this.website = page.locator("//div[@class='image-masthead-carousel__content']//div[@class='image-masthead-carousel__links']/a[1]");    
        this.phone = page.locator("//div[@class='image-masthead-carousel__content']//div[@class='image-masthead-carousel__links']/a[2]");
        this.aboutHeader = page.locator("//h2[text()='About']"); 
        this.expandAbout = page.locator("//span[contains(text(),'Expand')]"); 
        this.collapseAbout = page.locator("//span[contains(text(),'Collapse')]"); 
        this.contractorImages = page.locator("//article//picture/img"); 
        this.contractorFirstImage = page.locator("(//article//picture/img)[1]"); 
        this.detailsHeader=page.locator("//h2[text()='Details']");
        this.contractorIDLabel=page.locator("//h3[text()='Contractor ID']");
        this.contractorID=page.locator("//h3[text()='Contractor ID']/following-sibling::p");
        this.stateLicenceNumberLabel=page.locator("//h3[text()='State License Number']");
        this.stateLicenceNumber=page.locator("//h3[text()='State License Number']/following-sibling::p");
        this.technologiesLabel=page.locator("//h3[text()='Technologies']");
        this.aboutUsJumpLink=page.locator("//div[@class='navigation-jumplinks__wrapper']//a[contains(text(),'About us')]");
        this.certificationsJumpLink=page.locator("//div[@class='navigation-jumplinks__wrapper']//a[contains(text(),'Certifications')]");
        this.conDetailsJumpLink=page.locator("//div[@class='navigation-jumplinks__wrapper']//a[contains(text(),'Contractor Details')]");
        this.reviewsJumpLink=page.locator("//div[@class='navigation-jumplinks__wrapper']//a[contains(text(),'Reviews')]");
        this.certificationsHeader=page.locator("//div[@class='certifications-block__wrapper']//h2[text()='Certifications & Awards']");
        this.reviewsHeader=page.locator("//div[@class='contractor-reviews__wrapper']//h2[text()='Reviews']");
        this.seeAllReviewsBtn=page.locator("//div[@class='contractor-reviews__wrapper']//a[contains(text(),'See All Reviews')]");
        
    } 


}