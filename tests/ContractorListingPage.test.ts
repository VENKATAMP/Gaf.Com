import test from '../src/lib/BaseTest'
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';
test.beforeEach(async ({page,contractorListingPage}) =>{
  await page.goto(ENV.CONT_LISTING_URL);
  await contractorListingPage.crossIconInRefineRes.scrollIntoViewIfNeeded();
  await contractorListingPage.crossIconInRefineRes.click();
  await page.waitForTimeout(1000);
  await contractorListingPage.zipCodeInRefineRes.fill('07054');
  await contractorListingPage.searchIconInRefineRes.click();
  await page.waitForTimeout(1000);
});  

test('Test Contractor List Title Check,@TR-16280, @ContListingTitle,@Fail, @Regression', async ({page,contractorListingPage }) => {
  await contractorListingPage.findAcontractorNearYouHeader.waitFor({state:"visible"});
  await test.expect(page).toHaveTitle('Roofing-Contractors');
});
test('Test Resedential Tab display,TR-16281, @ResTab,@CA, @Regression', async ({contractorListingPage }) => {
  await contractorListingPage.resTab.waitFor({state:"visible"});
  test.expect(contractorListingPage.resTab.isDisabled()).toBeTruthy();
  await test.expect(contractorListingPage.resTab).toHaveCSS('text-decoration-color','rgb(215, 25, 32)');
});
test('Test Commercial Tab display,@TR-16282, @CommTab,@CA, @Regression', async ({contractorListingPage }) => {
  await contractorListingPage.comTab.waitFor({state:"visible"});
  test.expect(contractorListingPage.comTab.isDisabled()).toBeTruthy();
  await contractorListingPage.comTab.click();
  await test.expect(contractorListingPage.comTab).toHaveCSS('text-decoration-color','rgb(215, 25, 32)');
});
test('Test Verify My Contractor Tab display,@TR-16283, @VerContTab,@CA, @Regression', async ({contractorListingPage }) => {
  await contractorListingPage.verMyContractorTab.waitFor({state:"visible"});
  test.expect(contractorListingPage.verMyContractorTab.isDisabled()).toBeTruthy();
  await contractorListingPage.verMyContractorTab.click();
  await test.expect(contractorListingPage.verMyContractorTab).toHaveCSS('text-decoration-color','rgb(215, 25, 32)');
});
/*test('Test Find Contractor  Disable and Enable Check with ziocode, @FindContDisWithZip, @Regression', async ({contractorListingPage }) => {
  await contractorListingPage.findAcontractorNearYouHeader.scrollIntoViewIfNeeded();
  test.expect(contractorListingPage.findAcontractorNearYouHeader.isDisabled()).toBeTruthy();
  await contractorListingPage.zipCodeInFindCont.fill("12345");
  test.expect(contractorListingPage.findAcontractorNearYouHeader.isEnabled()).toBeTruthy();
});
test('Test ZipCode Error Message in Find Conttractor, @ZipCodeInFindContErr, @Regression', async ({page,contractorListingPage }) => {
  await contractorListingPage.findAcontractorNearYouHeader.scrollIntoViewIfNeeded();
  await contractorListingPage.zipCodeInFindCont.fill("123456");
  await page.pause();
  test.expect(contractorListingPage.zipCodeInFindContErrorMsg.isVisible()).toBeTruthy();
});*/
test('Test Resedential Section by default check, @TR-16284,@ResSecByDefault,@CA, @Regression', async ({contractorListingPage }) => {
  await contractorListingPage.findAcontractorNearYouHeader.scrollIntoViewIfNeeded();
  await test.expect(contractorListingPage.resedentialSecBtn).toHaveCSS('background-color','rgb(215, 25, 32)');
});
test('Test Commercial Section by default check,@TR-16285, @CommSecByDefault,@CA, @Regression', async ({contractorListingPage }) => {
  await contractorListingPage.findAcontractorNearYouHeader.scrollIntoViewIfNeeded();
  await test.expect(contractorListingPage.commercialSecBtn).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
  await contractorListingPage.commercialSecBtn.click();
  await test.expect(contractorListingPage.commercialSecBtn).toHaveCSS('background-color','rgb(215, 25, 32)');
});
test('Test Find Contractor Icon Disable Check,@TR-16286, @FindContDis,@CA, @Regression', async ({contractorListingPage }) => {
  await contractorListingPage.findAcontractorNearYouHeader.waitFor({state:"visible"});
  await contractorListingPage.findAcontractorNearYouHeader.scrollIntoViewIfNeeded();
  test.expect(contractorListingPage.findAContractorIcon.isDisabled()).toBeTruthy();
});
test('Test Resedential Section Review and Certification tab expand  check,@TR-16287, @ResFiltersExpand,@CA, @Regression', async ({page,contractorListingPage }) => {
  await contractorListingPage.resComReviewFilter.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await test.expect(contractorListingPage.resComReviewFilter).toHaveAttribute('aria-expanded','true');
  await test.expect(contractorListingPage.resComCerLevelFilter).toHaveAttribute('aria-expanded','true');
});
test('Test Commercial Section Review, Certification level and technologies expand check,@TR-16288, @ComFiltersExpand,@CA, @Regression', async ({page,contractorListingPage }) => {
  await contractorListingPage.resComReviewFilter.scrollIntoViewIfNeeded();
  await contractorListingPage.commercialSecBtn.click();
  await page.waitForTimeout(200);
  await test.expect(contractorListingPage.resComReviewFilter).toHaveAttribute('aria-expanded','true');
  await test.expect(contractorListingPage.resComCerLevelFilter).toHaveAttribute('aria-expanded','true');
  await test.expect(contractorListingPage.comTechFilter).toHaveAttribute('aria-expanded','true');
});
test('Test Refine results Country Dropdown check,@TR-16289, @RefCounDD,@CA, @Regression', async ({contractorListingPage }) => {
  await contractorListingPage.refineResCountryDropDown.scrollIntoViewIfNeeded();
  await test.expect(contractorListingPage.refineResCountryDropDown).toHaveValue('us');
  await contractorListingPage.refineResCountryDropDown.selectOption("CA");
  await test.expect(contractorListingPage.refineResCountryDropDown).toHaveValue('ca');
  test.expect(contractorListingPage.zipCodeInFindContErrorMsg.isVisible()).toBeTruthy();
});
test('Test Refine Results Distance Dropdown check,@TR-16290, @RefDisDD,@CA, @Regression', async ({contractorListingPage }) => {
  await contractorListingPage.refineResDistanceDropDown.scrollIntoViewIfNeeded();
  await test.expect(contractorListingPage.refineResDistanceDropDown).toHaveValue('25');
});
test('Test SoryBy Dropdown check, @TR-16291,@SortByDD, @Fail,@Regression', async ({page,contractorListingPage }) => {
  await contractorListingPage.sortByDropDown.waitFor({state:"visible"});
  await contractorListingPage.sortByDropDown.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await test.expect(contractorListingPage.sortByDropDown).toHaveValue('Most Relevance');
});
test('Test Contractors Image Resolution check,@TR-16292, @ConImgRes,@CA, @Regression', async ({page,contractorListingPage }) => {
  await contractorListingPage.contractorFirstImage.waitFor({state:"visible"});
  await contractorListingPage.contractorFirstImage.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  const width=await contractorListingPage.contractorFirstImage.getAttribute('width');
  const height=await contractorListingPage.contractorFirstImage.getAttribute('height');
  /*let width=await contractorListingPage.contractorFirstImage.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('width')
  );
  let height=await contractorListingPage.contractorFirstImage.evaluate((element)=>
    window.getComputedStyle(element).get('height')
  );
  test.expect(width.split('px')[0]).toEqual('120');
  test.expect(height.split('px')[0]).toEqual('120'); */
  await test.expect(width).toEqual('120');
  await test.expect(height).toEqual('120');
  console.log(await contractorListingPage.contractorImages.count());
  await contractorListingPage.commercialSecBtn.click();
  await page.waitForTimeout(2000);
  const widthc=await contractorListingPage.contractorFirstImage.getAttribute('width');
  const heightc=await contractorListingPage.contractorFirstImage.getAttribute('height');
  /*let widthc=await contractorListingPage.contractorFirstImage.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('width')
  );
  let heightc=await contractorListingPage.contractorFirstImage.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('height')
  );
  test.expect(widthc.split('px')[0]).toEqual('120');
  test.expect(heightc.split('px')[0]).toEqual('120'); */
  await test.expect(widthc).toEqual('120');
  await test.expect(heightc).toEqual('120');
});
test('Test ZipCode Error Message in Refine Results,@TR-16293, @ZipCodeErrInRefRes,@CA, @Regression', async ({page,contractorListingPage }) => {
  await contractorListingPage.zipCodeInRefineRes.scrollIntoViewIfNeeded();
  await contractorListingPage.crossIconInRefineRes.click();
  await page.waitForTimeout(1000);
  await contractorListingPage.zipCodeInRefineRes.fill("123456");
  //await page.pause();
  test.expect(contractorListingPage.zipCodeInFindContErrorMsg.isVisible()).toBeTruthy();
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
