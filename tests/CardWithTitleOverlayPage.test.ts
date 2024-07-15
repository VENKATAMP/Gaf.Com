import test from '../src/lib/BaseTest'
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';
test.beforeEach(async ({page}) =>{
  await page.goto(ENV.CARD_WITH_TITLE_OVERLAY_URL);
});

test('Test Card with title overlay page Title Check,@TR-16391, @CardWithOverLayTitle,@Regression', async ({page,cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  await test.expect(page).toHaveTitle('General Content Page');
});
test('Test Card With Title overlay image display check,@TR-16392,@CardImageDis, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardWithTitleOverlayImage.isVisible()).toBeTruthy();
});
test('Test Card Image Link Clickability and Navigation,@TR-16393, @CardImageLinkClick,@Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardWithTitleOverlayImageLink.getAttribute('href')).toContain("http");
});
test('Test Card With Title overlay Resolution check,@TR-16394, @CardImageRes,@Regression', async ({page,cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  await page.waitForTimeout(1000);
  const width=await cardWithTitleOverlayPage.cardWithTitleOverlayImage.getAttribute('width');
  await test.expect(width).toEqual("510");
  const height=await cardWithTitleOverlayPage.cardWithTitleOverlayImage.getAttribute('height');
  await test.expect(height).toEqual("510");
});
test('Test Card With Image Intro Text Display Check,@TR-16395, @CardImageIntroDis, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardImageIntroText.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardImageIntroText.isVisible()).toBeTruthy(); 
});
test('Test Card With Image Header Display Check,@TR-16396, @CardImageHeaderDis, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardImageHeader.isVisible()).toBeTruthy(); 
});
test('Test Card With Image Content Manage Link Display Check and Navigation,@TR-16397, @CardImageContManageLink, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardImageButton.isVisible()).toBeTruthy(); 
  const attr=await cardWithTitleOverlayPage.cardImageButton.getAttribute('href');
  await test.expect(attr).toContain("http");
});
test('Test Card With Button Row heading Link Display Check and Navigation,@TR-16398, @CardWithBtnRowHeading, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardWithButtonRowHeading.isVisible()).toBeTruthy(); 
  const attr=await cardWithTitleOverlayPage.cardWithButtonRowHeading.getAttribute('href');
  await test.expect(attr).toContain("http");
});
test('Test Caontainer Display Check,@TR-16399, @ContainerDis, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardContainer.isVisible()).toBeTruthy(); 
});
test('Test Four Cards in Caontainer Display Check,@TR-16400, @FourCardContainerDis, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardContainerWithFourCards.count()).toEqual(3); 
});
test('Test Card With Title Overlay Row With  Header Display Check,@TR-16401, @CardTitleRowHeaderDis, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardWithTitleOverlayRowWithHeading.isVisible()).toBeTruthy(); 
});
test('Test Card With overlay link list image display check,@TR-16402,@CardLinkListImageDis, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardWithTitleOverlayLinkListImage.isVisible()).toBeTruthy();
});
test('Test Card With overlay link list image Resolution check,@TR-16403, @CardLinkListImageRes,@Regression', async ({page,cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  await page.waitForTimeout(1000);
  const width=await cardWithTitleOverlayPage.cardWithTitleOverlayLinkListImage.getAttribute('width');
  await test.expect(width).toEqual("510");
  const height=await cardWithTitleOverlayPage.cardWithTitleOverlayLinkListImage.getAttribute('height');
  await test.expect(height).toEqual("510");
});
test('Test Card With overlay link list links Display, Navigation Check,@TR-16404, @CardLinkListLinksDis, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardImageIntroText.waitFor({state:"visible"});
  for(let i=0;i<await cardWithTitleOverlayPage.cardWithTitleOverlayLinkList.count();i++){
    test.expect(await cardWithTitleOverlayPage.cardWithTitleOverlayLinkList.nth(i).isVisible()).toBeTruthy(); 
    const attr=await cardWithTitleOverlayPage.cardImageButton.getAttribute('href');
    await test.expect(attr).toContain("http");
  } 
});
test('Test Card With overlay link list Header Display Check,@TR-16405, @CardLinkListHeaderDis, @Regression', async ({cardWithTitleOverlayPage }) => {
  await cardWithTitleOverlayPage.cardWithTitleOverlayImage.waitFor({state:"visible"});
  test.expect(await cardWithTitleOverlayPage.cardWithTitleOverlayLinkListHeading.isVisible()).toBeTruthy(); 
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
