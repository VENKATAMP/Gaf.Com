import { Locator, Page, BrowserContext } from '@playwright/test';

export class ShingleMatchQuizPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly quizProgressBar: Locator;
    readonly address: Locator;
    readonly nextButton: Locator;
    readonly backButton: Locator;
    readonly addressErrorMessage: Locator;
    readonly shingleProductFeatureImages: Locator;
    readonly shingleProductFeatureCheckBoxes: Locator;
    readonly hiredRoofingContractorsImages: Locator;
    readonly hiredRoofingContractorsRadioBtns: Locator;
    readonly roofSlopeValueRadioButton: Locator;
    readonly roofComplexityValueRadioButton: Locator;
    readonly chosenContractorRadioButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly disclaimerCheckBox: Locator;
    readonly getResultsButton: Locator;
    readonly errorMessageAtFinalPage: Locator;
    readonly headerToolTip: Locator;
    readonly disclaimer: Locator;
    
       //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.quizProgressBar = page.locator("//div[@class='quiz-progress']/p");
        this.address = page.getByPlaceholder("Address");
        this.nextButton = page.locator("//div[@class='quiz-form__buttons']/button[text()='Next']");
        this.backButton = page.locator("//div[@class='quiz-form__buttons']/button[text()='Back']");
        this.addressErrorMessage = page.locator("(//div[contains(@class,'quiz-form__field')]//span[@class='field__error-msg'])[1]");
        this.shingleProductFeatureImages = page.locator("(//div[@class='radio-field'])[1]/div//img");
        this.shingleProductFeatureCheckBoxes = page.locator("(//div[@class='radio-field'])[1]/div//input");
        this.hiredRoofingContractorsImages = page.locator("//div[contains(@class,'quiz-form__step--active')]//div[@class='radio-field']/div//img");
        this.hiredRoofingContractorsRadioBtns = page.locator("//div[contains(@class,'quiz-form__step--active')]//div[@class='radio-field']/div//input");
        this.roofSlopeValueRadioButton = page.locator("//input[@name='roofSlopeValue']");
        this.roofComplexityValueRadioButton = page.locator("//input[@name='roofComplexityValue']");
        this.chosenContractorRadioButton = page.locator("//input[@name='chosenContractor']");
        this.firstNameInput = page.getByPlaceholder("First Name");
        this.lastNameInput = page.getByPlaceholder("Last Name");
        this.emailInput = page.getByPlaceholder("Email");
        this.disclaimerCheckBox = page.locator("//input[contains(@id,'checkbox-')]");
        this.getResultsButton = page.locator("//div[@class='quiz-form__buttons']/button[text()='Get Results']");
        this.errorMessageAtFinalPage = page.locator("//div[@class='before-results-question__row']//span[@class='field__error-msg']");
        this.headerToolTip = page.locator("//div[@class='quiz-form__step quiz-form__step--active']/h2/button[@class='field__tooltip']");
        this.disclaimer=page.locator("//label[contains(@for,'checkbox-')]/ancestor::div[@class='field__checkbox-label-wrapper rtf']");
    } 
}