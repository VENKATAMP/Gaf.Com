import { TIMEOUT } from 'dns';
import test from '../src/lib/BaseTest'
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';
import * as steps from '../src/stepDefinitions/gafSteps';

test.beforeEach(async ({page}) =>{
  await page.goto('/');
});

test('Test Footer Social Media FB Icon ,@TR-16311, @FBIcon,@CA, @Regression', async ({ context, homePage }) => {
  await homePage.facebookIcon.scrollIntoViewIfNeeded();
  const [newWindow]=await Promise.all([
    context.waitForEvent("page"),
    await homePage.facebookIcon.click()
  ])
  await test.expect(newWindow).toHaveURL('https://www.facebook.com/');
  await newWindow.close();
});
test('Test Footer Social Media LinkedIn Icon ,@TR-16312, @LnkdIcon,@Fail,@Regression', async ({ homePage, context }) => {
  await homePage.linkedInIcon.scrollIntoViewIfNeeded();
  const [newWindow]=await Promise.all([
    context.waitForEvent("page"),
    await homePage.linkedInIcon.click()
  ])
  await test.expect(newWindow).toHaveURL('https://www.linkedin.com/');
  await newWindow.close();
});
test('Test Footer Social Media Twiter Icon  ,@TR-16313, @TtrIcon,@Fail,@Regression', async ({ context, homePage }) => {
  await homePage.twitterIcon.scrollIntoViewIfNeeded();
  const [newWindow]=await Promise.all([
    context.waitForEvent("page"),
    await homePage.twitterIcon.click()
  ])
  await test.expect(newWindow).toHaveURL('https://twitter.com/');
  await newWindow.close();
});
test('Test Footer Social Media Insta Icon  ,@TR-16314, @InstaIcon,@Fail,@Regression', async ({homePage, context }) => {
  await homePage.instagramIcon.scrollIntoViewIfNeeded();
  const [newWindow]=await Promise.all([
    context.waitForEvent("page"),
    await homePage.instagramIcon.click()
  ])
  await test.expect(newWindow).toHaveURL('https://www.instagram.com/');
  await newWindow.close();
});
test('Test Footer Social Media Youtube Icon  ,@TR-16315, @YTIcon,@Fail, @Regression', async ({ context, homePage }) => {
  await homePage.youTubeIcon.scrollIntoViewIfNeeded();
  const [newWindow]=await Promise.all([
    context.waitForEvent("page"),
    await homePage.youTubeIcon.click()
  ])
  await test.expect(newWindow).toHaveURL('https://www.youtube.com/');
  await newWindow.close();
});
test('Test Footer Logo Size , @TR-16316,@FLogoSize, @Fail,@Regression', async ({homePage }) => {
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.logoAtFooterLevel.waitFor({state:"visible"});
  let width=await homePage.logoAtFooterLevel.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('width')
  );
  let height=await homePage.logoAtFooterLevel.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('height')
  );
  test.expect(width.split('px')[0]).toEqual('168');
  test.expect(height.split('px')[0]).toEqual('100'); 
});
test('Test Footer Logo Click Action ,@TR-16317, @FLogoClick, @Fail,@Regression', async ({  page,homePage }) => {
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.logoAtFooterLevel.waitFor({state:"visible"});
  let screenHeightBefore=await homePage.logoAtFooterLevel.evaluate(()=>
          window.scrollY
  );
  await homePage.logoAtFooterLevel.click();
  await page.waitForTimeout(2000);
  await homePage.logoAtHeaderLevel.waitFor({state:"visible"});
  let screenHeightAfter=await homePage.logoAtFooterLevel.evaluate(()=>
    window.scrollY
  );
  test.expect(screenHeightBefore).toBeGreaterThan(screenHeightAfter);
});
test('Test Footer Logo Hover Action ,TR-16318 @FLogoHover, @Fail,@Regression', async ({  homePage }) => {
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.logoAtFooterLevel.waitFor({state:"visible"});
  await homePage.logoAtFooterLevel.hover();
  await test.expect(homePage.logoAtFooterLevel).toHaveCSS('cursor','pointer');
});
test('Test Social Network Logos Size ,@TR-16319, @SNLogos, @Fail', async ({  homePage }) => {
  let width;
  let height
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.logoAtFooterLevel.waitFor({state:"visible"});
  width=await homePage.facebookIcon.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('width')
  );
  height=await homePage.facebookIcon.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('height')
  );
  test.expect(width.split('px')[0]).toEqual('20');
  test.expect(height.split('px')[0]).toEqual('20'); 
  width=await homePage.twitterIcon.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('width')
  );
  height=await homePage.twitterIcon.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('height')
  );
  test.expect(width.split('px')[0]).toEqual('20');
  test.expect(height.split('px')[0]).toEqual('20'); 
  width=await homePage.linkedInIcon.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('width')
  );
  height=await homePage.linkedInIcon.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('height')
  );
  test.expect(width.split('px')[0]).toEqual('20');
  test.expect(height.split('px')[0]).toEqual('20'); 
  width=await homePage.instagramIcon.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('width')
  );
  height=await homePage.instagramIcon.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('height')
  );
  test.expect(width.split('px')[0]).toEqual('20');
  test.expect(height.split('px')[0]).toEqual('20'); 
  width=await homePage.youTubeIcon.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('width')
  );
  height=await homePage.youTubeIcon.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('height')
  );
  test.expect(width.split('px')[0]).toEqual('20');
  test.expect(height.split('px')[0]).toEqual('20');   
});
test('Test Social Network Hover Actions ,@TR-16320, @SNLogoHover, @Fail,@Regression', async ({  homePage }) => {
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.logoAtFooterLevel.waitFor({state:"visible"});
  await homePage.facebookIcon.hover({force:true});
  test.expect(homePage.facebookIcon).toHaveCSS('cursor','pointer');
  await homePage.youTubeIcon.hover({force:true});
  test.expect(homePage.youTubeIcon).toHaveCSS('cursor','pointer');
  await homePage.twitterIcon.hover({force:true});
  test.expect(homePage.twitterIcon).toHaveCSS('cursor','pointer');
  await homePage.instagramIcon.hover({force:true});
  test.expect(homePage.instagramIcon).toHaveCSS('cursor','pointer');
  await homePage.linkedInIcon.hover({force:true});
  test.expect(homePage.linkedInIcon).toHaveCSS('cursor','pointer');
  
});
test('Test Header Logo Size ,@TR-16321, @HLogoSize, @Fail', async ({homePage }) => {
  await homePage.logoAtHeaderLevel.scrollIntoViewIfNeeded();
  await homePage.logoAtHeaderLevel.waitFor({state:"visible"});
  let width=await homePage.logoAtHeaderLevel.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('width')
  );
  let height=await homePage.logoAtHeaderLevel.evaluate((element)=>
    window.getComputedStyle(element).getPropertyValue('height')
  );
  test.expect(width.split('px')[0]).toEqual('168');
  test.expect(height.split('px')[0]).toEqual('100'); 
});
test('Test Header Logo Hover Action ,@TR-16322, @HLogoHover, @Fail,@Regression', async ({ homePage }) => {
  await homePage.logoAtHeaderLevel.waitFor({state:"visible"});
  await homePage.logoAtHeaderLevel.hover();
  await test.expect(homePage.logoAtHeaderLevel).toHaveCSS('cursor','pointer');
});
test('Test Footer copyWright , @TR-16323,@FooterCopyWright, @CA,@RegressionP', async ({  homePage }) => {
  await test.expect(homePage.footerCopyWrightLabel).toContainText('GAF');
});
test('Test Footer Naviagtion heading links ,@TR-16324, @FooterNavHeadings,@Fail, @RegressionP', async ({ homePage }) => {
  await test.expect(homePage.footerHeadingTheCompanyHeading).toContainText('The Company');
  await test.expect(homePage.footerHeadingWorkWithUsHeading).toContainText('Work With Us');
  await test.expect(homePage.footerHeadingQuickLinksHeading).toContainText('Quick Links');
  await test.expect(homePage.footerHeadingRelatedBusinessHeading).toContainText('Related Businesses');
  await test.expect(homePage.footerHeadingTheCompanyHeading).toHaveCSS('border-bottom-color','rgb(183, 183, 183)');
  await test.expect(homePage.footerHeadingWorkWithUsHeading).toHaveCSS('border-bottom-color','rgb(183, 183, 183)');
  await test.expect(homePage.footerHeadingQuickLinksHeading).toHaveCSS('border-bottom-color','rgb(183, 183, 183)');
  await test.expect(homePage.footerHeadingRelatedBusinessHeading).toHaveCSS('border-bottom-color','rgb(183, 183, 183)');
  await test.expect(homePage.footerHeadingTheCompanyHeading).toHaveCSS('font-size','14px');
  await test.expect(homePage.footerHeadingWorkWithUsHeading).toHaveCSS('font-size','14px');
  await test.expect(homePage.footerHeadingQuickLinksHeading).toHaveCSS('font-size','14px');
  await test.expect(homePage.footerHeadingRelatedBusinessHeading).toHaveCSS('font-size','14px');
});
test('Test The company Sublinks,@TR-16325, @TheCompanySubLinks,@Fail, @Regression', async ({ page, context,homePage }) => {
  await homePage.aboutGafSubLink.click()
  await test.expect(page.url()).toContain("https");
  await page.goBack();
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.historySubLink.click()
  await test.expect(page.url()).toContain("https");
  await page.goBack();
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.innovationSubLink.click()
  await test.expect(page.url()).toContain("https");
  await page.goBack();
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  const [newWindow]=await Promise.all([
    context.waitForEvent("page"),
    await homePage.leadershipSubLink.click()
  ])
  await test.expect(page.url()).toContain("https");
  await newWindow.close();
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.standardIndustriesSubLink.click()
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.sustainabilitySubLink.click()
});
test('Test Work with us Sublinks,@TR-16326, @WorkWithUsSubLinks, @Fail,@Regression', async ({ page, homePage }) => {
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();  
  await homePage.careersAtGafSubLink.click()
  await test.expect(page.url()).toContain("https");
  await page.goBack();
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.ourCultureSubLink.click()
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.searchJobsSubLink.click()
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.studentsAndEarlyCareersSubLink.click()
});
test('Test Quick Links Sublinks, @TR-16327,@QuickLinksSubLinks, @Fail,@Regression', async ({ page, homePage }) => {
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.blogSubLink.click()
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.contactUsSubLink.click()
  await homePage.logoAtFooterLevel.scrollIntoViewIfNeeded();
  await homePage.newsAndPressReleasesSubLink.click()
});
test('Test Related Business Sublinks,@TR-16328, @RelBusSubLinks, @CA,@Regression', async ({ page, homePage }) => {
  await homePage.siplastUsSubLink.click()
  await test.expect(page.url()).toContain("https");
  await page.goBack();
  await homePage.standardLogisticsSubLink.click()
});
test('Test Primary Navigation Tabs,@TR-16329, @PriNavTabs,@Fail, @RegressionP', async ({  homePage }) => {
  await test.expect(homePage.roofingMaterialsTab).toContainText('Roofing Materials');
  await test.expect(homePage.buildingMaterialsAndOwnersTab).toContainText('Building Materials');
  await test.expect(homePage.planAndDesignTab).toContainText('Plan and Design');
  await test.expect(homePage.forProsTab).toContainText('For Pros');
  await test.expect(homePage.resourcesTab).toContainText('Resources');
});
test('Test Roofing Materials Tab Expand ,@TR-16330, @RoofingTabExpand,@CA, @RegressionP', async ({  homePage }) => {
  await homePage.roofingMaterialsTab.click();
  await test.expect(homePage.roofingMaterialsTab).toHaveAttribute('aria-expanded','true')
});
test('Test Building Materials Tab Expand ,@TR-16331, @BuildingMatTabExpand, @CA,@RegressionP', async ({  homePage }) => {
  await homePage.buildingMaterialsAndOwnersTab.click();
  await test.expect(homePage.buildingMaterialsAndOwnersTab).toHaveAttribute('aria-expanded','true')
});
test('Test Plan and Design Tab Expand ,@TR-16332, @PlanDesignTabExpand, @CA,@RegressionP', async ({  homePage }) => {
  await homePage.planAndDesignTab.click();
  await test.expect(homePage.planAndDesignTab).toHaveAttribute('aria-expanded','true')
});
test('Test For Pros Tab Expand ,@TR-16333, @ForProsTabExpand, @CA,@RegressionP', async ({  homePage }) => {
  await homePage.forProsTab.click();
  await test.expect(homePage.forProsTab).toHaveAttribute('aria-expanded','true')
});
test('Test Resources Tab Expand ,@TR-16334, @ResourcesTabExpand, @CA,@RegressionP', async ({  homePage }) => {
  await homePage.resourcesTab.click();
  await test.expect(homePage.resourcesTab).toHaveAttribute('aria-expanded','true')
});
test('Test Roofing Materials Tab Underline Check ,@TR-16335, @RoofingTabUnderline, @Fail', async ({  homePage }) => {
  await homePage.roofingMaterialsTab.hover();
  await test.expect(homePage.roofingMaterialsTab).toHaveCSS('text-decoration-line','underline');
});
test('Test Building Materials Tab Underline Check , @TR-16336,@BuildingMaterialsTabUnderline, @Fail', async ({  homePage }) => {
  await homePage.buildingMaterialsAndOwnersTab.hover();
  await test.expect(homePage.buildingMaterialsAndOwnersTab).toHaveCSS('text-decoration-line','underline');
});
test('Test Plan Design Tab Underline Check ,@TR-16337, @PlanDesignTabUnderline, @Fail', async ({  homePage }) => {
  await homePage.planAndDesignTab.hover();
  await test.expect(homePage.planAndDesignTab).toHaveCSS('text-decoration-line','underline');
});
test('Test For Pros Tab Underline Check ,@TR-16338, @ForProsTabUnderline, @Fail', async ({  homePage }) => {
  await homePage.forProsTab.hover();
  await test.expect(homePage.forProsTab).toHaveCSS('text-decoration-line','underline');
});
test('Test Resources Tab Underline Check ,@TR-16339, @ResourcesTabUnderline, @Fail', async ({  homePage }) => {
  await homePage.resourcesTab.hover();
  await test.expect(homePage.resourcesTab).toHaveCSS('text-decoration-line','underline');
});  
test('Test Find A contractor Hover Check ,@TR-16340, @FindContractorHover, @Fail', async ({ page,homePage }) => {
  await test.expect(homePage.findAContractor).toHaveCSS('background-color','rgb(215, 25, 32)');
  await homePage.findAContractor.hover();
  await page.waitForTimeout(200);
  await test.expect(homePage.findAContractor).toHaveCSS('background-color','rgb(255, 255, 255)');
}); 
test('Test Related Resources Links,@TR-16341, @RelResoucesLinks, @Fail,@Regression', async ({  homePage }) => {
  await homePage.forProsTab.click();
  await test.expect(homePage.forProsTab).toHaveAttribute('aria-expanded','true')
  await test.expect(homePage.relatedResourcesSection).toContainText('Related Resources');
  await test.expect(homePage.partnerPortalLoginLink).toContainText('Partner Portal Login');
  await test.expect(homePage.documentsLink).toContainText('Documents');
  await test.expect(homePage.findADistributorLink).toContainText('Find a Distributor');
  await test.expect(homePage.findARepLink).toContainText('Find a Rep');
});
test('Test Partner Portal Nav, @TR-16342,@ParPortalNav, @Fail,@Regression', async ({  context,homePage }) => {
  await homePage.forProsTab.click();
  const [newWindow]=await Promise.all([
    context.waitForEvent("page"),
    await homePage.partnerPortalLoginLink.click()
  ]);
  await test.expect(newWindow).toHaveURL('https://www.gaf.com/en-us');
  await newWindow.close(); 
});
test('Test Documents Nav, @TR-16343,@DocumentsNav,@Fail, @Regression', async ({  context,homePage }) => {
  await homePage.forProsTab.click();
  const [newWindow]=await Promise.all([
    context.waitForEvent("page"),
    await homePage.documentsLink.click()
  ]);
  await test.expect(newWindow.url()).toContain("https");
  await newWindow.close(); 
});
test('Test Find A Distributor Nav,@TR-16344, @FindDistNav, @Fail,@Regression', async ({  context,homePage }) => {
  await homePage.forProsTab.click();
  const [newWindow]=await Promise.all([
    context.waitForEvent("page"),
    await homePage.findADistributorLink.click()
  ]);
  await test.expect(newWindow.url()).toContain("https");
  await newWindow.close(); 
});
test('Test Find A Rep Nav, @TR-16345,@FindARepNav,@Fail, @Regression', async ({  context,homePage }) => {
  await homePage.forProsTab.click();
  const [newWindow]=await Promise.all([
    context.waitForEvent("page"),
    await homePage.findARepLink.click()
  ]);
  await test.expect(newWindow).toHaveURL('https://www.gaf.com/en-us/for-professionals/territory-managers');
  await newWindow.close(); 
});
test('Test Disclaimer Red Visibility ,@TR-16346, @DisRedDisplay, @Fail', async ({ homePage }) => {
  await homePage.disclaimerRed.scrollIntoViewIfNeeded();
  await test.expect(homePage.disclaimerRed).toBeVisible(); 
});
test('Test Disclaimer White Visibility ,@TR-16347, @DisWhiteDisplay, @Fail,@Regression', async ({  homePage }) => {
  await homePage.disclaimerWhite.scrollIntoViewIfNeeded();
  await test.expect(homePage.disclaimerWhite).toBeVisible();
});
test('Test Disclaimer Grey Visibility ,@TR-16348, @DisGreyDisplay,@Fail, @Regression', async ({  homePage }) => {
  await homePage.disclaimer.scrollIntoViewIfNeeded();
  await test.expect(homePage.disclaimer).toBeVisible();
});
test('Test Disclaimers Back Groung color  ,@TR-16349, @DisBG, @Fail', async ({  page,homePage }) => {
  await homePage.disclaimer.scrollIntoViewIfNeeded();
  await test.expect(homePage.disclaimer).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
  await page.waitForTimeout(200);
  await test.expect(homePage.disclaimerRed).toHaveCSS('background-color','rgb(215, 25, 32)');
  await page.waitForTimeout(200);
  await test.expect(homePage.disclaimerWhite).toHaveCSS('background-color','rgb(255, 255, 255)');
});
test('Test Link inside Disclaimers  ,@TR-16350, @LinkDis, @Fail', async ({  page,homePage }) => {
  await homePage.disclaimerRed.scrollIntoViewIfNeeded();
  const disRedHrefAttr=await homePage.disclaimerRedInSideLink.getAttribute('href');
  await test.expect(disRedHrefAttr).toContain("http");
  const disWhiteHrefAttr=await homePage.disclaimerWhiteInSideLink.getAttribute('href');
  await test.expect(disWhiteHrefAttr).toContain("http");
  const disHrefAttr=await homePage.disclaimerInSideLink.getAttribute('href');
  await test.expect(disHrefAttr).toContain("http");
});
test('Test Alert Banner Header Visibility ,@TR-16351, @AlertBanner,@Fail, @Regression', async ({  homePage }) => {
  await homePage.alertBannerHeadLine.scrollIntoViewIfNeeded();
  await test.expect(homePage.alertBannerHeadLine).toBeVisible();
});

