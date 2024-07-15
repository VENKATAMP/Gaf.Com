import test from '../src/lib/BaseTest'
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';
test.beforeEach(async ({page}) =>{
  await page.goto(ENV.DOCUMENT_PACKAGE_URL);
});

test('Test Document Package  Title Check,@TR-16444, @DocPackageTitle, @Regression', async ({page,documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  await test.expect(page).toHaveTitle('New Document Package Page');
});
test('Test Document Summery display and count,@TR-16445, @DocSummDis @Regression', async ({documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  test.expect(documentPackagePage.summery.isVisible()).toBeTruthy();
  const rec=(await documentPackagePage.summery.textContent()).split(' ')[1];
  const filesCount=(await documentPackagePage.docListingList.count()).toString();
  await test.expect(rec).toContain(filesCount);
});
test('Test SortBy Drodown display and items,@TR-16446, @SortByDisplay, @Regression', async ({documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  test.expect(documentPackagePage.sortByDropdown.isVisible()).toBeTruthy();
  await documentPackagePage.sortByDropdown.selectOption('Alphabetical order A-Z');
  await documentPackagePage.sortByDropdown.selectOption('Reverse alphabetical order Z-A');
});
test('Test SortBy Drodown files sorting type check,@TR-16447, @SortByDisplay, @Regression', async ({page,documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  await page.waitForLoadState('domcontentloaded');
  let sortList=[];
  let sortRevList=[];
  for(let i=0;i<await documentPackagePage.docNameInDocList.count();i++){
    sortList.push(await documentPackagePage.docNameInDocList.nth(i).textContent());
  }
  let tempsortList=sortList.sort();
  JSON.stringify(sortList)==JSON.stringify(tempsortList)? test.expect(true).toBeTruthy(): test.expect(true).toBeFalsy();
  await documentPackagePage.sortByDropdown.selectOption('Reverse alphabetical order Z-A');
  await page.waitForLoadState('domcontentloaded');
  for(let i=0;i<await documentPackagePage.docNameInDocList.count();i++){
    sortRevList.push(await documentPackagePage.docNameInDocList.nth(i).textContent());
  }
  let temprevsortList=sortList.sort().reverse();
  JSON.stringify(sortRevList)==JSON.stringify(temprevsortList)? test.expect(true).toBeTruthy(): test.expect(true).toBeFalsy();
});
test('Test Download Full package button display,@TR-16448, @DownloadAllBtnDis, @Regression', async ({documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  test.expect(documentPackagePage.downloadFullPackageBtn.isVisible()).toBeTruthy();
});
test('Test Add All To Cart Button Display, @TR-16449,@AddAllToCartBtnDisplay, @Regression', async ({documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  test.expect(documentPackagePage.addAllToKartBtn.isVisible()).toBeTruthy();
});
test('Test Add All To Cart Button Disabilty check,@TR-16450, @AddAllToCartDisable, @Regression', async ({documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  test.expect(documentPackagePage.addAllToKartBtn.isEnabled()).toBeTruthy();
  for(let i=0;i<await documentPackagePage.docAddTocartChkBox.count();i++){
    await documentPackagePage.docAddTocartChkBox.nth(i).click();
  }
  test.expect(await documentPackagePage.addAllToKartBtn.isDisabled()).toBeTruthy();
})
test('Test Add To Cart Deselect Check,@TR-16451, @AddToCartDeselect, @Regression', async ({documentPackagePage , page}) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  test.expect(documentPackagePage.addAllToKartBtn.isEnabled()).toBeTruthy();
  for(let i=0;i<await documentPackagePage.docAddTocartChkBox.count();i++){
    await documentPackagePage.docAddTocartChkBox.nth(i).click();
  }
  test.expect(await documentPackagePage.myDocumentsCart.isVisible()).toBeTruthy();
  await documentPackagePage.myDocumentsCart.click();
  await documentPackagePage.clearAllInsideCart.click();
  await page.reload();
  await page.waitForLoadState("domcontentloaded");
  test.expect(documentPackagePage.addAllToKartBtn.isEnabled()).toBeTruthy();
});
test('Test Remove selected from Cart display,@TR-16452, @RemoveSelFromCartDis, @Regression', async ({page,documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  await documentPackagePage.docAddTocartChkBox.first().click();
  test.expect(await documentPackagePage.myDocumentsCart.isVisible()).toBeTruthy();
  await documentPackagePage.docAddTocartChkBox.first().click();
  test.expect(await documentPackagePage.myDocumentsCart.isVisible()).toBeFalsy();
});
test('Test Document image display and click functionality,@TR-16453, @DocImagesDis, @Regression', async ({page,documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  await page.waitForLoadState('domcontentloaded');
  for(var i=0;i<await documentPackagePage.docImageOfEachDoc.count();i++){
    await documentPackagePage.docImageOfEachDoc.nth(i).scrollIntoViewIfNeeded();
    test.expect(await documentPackagePage.docImageOfEachDoc.nth(i).isVisible()).toBeTruthy();
    await documentPackagePage.docImageOfEachDoc.nth(i).click();
    test.expect(await documentPackagePage.docZoomPopUp.isVisible()).toBeTruthy();
    await documentPackagePage.docZoomPopUpCloseIcon.click();  
  }
});
test('Test Document Name and Type display check,@TR-16454, @DocNameDis, @Regression', async ({documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  for(let i=0;i<await documentPackagePage.docNameInDocList.count();i++){
    test.expect(await documentPackagePage.docNameInDocList.nth(i).isVisible()).toBeTruthy();
    test.expect(await documentPackagePage.docTypeInDocList.nth(i).isVisible()).toBeTruthy();
    test.expect(await documentPackagePage.docTypeInDocList.nth(i).textContent()).toEqual('PDF');
  }
});
test('Test Document Format Type display check,@TR-16455, @DocFormatTypeDis, @Regression', async ({documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  for(let i=0;i<await documentPackagePage.docFormatListInsideEachDocList.count();i++){
    test.expect(await documentPackagePage.docFormatListInsideEachDocList.nth(i).isVisible()).toBeTruthy();
    test.expect(await documentPackagePage.docFormatListInsideEachDocList.nth(i).textContent()).toEqual('PDF');
  }
});
test('Test Document Format Type copy icon display and functionality check, @TR-16456,@DocCopy,@Regression', async ({page,documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  for(let i=0;i<await documentPackagePage.docCopyLink.count();i++){
    test.expect(await documentPackagePage.docCopyLink.nth(i).isVisible()).toBeTruthy();
    await documentPackagePage.docCopyLink.nth(i).click();
    test.expect(await documentPackagePage.copyClipBoard.nth(i).isVisible()).toBeTruthy();
  }
});
test('Test Document Format Type Download icon display and functionality check, @TR-16457,@DocDownload, @Regression', async ({page,documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  for(let i=0;i<await documentPackagePage.docDownloadLink.count();i++){
    test.expect(await documentPackagePage.docDownloadLink.nth(i).isVisible()).toBeTruthy();
    await documentPackagePage.docDownloadLink.nth(i).click();
  }
});
test('Test Document Format Type Add to batch checkbox icon display and functionality check, @TR-16458,@DocAddToBatchChk, @Regression', async ({page,documentPackagePage }) => {
  await documentPackagePage.summery.waitFor({state:"visible"});
  for(let i=0;i<await documentPackagePage.docAddTocartChkBox.count();i++){
    test.expect(await documentPackagePage.docAddTocartChkBox.nth(i).isVisible()).toBeTruthy();
    await documentPackagePage.docAddTocartChkBox.nth(i).click();
    test.expect(await documentPackagePage.cartNumber.isVisible()).toBeTruthy();
  }
  test.expect(await documentPackagePage.cartNumber.textContent()).toContain((await documentPackagePage.docAddTocartChkBox.count()).toString());
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
