import { Locator, Page, BrowserContext } from '@playwright/test';

export class DocumentsListFilterPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly summery: Locator;
    readonly sortByDropdown: Locator;
    readonly viewDropdown: Locator;
    readonly searchInput: Locator;
    readonly clearSearchIcon: Locator;
    readonly searchLensIcon: Locator;
    readonly resedentialTab: Locator;
    readonly commercialTab: Locator;
    readonly englishLanguageChkBox: Locator;
    readonly spanishLanguageChkBox: Locator;
    readonly languageFilter: Locator;
    readonly documentFilter: Locator;
    readonly firstDocTypeFilter: Locator;
    readonly showMoreFilter: Locator;
    readonly showLessFilter: Locator;
    readonly pagination: Locator;
    readonly paginationPrevBtn: Locator;
    readonly paginationNextBtn: Locator;
    readonly paginationBetweenPages: Locator;
    readonly containerList: Locator;
    readonly docTypeNameForEachDoc: Locator;
    readonly docName: Locator;
    readonly filterButtons: Locator;
    readonly totalEnglishFiles: Locator;
    readonly totalSpanishFiles: Locator;
    readonly backToAllCategories: Locator;
    readonly cookieCloseIcon: Locator;
    

       //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.summery = page.locator("//div[contains(@class,'query-summary ')]");
        this.sortByDropdown = page.locator("//label[text()='Sort by']/following-sibling::select");
        this.viewDropdown = page.locator("//label[text()='View']/following-sibling::select");
        this.searchInput = page.locator("//input[contains(@name,'searchbox-:')]");
        this.clearSearchIcon = page.locator("//button[contains(@title,'clear search')]");
        this.searchLensIcon = page.locator("//button[@class='field__input-search']");
        this.resedentialTab = page.locator("//button[text()='Residential']");
        this.commercialTab = page.locator("//button[text()='Commercial']");
        this.englishLanguageChkBox = page.locator("(//div[@class='contractor-listing__desktop-filters']//input)[1]");  
        this.spanishLanguageChkBox = page.locator("(//div[@class='contractor-listing__desktop-filters']//input)[2]");  
        this.languageFilter = page.locator("(//span[text()='Language Type']/parent::button)[2]");  
        this.documentFilter = page.locator("(//span[text()='Document Type']/parent::button)[2]"); 
        this.firstDocTypeFilter = page.locator("(//ul[@class=' category-facet__list'])[4]//li[1]/button");  
        this.backToAllCategories = page.locator("(//span[text()='Back to All Categories'])[2]");
        this.showMoreFilter = page.locator("(//span[text()='Show More']/parent::button[contains(@class,'facet__show-more')])[1]");
        this.showLessFilter = page.locator("(//span[text()='Show Less']/parent::button[contains(@class,'facet__show-less')])[1]");    
        this.pagination = page.locator("//ul[@class='pagination']");
        this.paginationPrevBtn = page.locator("//ul[@class='pagination']//button[@class='pagination__prev']"); 
        this.paginationNextBtn = page.locator("//ul[@class='pagination']//button[@class='pagination__next']"); 
        this.paginationBetweenPages = page.locator("//ul[@class='pagination']//button[contains(@class,'pagination__page')]"); 
        this.containerList = page.locator("//ul[@class='contractor-listing__results']/li"); 
        this.docTypeNameForEachDoc = page.locator("//ul[@class='contractor-listing__results']/li//h2/following-sibling::p"); 
        this.docName = page.locator("//ul[@class='contractor-listing__results']/li//h2//span");
        this.filterButtons=page.locator("//ul[@class='facet-breadcrumbs contractor-listing__breadcrumbs--desktop']//button");
        this.totalEnglishFiles=page.locator("//div[@class='contractor-listing__desktop-filters']//div[contains(@id,'panel-')]//span[text()='English']/following-sibling::span");
        this.totalSpanishFiles=page.locator("//div[@class='contractor-listing__desktop-filters']//div[contains(@id,'panel-')]//span[text()='Spanish']/following-sibling::span");
        this.cookieCloseIcon=page.locator("//div[@role='alertdialog']//button[@aria-label='Close']").first();
    } 
}