import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";

test.beforeEach(async ({page}) =>{
  await page.goto('/');
});

test('Verify Roofing section, @ProductionHealth, @TR-112', async ({ page, roofingGafPage }) => {
  await roofingGafPage.RoofingPage_Btn.click()
  await test.expect(roofingGafPage.alertRoman, 'Alert test').toBeVisible()
  await test.expect(roofingGafPage.pageSummary, 'Roofing summary should be visible ').toBeVisible()  
  await roofingGafPage.findContractor.hover()
});


test('Test Residential Roofing - Card Overlay in PROD ,@TR-17005, @CardOverlay, @Regression', async ({page, roofingGafPage, homePage }) => {
  await roofingGafPage.roofingMaterials_Btn.click();
  await roofingGafPage.residentialRoofingMaterials_lnk.click();
  await homePage.cardOverlay.first().scrollIntoViewIfNeeded();
  for(let i=0; i<await homePage.cardOverlay.count();i++){
    await homePage.cardOverlay.nth(i).click();
    if( i==0){
      await test.expect(page.url()).toContain("shingles");
      await page.waitForTimeout(2000);
    await page.goBack();
  }
   else if( i==1){
    await test.expect(page.url()).toContain("leak-barriers");
    await page.waitForTimeout(2000);
   await page.goBack();
  }
   else if( i==2){
    await test.expect(page.url()).toContain("hip-and-ridge-cap-shingles");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
   else if( i==3){
    await test.expect(page.url()).toContain("roof-deck-protection");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
   else if( i==4){
    await test.expect(page.url()).toContain("starter-strip-shingles");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
   else if( i==5){
    await test.expect(page.url()).toContain("attic-vents-other-ventilation");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
   else if( i==6){
    await test.expect(page.url()).toContain("residential-roll-roofing-products");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
   else if( i==7){
    await test.expect(page.url()).toContain("rooftop-accessories");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
  }
});


test('Test Commerical Roofing - Card row in PROD ,@TR-17006, @CardRow, @Regression', async ({page, roofingGafPage, homePage }) => {
  await roofingGafPage.roofingMaterials_Btn.click();
  await roofingGafPage.commercialRoofingMaterials_lnk.click();
  await homePage.cardRow.first().scrollIntoViewIfNeeded();
  for(let i=0; i<await homePage.cardRow.count();i++){
    await homePage.cardRow.nth(i).click();
    if( i==0){
      await test.expect(page.url()).toContain("commercial-roofing-materials/tpo-membranes");
      await page.waitForTimeout(2000);
    await page.goBack();
  }
   else if( i==1){
    await test.expect(page.url()).toContain("commercial-roofing-materials/pvc-membranes");
    await page.waitForTimeout(2000);
   await page.goBack();
  }
   else if( i==2){
    await test.expect(page.url()).toContain("commercial-roofing-materials/coatings");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
   else if( i==3){
    await test.expect(page.url()).toContain("commercial-roofing-materials/asphaltic-membranes");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
   else if( i==4){
    await test.expect(page.url()).toContain("commercial-roofing-materials/insulation");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
   else if( i==5){
    await test.expect(page.url()).toContain("commercial-roofing-materials/cover-boards");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
   else if( i==6){
    await test.expect(page.url()).toContain("commercial-roofing-materials/roofing-adhesives");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
   else if( i==7){
    await test.expect(page.url()).toContain("commercial-roofing-materials/cleaners-primers-sealants-cement");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
  }
});