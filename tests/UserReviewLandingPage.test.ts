import test from '../src/lib/BaseTest'
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';
test.beforeEach(async ({page}) =>{
  await page.goto(ENV.USER_REVIEW_LANDING_URL);
});

test('Test User Review Landing page Title Check,@TR-16353, @UserReviewLandingTitle,@Regression', async ({page,userReviewLandingPage }) => {
  await userReviewLandingPage.headerInReviewLanding.waitFor({state:"visible"});
  await test.expect(page).toHaveTitle('User Review Landing Page');
});
test('Test User Review Landing Page Product,Header, Description,Continue and Skip to contractor button display and address feild, Back and Next button display display check,@TR-16354, @UserReviewLandingAddFieldDisplay, @Regression', async ({page,userReviewLandingPage }) => {
  await userReviewLandingPage.headerInReviewLanding.waitFor({state:"visible"});
  test.expect(await userReviewLandingPage.headerInReviewLanding.isVisible()).toBeTruthy();
  test.expect(await userReviewLandingPage.descriptionInReviewLanding.isVisible()).toBeTruthy();
  test.expect(await userReviewLandingPage.productSearchInput.isVisible()).toBeTruthy();
  test.expect(await userReviewLandingPage.continueButton.isVisible()).toBeTruthy();
  test.expect(await userReviewLandingPage.continueButton.isEnabled()).toBeFalsy();
  test.expect(await userReviewLandingPage.skipToContractorReviewButton.isVisible()).toBeTruthy();
  await userReviewLandingPage.productSearchInput.type("GAF",{delay:1000});
  await page.waitForTimeout(2000);
  await page.reload();
  await userReviewLandingPage.productSearchInput.type("GAF",{delay:1000});
  await page.keyboard.press("ArrowDown+Enter");
  test.expect(await userReviewLandingPage.seachInputClearIcon.isVisible()).toBeTruthy();
  test.expect(await userReviewLandingPage.searchInputSearchLensIcon.isVisible()).toBeTruthy();
  test.expect(await userReviewLandingPage.continueButton.isEnabled()).toBeTruthy();
});
test('Test User Review Landing Page Product Error message display,@TR-16355, @UserReviewLandingProductError,@Regression', async ({userReviewLandingPage }) => {
  await userReviewLandingPage.headerInReviewLanding.waitFor({state:"visible"});
  await userReviewLandingPage.productSearchInput.type("a");
  test.expect(await userReviewLandingPage.searchInputSuggestionText.isVisible()).toBeTruthy();
  await userReviewLandingPage.seachInputClearIcon.click();
  await userReviewLandingPage.productSearchInput.type("a@#$$%%");
  test.expect(await userReviewLandingPage.productErrorMessage.isVisible()).toBeTruthy();
});
test('Test User Review Landing page skip to contractor validation,@TR-16356, @UserReviewLandingSkipContractor,@Regression', async ({page,userReviewLandingPage }) => {
  await userReviewLandingPage.headerInReviewLanding.waitFor({state:"visible"});
  await userReviewLandingPage.skipToContractorReviewButton.click();
  await page.waitForTimeout(2000);
  test.expect(await userReviewLandingPage.contractorSearchInput.isVisible()).toBeTruthy();
});
test('Test User Review Landing Continue to Review validation,@TR-16357, @UserReviewLandingContinueToReviewValidation, @Regression', async ({page,userReviewLandingPage }) => {
  await userReviewLandingPage.headerInReviewLanding.waitFor({state:"visible"});
  await userReviewLandingPage.productSearchInput.type("GAF",{delay:1000});
  await page.waitForTimeout(2000);
  await page.reload();
  await userReviewLandingPage.productSearchInput.type("GAF",{delay:1000});
  await page.keyboard.press("ArrowDown+Enter");
  await page.waitForTimeout(5000);
  test.expect(await userReviewLandingPage.myReviewHeader.isVisible()).toBeTruthy();
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
