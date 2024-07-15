import test from '../src/lib/BaseTest'
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';
test.beforeEach(async ({page}) =>{
  await page.goto(ENV.SHINGLE_MATCH_QUIZ_URL);
});
test('Test Shingle Match  Quiz page Title Check,@TR-16353, @ShinglematchQuizTitle,@Regression', async ({page,shingleMatchQuizPage }) => {
  await shingleMatchQuizPage.quizProgressBar.waitFor({state:"visible"});
  await test.expect(page).toHaveTitle('Shingle Match Quiz Page');
});
test('Test Shingle Match Quiz Page Question progress bar display and address feild, Back and Next button display display check,@TR-16354, @SingleMatchAddFieldDisplay, @Regression', async ({shingleMatchQuizPage }) => {
  await shingleMatchQuizPage.quizProgressBar.waitFor({state:"visible"});
  test.expect(await shingleMatchQuizPage.quizProgressBar.isVisible()).toBeTruthy();
  test.expect(await shingleMatchQuizPage.address.isVisible()).toBeTruthy();
  test.expect(await shingleMatchQuizPage.backButton.isHidden()).toBeTruthy();
  test.expect(await shingleMatchQuizPage.nextButton.isVisible()).toBeTruthy();
  test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeFalsy();
});
test('Test Shingle Match Quiz Page Address Error message display,@TR-16355, @SingleMatchAddError,@Regression', async ({shingleMatchQuizPage }) => {
  await shingleMatchQuizPage.quizProgressBar.waitFor({state:"visible"});
  await shingleMatchQuizPage.address.type("  ");
  test.expect(await shingleMatchQuizPage.addressErrorMessage.isVisible()).toBeTruthy();
  test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeFalsy();
});
test('Test Single match quiz 2nd page validation,@TR-16356, @SingleMatch2ndPageValidation,@Regression', async ({page,shingleMatchQuizPage }) => {
  await shingleMatchQuizPage.quizProgressBar.waitFor({state:"visible"});
  await shingleMatchQuizPage.address.type("U",{delay:1000});
  await page.waitForTimeout(2000);
  await page.reload();
  await shingleMatchQuizPage.address.type("US",{delay:1000});
  await page.keyboard.press("ArrowDown+Enter");
  await page.waitForTimeout(2000);
  test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeTruthy();
  await shingleMatchQuizPage.nextButton.click();
  await page.waitForTimeout(1000);
  for(let i=0;i<await shingleMatchQuizPage.shingleProductFeatureCheckBoxes.count();i++){
    test.expect(await shingleMatchQuizPage.shingleProductFeatureCheckBoxes.nth(i).isChecked()).toBeFalsy();
    test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeFalsy(); 
  }
  await shingleMatchQuizPage.shingleProductFeatureCheckBoxes.first().click();
  test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeTruthy();
  await shingleMatchQuizPage.nextButton.click();
});
test('Test Single match quiz 3rd page validation,@TR-16357, @SingleMatch3rdPageValidation, @Regression', async ({page,shingleMatchQuizPage }) => {
  await shingleMatchQuizPage.quizProgressBar.waitFor({state:"visible"});
  await shingleMatchQuizPage.address.type("U",{delay:1000});
  await page.waitForTimeout(2000);
  await page.reload();
  await shingleMatchQuizPage.address.type("US",{delay:1000});
  await page.keyboard.press("ArrowDown+Enter");
  await shingleMatchQuizPage.nextButton.click();
  await page.waitForTimeout(1000);
  await shingleMatchQuizPage.shingleProductFeatureCheckBoxes.first().click();
  test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeTruthy();
  await shingleMatchQuizPage.nextButton.click();
  await shingleMatchQuizPage.hiredRoofingContractorsRadioBtns.first().click();
  test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeTruthy();
  await shingleMatchQuizPage.nextButton.click();
  
});
test('Test Single match quiz 4th page validation,@TR-16357, @SingleMatch4thPageValidation, @Regression', async ({page,shingleMatchQuizPage }) => {
  await shingleMatchQuizPage.quizProgressBar.waitFor({state:"visible"});
  await shingleMatchQuizPage.address.type("U",{delay:1000});
  await page.waitForTimeout(2000);
  await page.reload();
  await shingleMatchQuizPage.address.type("US",{delay:1000});
  await page.keyboard.press("ArrowDown+Enter");
  await shingleMatchQuizPage.nextButton.click();
  await page.waitForTimeout(1000);
  await shingleMatchQuizPage.shingleProductFeatureCheckBoxes.first().click();
  test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeTruthy();
  await shingleMatchQuizPage.nextButton.click();
  await shingleMatchQuizPage.hiredRoofingContractorsRadioBtns.first().click();
  test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeTruthy();
  await shingleMatchQuizPage.nextButton.click();
  test.expect(await shingleMatchQuizPage.getResultsButton.isEnabled()).toBeFalsy();
  await shingleMatchQuizPage.firstNameInput.fill("GAF");
  await shingleMatchQuizPage.lastNameInput.fill("lastnmae");
  await shingleMatchQuizPage.emailInput.fill("gaflastnmae@gaf.com");
  test.expect(await shingleMatchQuizPage.disclaimer.isVisible()).toBeTruthy();
  test.expect(await shingleMatchQuizPage.disclaimerCheckBox.isEnabled()).toBeTruthy();
  await shingleMatchQuizPage.disclaimerCheckBox.click();
  await page.waitForTimeout(2000);
  test.expect(await shingleMatchQuizPage.getResultsButton.isEnabled()).toBeTruthy();
  await shingleMatchQuizPage.getResultsButton.click();
});
test('Test Single match quiz 4th page errors validation,@TR-16357, @SingleMatch4thPageErrorsValidation, @Regression', async ({page,shingleMatchQuizPage }) => {
  await shingleMatchQuizPage.quizProgressBar.waitFor({state:"visible"});
  await shingleMatchQuizPage.address.type("U",{delay:1000});
  await page.waitForTimeout(2000);
  await page.reload();
  await shingleMatchQuizPage.address.type("US",{delay:1000});
  await page.keyboard.press("ArrowDown+Enter");
  await shingleMatchQuizPage.nextButton.click();
  await page.waitForTimeout(1000);
  await shingleMatchQuizPage.shingleProductFeatureCheckBoxes.first().click();
  test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeTruthy();
  await shingleMatchQuizPage.nextButton.click();
  await shingleMatchQuizPage.hiredRoofingContractorsRadioBtns.first().click();
  test.expect(await shingleMatchQuizPage.nextButton.isEnabled()).toBeTruthy();
  await shingleMatchQuizPage.nextButton.click();
  test.expect(await shingleMatchQuizPage.getResultsButton.isEnabled()).toBeFalsy();
  await shingleMatchQuizPage.firstNameInput.fill(" ");
  test.expect(await shingleMatchQuizPage.errorMessageAtFinalPage.nth(0).isVisible()).toBeTruthy();
  await shingleMatchQuizPage.firstNameInput.fill("FirstName");
  await shingleMatchQuizPage.lastNameInput.fill(" ");
  test.expect(await shingleMatchQuizPage.errorMessageAtFinalPage.nth(1).isVisible()).toBeTruthy();
  await shingleMatchQuizPage.lastNameInput.fill("lastnmae");
  await shingleMatchQuizPage.emailInput.fill(" ");
  test.expect(await shingleMatchQuizPage.errorMessageAtFinalPage.nth(2).isVisible()).toBeTruthy();  
});
test.afterEach(async ({ page }, testInfo) => {
  const scenarioDescription = testInfo.title;
  const testStatus = testInfo.status;
  const duration = testInfo.duration;
  const failureMessage = testInfo.error?.message ?? '';
  await afterEachHooks({
    scenarioDescription,
    testStatus,
    duration,
    failureMessage
  })
});
