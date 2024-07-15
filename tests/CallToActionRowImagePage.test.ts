import test from '../src/lib/BaseTest'
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';
test.beforeEach(async ({page}) =>{
  await page.goto(ENV.CALL_TO_ACTION_ROW_IMAGE_URL);
});

test('Test Call To Action Row with Image Title Check,@TR-16251, @CallToActionTitle,@Regression', async ({page,callToActionRowImagePage }) => {
  await callToActionRowImagePage.leftImage.waitFor({state:"visible"});
  await test.expect(page).toHaveTitle('Call to Action Row with Image');
});
test('Test Call To Action Row with Image Left Side check,@TR-16252, @CallToActionLeft, @Regression', async ({page,callToActionRowImagePage }) => {
  await callToActionRowImagePage.leftImage.waitFor({state:"visible"});
  test.expect(await callToActionRowImagePage.leftImage.isVisible()).toBeTruthy();
});
test('Test Call To Action Row with Image Right Side check,@TR-16253, @CallToActionRight,@Regression', async ({page,callToActionRowImagePage }) => {
  await callToActionRowImagePage.leftImage.waitFor({state:"visible"});
  test.expect(await callToActionRowImagePage.rightImage.isVisible()).toBeTruthy();
});
test('Test Call To Action Row with Image Left Side Image Resolution check,@TR-16254, @CallToActionLeftRes,@Regression', async ({page,callToActionRowImagePage }) => {
  await callToActionRowImagePage.leftImage.waitFor({state:"visible"});
  await page.waitForTimeout(1000);
  const width=await callToActionRowImagePage.leftImage.getAttribute('width');
  await test.expect(width).toEqual("764");
  const height=await callToActionRowImagePage.leftImage.getAttribute('height');
  await test.expect(height).toEqual("510");
});
test('Test Call To Action Row with Image Right Side Image Resolution check,@TR-16255, @CallToActionRightRes, @Regression', async ({page,callToActionRowImagePage }) => {
  await callToActionRowImagePage.leftImage.waitFor({state:"visible"});
  await page.waitForTimeout(1000);
  const width=await callToActionRowImagePage.rightImage.getAttribute('width');
  await test.expect(width).toEqual("764");
  const height=await callToActionRowImagePage.rightImage.getAttribute('height');
  await test.expect(height).toEqual("510");
});
test('Test Call To Action Row with Image Left Side Image Buttons display check,@TR-16256, @CallToActionLeftBtns, @Regression', async ({page,callToActionRowImagePage }) => {
  await callToActionRowImagePage.leftImage.waitFor({state:"visible"});
  test.expect(await callToActionRowImagePage.leftImagePrimaryBtn.isVisible()).toBeTruthy();
  test.expect(await callToActionRowImagePage.leftImageSecodoryButton.isVisible()).toBeTruthy();
});
test('Test Call To Action Row with Image Right Side Image Buttons display check,@TR-16257, @CallToActionRightBtns, @Regression', async ({page,callToActionRowImagePage }) => {
  await callToActionRowImagePage.leftImage.waitFor({state:"visible"});
  test.expect(await callToActionRowImagePage.rightImagePrimaryBtn.isVisible()).toBeTruthy();
  test.expect(await callToActionRowImagePage.rightImageSecodoryButton.isVisible()).toBeTruthy();
});
test('Test Call To Action Row with Image Left Side Image Buttons Hover and Nav check,@TR-16258, @CallToActionLeftBtnsNav, @Regression', async ({page,callToActionRowImagePage }) => {
  await callToActionRowImagePage.leftImage.waitFor({state:"visible"});
  await callToActionRowImagePage.leftImagePrimaryBtn.hover();
  await test.expect(callToActionRowImagePage.leftImagePrimaryBtn).toHaveCSS('cursor','pointer');
  const leftImagePrimaryBtnHrefAttr=await callToActionRowImagePage.leftImagePrimaryBtn.getAttribute('href');
  await test.expect(leftImagePrimaryBtnHrefAttr).toContain("http");
  await callToActionRowImagePage.leftImageSecodoryButton.hover();
  await test.expect(callToActionRowImagePage.leftImageSecodoryButton).toHaveCSS('cursor','pointer');
  const leftImageSecondaryBtnHrefAttr=await callToActionRowImagePage.leftImageSecodoryButton.getAttribute('href');
  await test.expect(leftImageSecondaryBtnHrefAttr).toContain("http");
});
test('Test Call To Action Row with Image Right Side Image Buttons Hover and Nav check,@TR-16259, @CallToActionRightBtnsNav, @Regression', async ({page,callToActionRowImagePage }) => {
  await callToActionRowImagePage.leftImage.waitFor({state:"visible"});
  await callToActionRowImagePage.rightImagePrimaryBtn.hover();
  await test.expect(callToActionRowImagePage.rightImagePrimaryBtn).toHaveCSS('cursor','pointer');
  const rightImagePrimaryBtnHrefAttr=await callToActionRowImagePage.rightImagePrimaryBtn.getAttribute('href');
  await test.expect(rightImagePrimaryBtnHrefAttr).toContain("http");
  await callToActionRowImagePage.rightImageSecodoryButton.hover();
  await test.expect(callToActionRowImagePage.rightImageSecodoryButton).toHaveCSS('cursor','pointer');
  const rightImageSecondaryBtnHrefAttr=await callToActionRowImagePage.rightImageSecodoryButton.getAttribute('href');
  await test.expect(rightImageSecondaryBtnHrefAttr).toContain("http");
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