test('Test Mashhead Validation in PROD ,@TR-16991, @MashHead, @Regression', async ({page, homePage }) => {
  await homePage.mashheadContent.first().scrollIntoViewIfNeeded();
  for(let i=0; i<await homePage.mashheadContent.count();i++){
    await homePage.mashheadContent.nth(i).click();
    if( i==0){
      await test.expect(page.url()).toContain("plan-design");
      await page.waitForTimeout(2000);
    await page.goBack();
  }
   else if( i==1){
    await test.expect(page.url()).toContain("contractors");
    await page.waitForTimeout(2000);
   await page.goBack();
  }
   else if( i==2){
    await test.expect(page.url()).toContain("architect-design-resources");
    await page.waitForTimeout(2000);
   await page.goBack();
   }
  else{
    await test.expect(page.url()).toContain("property-owners");
    await page.goBack();
  }
  }
});

test('Test Masonry-gallery in PROD ,@TR-16992, @MasonryGallery, @Regression', async ({page, homePage }) => {
  await homePage.MasonryGalleryContent.first().scrollIntoViewIfNeeded();
  for(let i=0; i<await homePage.MasonryGalleryContent.count();i++){
    await homePage.MasonryGalleryContent.nth(i).click();
    if( i==0){
      await test.expect(page.url()).toContain("roofing-materials/residential-roofing-materials");
      await page.waitForTimeout(2000);
      await page.goBack();
    }
      if( i==1){
        await test.expect(page.url()).toContain("architect-design-resources");
        await page.waitForTimeout(2000);
        await page.goBack();
    }
    if( i==3){
      await test.expect(page.url()).toContain("shingles/timberline-uhdz");
      await page.waitForTimeout(2000);
      await page.goBack();
    }
  }
});

test('Test Utility menu Hidden Functionlaity ,@TR-16351, @UtilMenuHidden, @Regression', async ({  homePage }) => {
  await homePage.findAContractor.first().scrollIntoViewIfNeeded();
  await test.expect(homePage.utilityNavigationMenu.first()).not.toBeFocused();
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


