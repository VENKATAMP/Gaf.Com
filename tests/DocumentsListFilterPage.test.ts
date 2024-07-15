import { Numeric } from 'mssql';
import test from '../src/lib/BaseTest'
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';
test.beforeEach(async ({page}) =>{
  await page.goto(ENV.DOCUMENT_LIST_FILTER_URL);
});

test('Test Document List Filter Page Title Check,@TR-16462, @DocListFilterTitle, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await test.expect(page).toHaveTitle('New Document List Page');
});
test('Test Document List Filter Page Summery display and Count match check at both places for Resedentail,@TR-16463, @DocListFilSummDisForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForLoadState("domcontentloaded");
  test.expect(documentsListFilterPage.summery.isVisible()).toBeTruthy();
  const rec=(await documentsListFilterPage.summery.textContent()).split(' ')[5];
  const engfilescount=await documentsListFilterPage.totalEnglishFiles.textContent();
  const spanishfilescount=await documentsListFilterPage.totalSpanishFiles.textContent();
  await test.expect(rec).toEqual((parseInt(engfilescount)+parseInt(spanishfilescount)).toString());
});
test('Test Document List Filter Page SortBy Drodown display and items for Resedentail,@TR-16464, @DocListFilSortByDisplayForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForLoadState("domcontentloaded");
  test.expect(documentsListFilterPage.sortByDropdown.isVisible()).toBeTruthy();
  await test.expect(documentsListFilterPage.sortByDropdown).toHaveValue('Most Relevance');
  await documentsListFilterPage.sortByDropdown.selectOption("Name A-Z");
  await test.expect(documentsListFilterPage.sortByDropdown).toHaveValue('Name A-Z');
  await documentsListFilterPage.sortByDropdown.selectOption("Name Z-A");
  await test.expect(documentsListFilterPage.sortByDropdown).toHaveValue('Name Z-A');
});
test('Test Document List Filter Page View  Drodown display and items for Resedentail,@TR-16465, @DocListFilViewDisplayForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForLoadState("networkidle");
  test.expect(documentsListFilterPage.viewDropdown.isVisible()).toBeTruthy();
  await test.expect(documentsListFilterPage.viewDropdown).toHaveValue('20');
  test.expect((await documentsListFilterPage.containerList.count())).toEqual(parseInt("20"));
  await documentsListFilterPage.viewDropdown.selectOption("50 per page");
  await test.expect(documentsListFilterPage.viewDropdown).toHaveValue('50');
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(10000);
  test.expect((await documentsListFilterPage.containerList.count())).toEqual(parseInt("50"));
  await documentsListFilterPage.viewDropdown.selectOption("100 per page");
  await test.expect(documentsListFilterPage.viewDropdown).toHaveValue('100');
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(10000);
  test.expect((await documentsListFilterPage.containerList.count())).toEqual(parseInt("100"));
});
test('Test Document List Filter Page SortBy Drodown files sorting type check for Resedentail,@TR-16466, @DocListSortingForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForLoadState("domcontentloaded");
  await documentsListFilterPage.sortByDropdown.selectOption('Name A-Z');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(5000);
  let sortList=[];
  let sortRevList=[];
  for(let i=0;i<await documentsListFilterPage.containerList.count();i++){
    sortList.push(await documentsListFilterPage.containerList.nth(i).textContent());
  }
  let tempsortList=sortList.sort();
  JSON.stringify(sortList)==JSON.stringify(tempsortList)? test.expect(true).toBeTruthy(): test.expect(true).toBeFalsy();
  await documentsListFilterPage.sortByDropdown.selectOption('Name Z-A');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(5000);
  for(let i=0;i<await documentsListFilterPage.containerList.count();i++){
    sortRevList.push(await documentsListFilterPage.containerList.nth(i).textContent());
  }
  let temprevsortList=sortRevList.sort().reverse();
  JSON.stringify(sortRevList)==JSON.stringify(temprevsortList)? test.expect(true).toBeTruthy(): test.expect(true).toBeFalsy();
});
test('Test Document List Filter Page Language Filters display and Expand Check for Resedentail,@TR-16467, @DocListLangFilDisForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForLoadState("domcontentloaded");
  test.expect(documentsListFilterPage.languageFilter.isVisible()).toBeTruthy();
  test.expect(await documentsListFilterPage.languageFilter).toHaveAttribute("aria-expanded","true");
  await documentsListFilterPage.languageFilter.click();
  await page.waitForTimeout(3000);
  test.expect(await documentsListFilterPage.languageFilter).toHaveAttribute("aria-expanded","false");
});
test('Test Document List Filter Page Document Type Filter Display and Expand Check and Show more check for Resedentail, @TR-16468,@DocListDocTypeFilDisForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  test.expect(documentsListFilterPage.documentFilter.isVisible()).toBeTruthy();
  test.expect(await documentsListFilterPage.documentFilter).toHaveAttribute("aria-expanded","true");
  if(await documentsListFilterPage.showMoreFilter.isVisible()){
    await documentsListFilterPage.showMoreFilter.click();
    await test.expect(documentsListFilterPage.showLessFilter).toBeVisible();
  }
  await documentsListFilterPage.documentFilter.click();
  test.expect(await documentsListFilterPage.documentFilter).toHaveAttribute("aria-expanded","false");
});
test('Test Document List Filter Page Search Options Display and functionality for Resedentail,@TR-16469, @DocListSearchForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForLoadState("domcontentloaded");
  test.expect(documentsListFilterPage.searchInput.isVisible()).toBeTruthy();
  test.expect(documentsListFilterPage.searchLensIcon.isVisible()).toBeTruthy();
  await documentsListFilterPage.searchInput.fill("10 Fasteners 2x4 Board");
  test.expect(documentsListFilterPage.clearSearchIcon.isVisible()).toBeTruthy();
  await page.waitForTimeout(5000);
  await documentsListFilterPage.searchLensIcon.click();
  await page.waitForTimeout(5000);
  test.expect((await documentsListFilterPage.containerList.count())).toBeGreaterThanOrEqual(0);
})
test('Test Document List Filter Page records count after applying language filter for Resedentail,@TR-16470, @LanFilterDocCountForRes, @Regression1', async ({documentsListFilterPage , page}) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForLoadState("domcontentloaded");
  await documentsListFilterPage.englishLanguageChkBox.click();
  await page.waitForTimeout(10000);
  const engFilesCount=(await documentsListFilterPage.totalEnglishFiles.textContent()).split(' ')[0];
  const rec=(await documentsListFilterPage.summery.textContent()).split(' ')[5];
  await test.expect(rec).toEqual(engFilesCount);
});
test('Test Document List Filter Page records count after applying doc type  filter for Resedentail,@TR-16471, @DocTypeFilterDocCountForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForLoadState("domcontentloaded");
  await documentsListFilterPage.firstDocTypeFilter.click();
  await page.waitForLoadState('domcontentloaded');
  const engFilesCount=await documentsListFilterPage.totalEnglishFiles.textContent();
  const spanFilesCount=await documentsListFilterPage.totalSpanishFiles.textContent();
  const totalRec=parseInt(engFilesCount)+parseInt(spanFilesCount);
  const rec=(await documentsListFilterPage.summery.textContent()).split(' ')[5];
  await test.expect(totalRec.toString()).toEqual(rec);
});
test('Test Document List Filter Page Back to All Categories functionalty for Resedentail,@TR-16472, @BackToAllCatForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForTimeout(5000);
  await documentsListFilterPage.firstDocTypeFilter.click();
  await page.waitForTimeout(10000);
  await test.expect(documentsListFilterPage.backToAllCategories).toBeVisible();
  await test.expect(documentsListFilterPage.filterButtons.first()).toBeVisible();
  await test.expect(documentsListFilterPage.filterButtons.nth(1)).toBeVisible();
  await documentsListFilterPage.filterButtons.first().click();
  await test.expect(documentsListFilterPage.backToAllCategories).not.toBeVisible();
  await documentsListFilterPage.firstDocTypeFilter.click();
  await documentsListFilterPage.filterButtons.nth(1).click();
  await test.expect(documentsListFilterPage.backToAllCategories).not.toBeVisible();
});
test('Test Document List Filter Page Filters diaply along with clear all filter for Resedentail,@TR-16473, @ClearAllFilterForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForLoadState("domcontentloaded");
  await documentsListFilterPage.englishLanguageChkBox.click();
  await page.waitForLoadState('domcontentloaded'); 
  await documentsListFilterPage.spanishLanguageChkBox.click();
  await page.waitForLoadState('domcontentloaded');
  test.expect(await documentsListFilterPage.filterButtons.first().textContent()).toEqual("Clear All Filters");
  test.expect(await documentsListFilterPage.filterButtons.nth(1).textContent()).toEqual("English");
  test.expect(await documentsListFilterPage.filterButtons.nth(2).textContent()).toEqual("French");
});
test('Test Document List Filter Page Doc type filter count for Resedentail,@TR-16474, @DocTypeFilterCountForRes, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  const docType=await documentsListFilterPage.firstDocTypeFilter.textContent();
  await documentsListFilterPage.firstDocTypeFilter.click();
  await page.waitForTimeout(5000);
  await page.waitForLoadState('domcontentloaded');
  for(let i=0;i<await documentsListFilterPage.docTypeNameForEachDoc.count();i++){
    test.expect(await documentsListFilterPage.docTypeNameForEachDoc.nth(i).textContent()).toEqual(docType);
  }
});
test('Test Document List Filter Page Pagination for Resedentail, @TR-16475,@PaginationForRes,@Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.resedentialTab.click();
  await page.waitForLoadState("domcontentloaded");
  await test.expect(documentsListFilterPage.pagination).toBeVisible();
  for(let i=0;i<await documentsListFilterPage.paginationBetweenPages.count();i++){
    await test.expect(documentsListFilterPage.paginationBetweenPages.nth(i)).toBeVisible();
    await documentsListFilterPage.paginationBetweenPages.nth(i).click();
    if(i==0){
      await test.expect(documentsListFilterPage.paginationPrevBtn).toBeDisabled();
      await test.expect(documentsListFilterPage.paginationNextBtn).toBeEnabled();
    }
    if(i==1 && i<=await documentsListFilterPage.paginationBetweenPages.count()-2){
      await test.expect(documentsListFilterPage.paginationPrevBtn).toBeEnabled();
      await test.expect(documentsListFilterPage.paginationNextBtn).toBeEnabled();
    }
    if(i==await documentsListFilterPage.paginationBetweenPages.count()-1){
      await test.expect(documentsListFilterPage.paginationPrevBtn).toBeEnabled();
      await test.expect(documentsListFilterPage.paginationNextBtn).toBeDisabled();
    }
  }
});
test('Test Document List Filter Page Summery display and Count match check at both places for Commercial,@TR-16476, @DocListFilSummDisForComm, @Regression1', async ({documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  test.expect(documentsListFilterPage.summery.isVisible()).toBeTruthy();
  const rec=(await documentsListFilterPage.summery.textContent()).split(' ')[5];
  const engfilescount=await documentsListFilterPage.totalEnglishFiles.textContent();
  const spanishfilescount=await documentsListFilterPage.totalSpanishFiles.textContent();
  await test.expect(rec).toContain((parseInt(engfilescount)+parseInt(spanishfilescount)).toString());
});
test('Test Document List Filter Page SortBy Drodown display and items for Commercial,@TR-16477, @DocListFilSortByDisplayForComm, @Regression1', async ({documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  test.expect(documentsListFilterPage.sortByDropdown.isVisible()).toBeTruthy();
  test.expect(documentsListFilterPage.sortByDropdown.isVisible()).toBeTruthy();
  await test.expect(documentsListFilterPage.sortByDropdown).toHaveValue('Most Relevance');
  await documentsListFilterPage.sortByDropdown.selectOption("Name A-Z");
  await test.expect(documentsListFilterPage.sortByDropdown).toHaveValue('Name A-Z');
  await documentsListFilterPage.sortByDropdown.selectOption("Name Z-A");
  await test.expect(documentsListFilterPage.sortByDropdown).toHaveValue('Name Z-A');
});
test('Test Document List Filter Page View  Drodown display and items for Commercial,@TR-16478, @DocListFilViewDisplayForComm, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await page.waitForLoadState("networkidle");
  test.expect(documentsListFilterPage.viewDropdown.isVisible()).toBeTruthy();
  await test.expect(documentsListFilterPage.viewDropdown).toHaveValue('20');
  test.expect((await documentsListFilterPage.containerList.count())).toEqual(parseInt("20"));
  await documentsListFilterPage.viewDropdown.selectOption("50 per page");
  await test.expect(documentsListFilterPage.viewDropdown).toHaveValue('50');
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(10000);
  test.expect((await documentsListFilterPage.containerList.count())).toEqual(parseInt("50"));
  await documentsListFilterPage.viewDropdown.selectOption("100 per page");
  await test.expect(documentsListFilterPage.viewDropdown).toHaveValue('100');
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(10000);
  test.expect((await documentsListFilterPage.containerList.count())).toEqual(parseInt("100"));
});
test('Test Document List Filter Page SortBy Drodown files sorting type check for Commercial,@TR-16479, @DocListSortingForComm, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await page.waitForLoadState("domcontentloaded");
  await documentsListFilterPage.sortByDropdown.selectOption('Name A-Z');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(5000);
  let sortList=[];
  let sortRevList=[];
  for(let i=0;i<await documentsListFilterPage.containerList.count();i++){
    sortList.push(await documentsListFilterPage.containerList.nth(i).textContent());
  }
  let tempsortList=sortList.sort();
  JSON.stringify(sortList)==JSON.stringify(tempsortList)? test.expect(true).toBeTruthy(): test.expect(true).toBeFalsy();
  await documentsListFilterPage.sortByDropdown.selectOption('Name Z-A');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(5000);
  for(let i=0;i<await documentsListFilterPage.containerList.count();i++){
    sortRevList.push(await documentsListFilterPage.containerList.nth(i).textContent());
  }
  let temprevsortList=sortRevList.sort().reverse();
  JSON.stringify(sortRevList)==JSON.stringify(temprevsortList)? test.expect(true).toBeTruthy(): test.expect(true).toBeFalsy();
});
test('Test Document List Filter Page Language Filters display and Expand Check for Commercial,@TR-16480, @DocListLangFilDisForComm, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await page.waitForLoadState("domcontentloaded");
  test.expect(documentsListFilterPage.languageFilter.isVisible()).toBeTruthy();
  test.expect(await documentsListFilterPage.languageFilter).toHaveAttribute("aria-expanded","true");
  await documentsListFilterPage.languageFilter.click();
  await page.waitForTimeout(3000);
  test.expect(await documentsListFilterPage.languageFilter).toHaveAttribute("aria-expanded","false");
});
test('Test Document List Filter Page Document Type Filter Display and Expand Check and Show more check for Commercial, @TR-16481,@DocListDocTypeFilDisForComm, @Regression1', async ({documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  test.expect(documentsListFilterPage.documentFilter.isVisible()).toBeTruthy();
  test.expect(await documentsListFilterPage.documentFilter).toHaveAttribute("aria-expanded","true");
  if(await documentsListFilterPage.showMoreFilter.isVisible()){
    await documentsListFilterPage.showMoreFilter.click();
    await test.expect(documentsListFilterPage.showLessFilter).toBeVisible();
  }
  await documentsListFilterPage.documentFilter.click();
  test.expect(await documentsListFilterPage.documentFilter).toHaveAttribute("aria-expanded","false");
});
test('Test Document List Filter Page Search Options Display and functionality for Commercial,@TR-16482, @DocListSearchForComm, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await page.waitForLoadState("domcontentloaded");
  test.expect(documentsListFilterPage.searchInput.isVisible()).toBeTruthy();
  test.expect(documentsListFilterPage.searchLensIcon.isVisible()).toBeTruthy();
  await documentsListFilterPage.searchInput.fill("7 Key Danger Signals - RESKD100");
  test.expect(documentsListFilterPage.clearSearchIcon.isVisible()).toBeTruthy();
  await page.waitForTimeout(5000);
  await documentsListFilterPage.searchLensIcon.click();
  await page.waitForTimeout(5000);
  test.expect((await documentsListFilterPage.containerList.count())).toBeGreaterThanOrEqual(0);
})
test('Test Document List Filter Page records count after applying language filter for Commercial,@TR-16483, @LanFilterDocCountForComm, @Regression1', async ({documentsListFilterPage , page}) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.englishLanguageChkBox.click();
  await page.waitForTimeout(10000);
  await page.waitForLoadState('domcontentloaded');
  const engFilesCount=(await documentsListFilterPage.totalEnglishFiles.textContent()).split(' ')[0];
  const rec=(await documentsListFilterPage.summery.textContent()).split(' ')[5];
  await test.expect(rec).toEqual(engFilesCount);
});
test('Test Document List Filter Page records count after applying doc type  filter for Commercial,@TR-16484, @DocTypeFilterDocCountForComm, @Regression12', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.firstDocTypeFilter.click();
  await page.waitForLoadState('domcontentloaded');
  const engFilesCount=await documentsListFilterPage.totalEnglishFiles.textContent();
  const spanFilesCount=await documentsListFilterPage.totalSpanishFiles.textContent();
  const totalRec=parseInt(engFilesCount)+parseInt(spanFilesCount);
  const rec=(await documentsListFilterPage.summery.textContent()).split(' ')[5];
  await test.expect(totalRec.toString()).toEqual(rec);
});
test('Test Document List Filter Page Back to All Categories functionalty for Commercial,@TR-16485, @BackToAllCatForComm, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await page.waitForTimeout(5000);
  await documentsListFilterPage.firstDocTypeFilter.click();
  await page.waitForTimeout(10000);
  await test.expect(documentsListFilterPage.backToAllCategories).toBeVisible();
  await test.expect(documentsListFilterPage.filterButtons.first()).toBeVisible();
  await test.expect(documentsListFilterPage.filterButtons.nth(1)).toBeVisible();
  await documentsListFilterPage.filterButtons.first().click();
  await test.expect(documentsListFilterPage.backToAllCategories).not.toBeVisible();
  await documentsListFilterPage.firstDocTypeFilter.click();
  await documentsListFilterPage.filterButtons.nth(1).click();
  await test.expect(documentsListFilterPage.backToAllCategories).not.toBeVisible();
});
test('Test Document List Filter Page Filters diaply along with clear all filter for Commercial,@TR-16486, @ClearAllFilterForComm, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await documentsListFilterPage.englishLanguageChkBox.click();
  await page.waitForLoadState('domcontentloaded'); 
  await documentsListFilterPage.spanishLanguageChkBox.click();
  await page.waitForLoadState('domcontentloaded');
  test.expect(await documentsListFilterPage.filterButtons.first().textContent()).toEqual("Clear All Filters");
  test.expect(await documentsListFilterPage.filterButtons.nth(1).textContent()).toEqual("English");
  test.expect(await documentsListFilterPage.filterButtons.nth(2).textContent()).toEqual("Spanish");
});
test('Test Document List Filter Page Doc type filter count for Commercial,@TR-16487, @DocTypeFilterCountForComm, @Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  const docType=await documentsListFilterPage.firstDocTypeFilter.textContent();
  await documentsListFilterPage.firstDocTypeFilter.click();
  await page.waitForTimeout(5000);
  await page.waitForLoadState('domcontentloaded');
  for(let i=0;i<await documentsListFilterPage.docTypeNameForEachDoc.count();i++){
    test.expect(await documentsListFilterPage.docTypeNameForEachDoc.nth(i).textContent()).toEqual(docType);
  }
});
test('Test Document List Filter Page Pagination for Commercial, @TR-16488,@PaginationForComm,@Regression1', async ({page,documentsListFilterPage }) => {
  await documentsListFilterPage.summery.waitFor({state:"visible"});
  await page.waitForLoadState("domcontentloaded");
  await test.expect(documentsListFilterPage.pagination).toBeVisible();
  for(let i=0;i<await documentsListFilterPage.paginationBetweenPages.count();i++){
    await test.expect(documentsListFilterPage.paginationBetweenPages.nth(i)).toBeVisible();
    await documentsListFilterPage.paginationBetweenPages.nth(i).click();
    if(i==0){
      await test.expect(documentsListFilterPage.paginationPrevBtn).toBeDisabled();
      await test.expect(documentsListFilterPage.paginationNextBtn).toBeEnabled();
    }
    if(i==1 && i<=await documentsListFilterPage.paginationBetweenPages.count()-2){
      await test.expect(documentsListFilterPage.paginationPrevBtn).toBeEnabled();
      await test.expect(documentsListFilterPage.paginationNextBtn).toBeEnabled();
    }
    if(i==await documentsListFilterPage.paginationBetweenPages.count()-1){
      await test.expect(documentsListFilterPage.paginationPrevBtn).toBeEnabled();
      await test.expect(documentsListFilterPage.paginationNextBtn).toBeDisabled();
    }
  }
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
