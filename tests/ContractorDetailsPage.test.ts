import test from '../src/lib/BaseTest'
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';
test.beforeEach(async ({page}) =>{
  await page.goto(ENV.CONT_DETAILS_RES_URL);
});

test('Test Contractor Details title check ,@TR-16294, @ContDetailsTitle,@Fail, @Regression', async ({page,contractorDetailsPage }) => {
  await contractorDetailsPage.nextSlideArrowIcon.waitFor({state:"visible"});
  await test.expect(page).toHaveTitle('George J Keller and Sons');
});
test('Test Contractors details carousel arrows display,@TR-16295, @ConDetCarouselArrows, @Regression', async ({page,contractorDetailsPage }) => {
  await contractorDetailsPage.nextSlideArrowIcon.waitFor({state:"visible"});
  await page.waitForTimeout(1000);
  test.expect(await contractorDetailsPage.prevSlideArrowIcon.isHidden()).toBeTruthy();
  test.expect(await contractorDetailsPage.nextSlideArrowIcon.isVisible()).toBeTruthy();
  await contractorDetailsPage.nextSlideArrowIcon.click();
  test.expect(await contractorDetailsPage.prevSlideArrowIcon.isVisible()).toBeTruthy();
});
test('Test Resendential Place Holder Image check,@TR-16296, @PlaceHolderImg,@Fail', async ({page,contractorDetailsPage }) => {
  await contractorDetailsPage.resPlaceHolderFirstImage.waitFor({state:"visible"});
  await page.waitForTimeout(1000);
  let width=await contractorDetailsPage.resPlaceHolderFirstImage.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('width')
  );
  let height=await contractorDetailsPage.resPlaceHolderFirstImage.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('height')
  );
  test.expect(width.split('px')[0]).toEqual('478');
  test.expect(height.split('px')[0]).toEqual('364');
});
test('Test Contractor Details Check,@TR-16297, @ConInfo, @Regression', async ({contractorDetailsPage }) => {
  await contractorDetailsPage.contName.scrollIntoViewIfNeeded();
  test.expect(await contractorDetailsPage.contName.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.avgRatingStarsReviews.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.ratingStarsIcons.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.ratingValue.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.totalRatings.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.address.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.website.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.phone.isVisible()).toBeTruthy();
});
test('Test Jumplinks display,@TR-16298, @JumpLinksDis,@CA, @Regression', async ({contractorDetailsPage }) => {
  await contractorDetailsPage.aboutUsJumpLink.waitFor({state:"visible"});
  test.expect(await contractorDetailsPage.aboutUsJumpLink.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.certificationsJumpLink.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.conDetailsJumpLink.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.reviewsJumpLink.isVisible()).toBeTruthy();
});
test('Test About US Jump link navigation,@TR-16299, @AboutUsNav,@CA, @Regression', async ({page,contractorDetailsPage }) => {
  await contractorDetailsPage.aboutUsJumpLink.waitFor({state:"visible"});
  await contractorDetailsPage.aboutUsJumpLink.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  await test.expect(contractorDetailsPage.aboutUsJumpLink).toHaveCSS('color','rgb(215, 25, 32)');
});
test('Test Certifications Jump link navigation,@TR-16300, @CertificationsNav,@CA, @Regression', async ({page,contractorDetailsPage }) => {
  await contractorDetailsPage.certificationsJumpLink.waitFor({state:"visible"});
  await contractorDetailsPage.certificationsJumpLink.scrollIntoViewIfNeeded();
  await contractorDetailsPage.certificationsJumpLink.click();
  await page.waitForTimeout(2000);
  await test.expect(contractorDetailsPage.certificationsJumpLink).toHaveCSS('color','rgb(215, 25, 32)');
});
test('Test Contractor Details Jump link navigation,@TR-16301, @ContDetNav,@CA, @Regression', async ({page,contractorDetailsPage }) => {
  await contractorDetailsPage.conDetailsJumpLink.waitFor({state:"visible"});
  await contractorDetailsPage.conDetailsJumpLink.scrollIntoViewIfNeeded();
  await contractorDetailsPage.conDetailsJumpLink.click();
  await page.waitForTimeout(2000);
  await test.expect(contractorDetailsPage.conDetailsJumpLink).toHaveCSS('color','rgb(215, 25, 32)');
});
test('Test Reviews Jump link navigation,@TR-16302, @ReviewsNav,@Fail, @Regression', async ({page,contractorDetailsPage }) => {
  await contractorDetailsPage.reviewsJumpLink.waitFor({state:"visible"});
  await contractorDetailsPage.reviewsJumpLink.click();
  await page.waitForTimeout(2000);
  await test.expect(contractorDetailsPage.reviewsJumpLink).toHaveCSS('color','rgb(215, 25, 32)');
});
test('Test About Section Check, @TR-16303,@AboutSec,@Fail, @Regression', async ({contractorDetailsPage }) => {
  await contractorDetailsPage.aboutHeader.scrollIntoViewIfNeeded();
  test.expect(await contractorDetailsPage.aboutHeader.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.expandAbout.isVisible()).toBeTruthy();
  await contractorDetailsPage.expandAbout.scrollIntoViewIfNeeded();
  await contractorDetailsPage.expandAbout.click();
  test.expect(await contractorDetailsPage.collapseAbout.isVisible()).toBeTruthy();
});
test('Test Certifications and awards section  check,@TR-16304, @CerAwardsSec,@Fail, @Regression', async ({contractorDetailsPage }) => {
  await contractorDetailsPage.certificationsHeader.scrollIntoViewIfNeeded();
  test.expect(await contractorDetailsPage.certificationsHeader.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.contractorFirstImage.isVisible()).toBeTruthy();
});
test('Test Contractor Details check for Res, @TR-16305,@ConDetRes,@Fail, @Regression', async ({contractorDetailsPage }) => {
  await contractorDetailsPage.detailsHeader.scrollIntoViewIfNeeded();
  test.expect(await contractorDetailsPage.detailsHeader.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.contractorIDLabel.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.contractorID.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.stateLicenceNumberLabel.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.stateLicenceNumber.isVisible()).toBeTruthy();
});
test('Test Contractor Details check for Commercial,@TR-16306, @ConDetCom,@CA, @Regression', async ({page,contractorDetailsPage }) => {
  await page.goto(ENV.CONT_DETAILS_COM_URL);
  await contractorDetailsPage.detailsHeader.scrollIntoViewIfNeeded();
  test.expect(await contractorDetailsPage.detailsHeader.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.contractorIDLabel.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.contractorID.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.stateLicenceNumberLabel.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.stateLicenceNumber.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.technologiesLabel.isVisible()).toBeTruthy();
  
});
test('Test Reviews Section Check,@TR-16307, @FindContDis,@Fail, @Regression', async ({contractorDetailsPage }) => {
  await contractorDetailsPage.reviewsHeader.waitFor({state:"visible"});
  test.expect(await contractorDetailsPage.reviewsHeader.isVisible()).toBeTruthy();
  test.expect(await contractorDetailsPage.seeAllReviewsBtn.isEnabled()).toBeTruthy();
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
