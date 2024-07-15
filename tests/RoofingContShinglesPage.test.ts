import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";
import { afterEachHooks } from 'gafone';
  test.beforeEach(async ({page, roofingContShinglesPage})=>{
  await page.goto('https://www.gaf.com/en-us/roofing-materials/residential-roofing-materials/shingles#');
  await page.waitForLoadState("domcontentloaded");
  await roofingContShinglesPage.address.scrollIntoViewIfNeeded();
  await roofingContShinglesPage.address.type("Parsippany, NJ 07054, USA",{delay:500});
  await page.keyboard.press('ArrowDown+Enter');
  await page.waitForTimeout(5000);
});

test('Verify Roofing Contractor Shingles Page Title, @roofcontshingtit, @TR-17011, @Regression', async ({ page }) => {
  await test.expect(page).toHaveTitle('Roof Shingle Types & Styles | GAF Roofing');
});
test('Verify Product Type Filter Visibility, @prodtypefilter, @TR-17012, @Regression', async ({ page, roofingContShinglesPage }) => {
  test.expect(await roofingContShinglesPage.shingleProductTypeFilter.isVisible()).toBeTruthy();
  test.expect(await roofingContShinglesPage.colorBlendFilter.isVisible()).toBeTruthy();
  test.expect(await roofingContShinglesPage.warrantiesProtectionFilter.isVisible()).toBeTruthy();
});
test('Verify Product Type Filter Expand By Default, @prodtypefilterexpanddefault, @TR-17013, @Regression', async ({ page, roofingContShinglesPage }) => {
  test.expect(await roofingContShinglesPage.shingleProductTypeFilter).toHaveAttribute("aria-expanded", "true");
  test.expect(await roofingContShinglesPage.colorBlendFilter).toHaveAttribute("aria-expanded", "true");
  test.expect(await roofingContShinglesPage.warrantiesProtectionFilter).toHaveAttribute("aria-expanded", "true");
});
test('Verify Product Type Filter Categories Visibility, @prodtypefiltercatvisible, @TR-17014, @Regression', async ({ page, roofingContShinglesPage }) => {
  test.expect(await roofingContShinglesPage.shingleProductFilterCat.isVisible()).toBeTruthy();
  test.expect(await roofingContShinglesPage.colorBlendFilterCat.isVisible()).toBeTruthy();
  test.expect(await roofingContShinglesPage.warrantiesProtectionFilterCat.isVisible()).toBeTruthy();
});
test('Verify Product Type Filter Expand On Click, @prodtypefilterexpandonclick, @TR-17015, @Regression', async ({ page, roofingContShinglesPage }) => {
  await roofingContShinglesPage.shingleProductTypeFilter.click();
  test.expect(await roofingContShinglesPage.shingleProductTypeFilter).toHaveAttribute("aria-expanded", "false");
  await roofingContShinglesPage.colorBlendFilter.click();
  test.expect(await roofingContShinglesPage.colorBlendFilter).toHaveAttribute("aria-expanded", "false");
  await roofingContShinglesPage.warrantiesProtectionFilter.click();
  test.expect(await roofingContShinglesPage.warrantiesProtectionFilter).toHaveAttribute("aria-expanded", "false");
});
test('Verify Shingles Product Type Filter Categories Visibility, @shingprodtypefiltercat, @TR-17016, @Regression', async ({ page, roofingContShinglesPage }) => {
  for(let i=0;i<await roofingContShinglesPage.shingleProductAllFilterTypes.count();i++){
    test.expect(await roofingContShinglesPage.shingleProductAllFilterTypes.nth(i).isVisible()).toBeTruthy();
  }
});
test('Verify Color Blend Filter Categories Visibility, @colorblendtypefiltercat, @TR-17017", @Regression', async ({ page, roofingContShinglesPage }) => {
  for(let i=0;i<await roofingContShinglesPage.colorBlendAllFilterTypes.count();i++){
    test.expect(await roofingContShinglesPage.colorBlendAllFilterTypes.nth(i).isVisible()).toBeTruthy();
  }
});
test('Verify Warranties Protection Filter Categories Visibility, @prodtypefiltercat, @TR-17018, @Regression', async ({ page, roofingContShinglesPage }) => {
  for(let i=0;i<await roofingContShinglesPage.warrantiesProtectionAllFilterTypes.count();i++){
    test.expect(await roofingContShinglesPage.warrantiesProtectionAllFilterTypes.nth(i).isVisible()).toBeTruthy();
  }
});
test('Verify Applied Filters Visibility, Clear All Filters, @appliedclearallfilters, @TR-17019, @Regression', async ({ page, roofingContShinglesPage }) => {
  test.expect(await roofingContShinglesPage.clearAllFilter.isVisible()).toBeFalsy();
  await roofingContShinglesPage.shingleProductAllFilterTypes.first().click();
  await page.waitForTimeout(3000);
  test.expect(await roofingContShinglesPage.clearAllFilter.isVisible()).toBeTruthy();
  test.expect(await roofingContShinglesPage.appliedFilter.isVisible()).toBeTruthy();
  await roofingContShinglesPage.clearAllFilter.click();
  await page.waitForTimeout(3000);
  await roofingContShinglesPage.colorBlendAllFilterTypes.first().click();
  await page.waitForTimeout(3000);
  test.expect(await roofingContShinglesPage.clearAllFilter.isVisible()).toBeTruthy();
  test.expect(await roofingContShinglesPage.appliedFilter.isVisible()).toBeTruthy();
  await roofingContShinglesPage.clearAllFilter.click();
  await page.waitForTimeout(3000);
  await roofingContShinglesPage.warrantiesProtectionAllFilterTypes.first().click();
  await page.waitForTimeout(3000);
  test.expect(await roofingContShinglesPage.clearAllFilter.isVisible()).toBeTruthy();
  test.expect(await roofingContShinglesPage.appliedFilter.isVisible()).toBeTruthy();
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
