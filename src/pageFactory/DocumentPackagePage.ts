import { Locator, Page, BrowserContext } from '@playwright/test';

export class DocumentPackagePage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly summery: Locator;
    readonly sortByDropdown: Locator;
    readonly downloadFullPackageBtn: Locator;
    readonly addAllToKartBtn: Locator;
    readonly myDocumentsCart: Locator;
    readonly cartNumber: Locator;
    readonly downloadAllInsideCart: Locator;
    readonly clearAllInsideCart: Locator;
    readonly listOfFilesInsideCart: Locator;
    readonly removeButtonForListOfFiles: Locator;
    readonly removeSelectedFromCartButton: Locator;
    readonly docListingList: Locator;
    readonly docFormatListInsideEachDocList: Locator;
    readonly docImageOfEachDoc: Locator;
    readonly docZoomPopUp: Locator;
    readonly docZoomPopUpCloseIcon: Locator;
    readonly docNameInDocList: Locator;
    readonly docTypeInDocList: Locator;
    readonly docCopyLink: Locator;
    readonly copyClipBoard: Locator;
    readonly docDownloadLink: Locator;
    readonly docAddTocartChkBox: Locator;
    

       //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.summery = page.locator("//div[contains(@class,'document-listing__query-summary')]");
        this.sortByDropdown = page.locator("//select[contains(@name,'select-:')]");
        this.downloadFullPackageBtn = page.locator("//div[@class='document-listing__buttons']/button");
        this.addAllToKartBtn = page.locator("//button[contains(@class,'document-listing__select-all')]");
        this.myDocumentsCart = page.locator("//button[@class='document-cart__trigger']");
        this.cartNumber = page.locator("//button[@class='document-cart__trigger']/span");
        this.downloadAllInsideCart = page.locator("//div[@class='document-cart__panel']/div/button[contains(@class,'document-cart__download')]");
        this.clearAllInsideCart = page.locator("//div[@class='document-cart__panel']/div/button[contains(@class,'document-cart__clear')]");  
        this.listOfFilesInsideCart = page.locator("//div[@class='document-cart__panel']/ul/li");  
        this.removeButtonForListOfFiles = page.locator("//div[@class='document-cart__panel']/ul/li//button");  
        this.removeSelectedFromCartButton = page.locator("//button[contains(@class,'document-listing__remove-selected')]");  
        this.docListingList = page.locator("//ul[@class='document-listing__list']/li");    
        this.docFormatListInsideEachDocList = page.locator("//ul[@class='document-listing__list']/li//ul/li/p");
        this.docImageOfEachDoc = page.locator("//ul[@class='document-listing__list']//li/article//div[@class='document-card__wrapper']/picture"); 
        this.docZoomPopUp = page.locator("//ul[@class='document-listing__list']//li/article/dialog[@class='document-card__popup active']"); 
        this.docZoomPopUpCloseIcon = page.locator("//ul[@class='document-listing__list']//li/article/dialog[@class='document-card__popup active']/button"); 
        this.docNameInDocList = page.locator("//ul[@class='document-listing__list']/li//h2/a/span"); 
        this.docTypeInDocList = page.locator("//ul[@class='document-listing__list']/li//h2/following-sibling::p"); 
        this.docCopyLink = page.locator("//li//div[@class='document-card__options']//button[contains(@class,'document-card__copy')]");
        this.copyClipBoard=page.locator("//p[text()='Document link copied to clipboard']");
        this.docDownloadLink = page.locator("//li//div[@class='document-card__options']//a[contains(@class,'link document-card__download')]");
        this.docAddTocartChkBox = page.locator("//li//div[@class='document-card__options']//div[contains(@class,'field--checkbox')]/input");
        } 
}