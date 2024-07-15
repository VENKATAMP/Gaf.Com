import test from '../src/lib/BaseTest'
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';
test.beforeEach(async ({page}) =>{
  await page.goto(ENV.GRID_LINK_URL);
});

test('Test Grid Link and Link Grid Title Check,@TR-16353, @GridLinkTitle,@Regression', async ({page,linkGridGridLinkPage }) => {
  await linkGridGridLinkPage.linkGridHeader.waitFor({state:"visible"});
  await test.expect(page).toHaveTitle('link-grid');
});
test('Test Link Grid Header,Into Text and Button display check,@TR-16354, @LinkGridInfoDisplay, @Regression', async ({linkGridGridLinkPage }) => {
  await linkGridGridLinkPage.linkGridHeader.waitFor({state:"visible"});
  test.expect(await linkGridGridLinkPage.linkGridHeader.isVisible()).toBeTruthy();
  test.expect(await linkGridGridLinkPage.linkGridIntroText.isVisible()).toBeTruthy();
  test.expect(await linkGridGridLinkPage.linkGridButton.isVisible()).toBeTruthy();
});
test('Test Grid Links, Icon and Arrow Icon display check,@TR-16355, @GridLinkInfoDisplay,@Regression', async ({linkGridGridLinkPage }) => {
  await linkGridGridLinkPage.linkGridHeader.waitFor({state:"visible"});
  test.expect(await linkGridGridLinkPage.gridLinks.isVisible()).toBeTruthy();
  test.expect(await linkGridGridLinkPage.gridLinkIcon.isVisible()).toBeTruthy();
  test.expect(await linkGridGridLinkPage.gridLinkArrowIcon.isVisible()).toBeTruthy();
});
test('Test Grid Link Icon  Resolution check,@TR-16356, @GridLinkIcnRes,@Regression', async ({page,linkGridGridLinkPage }) => {
  await linkGridGridLinkPage.linkGridHeader.waitFor({state:"visible"});
  await page.waitForTimeout(1000);
  const width=await linkGridGridLinkPage.gridLinkIcon.getAttribute('width');
  await test.expect(width).toEqual("30");
  const height=await linkGridGridLinkPage.gridLinkIcon.getAttribute('height');
  await test.expect(height).toEqual("30");
});
test('Test Grid Links Hover and Nav check,@TR-16357, @GridLinksNav, @Regression', async ({linkGridGridLinkPage }) => {
  await linkGridGridLinkPage.linkGridHeader.waitFor({state:"visible"});
  await linkGridGridLinkPage.gridLinks.hover();
  await test.expect(linkGridGridLinkPage.gridLinks).toHaveCSS('cursor','pointer');
  const attr=await linkGridGridLinkPage.gridLinks.getAttribute('href');
  await test.expect(attr).toContain("/en-us/");
});
test('Test Link Grid Buttons Hover and Nav check,@TR-16358, @GridLinkBtnNav, @Regression', async ({linkGridGridLinkPage }) => {
  await linkGridGridLinkPage.linkGridHeader.waitFor({state:"visible"});
  await linkGridGridLinkPage.linkGridButton.hover();
  await test.expect(linkGridGridLinkPage.linkGridButton).toHaveCSS('cursor','pointer');
  const attr=await linkGridGridLinkPage.linkGridButton.getAttribute('href');
  await test.expect(attr).toContain("http");
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
