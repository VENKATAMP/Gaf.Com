import test from '../src/lib/BaseTest'
import ENV from '../src/lib/env'
import { afterEachHooks } from 'gafone'
test.beforeEach(async ({page})=>{
    await page.goto(ENV.PRESS_RELEASE_URL);
});

test('Test Press Release Header, Intro Text, @TR-15657, @PressReleaseInfoDisplay, @Regression', async ({page, pressReleasePage})=>{
    pressReleasePage.pressReleaseHeader.waitFor({state:"visible"});
    await test.expect(pressReleasePage.pressReleaseHeader.isVisible()).toBeTruthy();
    await test.expect(pressReleasePage.pressReleaseIntroText.isVisible()).toBeTruthy();
});
test('Test to select year from dropdown,@TR-15660, @Regression', async ({page, pressReleasePage}) => {
    pressReleasePage.pressReleaseCookies.waitFor({state:"visible"});
    await pressReleasePage.pressReleaseCookies.click();
    await pressReleasePage.pressReleaseDropdown.scrollIntoViewIfNeeded();
    await pressReleasePage.pressReleaseDropdown.selectOption('All Years');
    await test.expect(pressReleasePage.pressReleaseDropdown).toHaveValue('all');
    await pressReleasePage.pressReleaseDropdown.selectOption('Year 2021');
    await test.expect(pressReleasePage.pressReleaseDropdown).toHaveValue('2021');
    await pressReleasePage.pressReleaseDropdown.selectOption('Year 2022');
    await test.expect(pressReleasePage.pressReleaseDropdown).toHaveValue('2022');
    await pressReleasePage.pressReleaseDropdown.selectOption('Year 2023');
    await test.expect(pressReleasePage.pressReleaseDropdown).toHaveValue('2023');
    test.expect(pressReleasePage.pressReleaseResult.isVisible()).toBeTruthy();
  });
  test('Test to check links are visible and correct, @TR-15658, @Regression', async ({page, pressReleasePage}) => {
    pressReleasePage.pressReleaseHeader.waitFor({state:"visible"});
    await test.expect(pressReleasePage.pressReleaseLink1.isVisible()).toBeTruthy();
    const linkBtnHrefAttbt1=await pressReleasePage.pressReleaseLink1.getAttribute('href');
    //console.log("Msg: "+linkBtnHrefAttbt1);
    await test.expect(linkBtnHrefAttbt1).toContain("http");
    await test.expect(pressReleasePage.pressReleaseLink2.isVisible()).toBeTruthy();
    const linkBtnHrefAttbt2=await pressReleasePage.pressReleaseLink2.getAttribute('href');
    await test.expect(linkBtnHrefAttbt2).toContain("http");
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