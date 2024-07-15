import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env"
import { afterEachHooks } from 'gafone';

test.beforeEach(async ({page}) =>{
  await page.goto('/');
});


test('Verify Blogs under Resources Tab for PROD, @VerifyBlogs, @Regression, @TR-16993', async ({ page, resourcesPage }) => {
   await resourcesPage.ResourcesPage_Btn.click();
   await resourcesPage.blogLink.click();
   await test.expect(resourcesPage.blogPageSummary, 'GAF RoofViews Blog').toBeVisible();
   await resourcesPage.mashHeadCardContent.waitFor({state:"visible"});
   await resourcesPage.mashHeadCardContent.hover();
   await test.expect(resourcesPage.mashHeadCardContent).toHaveCSS('cursor','auto');
   //Validating the Mashhead Carousel
   await resourcesPage.mashHeadCarousel.first().scrollIntoViewIfNeeded();
   for(let i=0; i<await resourcesPage.mashHeadCarousel.count();i++){
      //await resourcesPage.mashHeadCarousel.nth(i).click();
      await resourcesPage.mashHeadCarousel.nth(i).hover();
      await test.expect(resourcesPage.mashHeadCarousel.nth(i)).toHaveCSS('cursor','pointer');
     }
    // Validate related Article Card
    await resourcesPage.relatedArticleCard.first().scrollIntoViewIfNeeded();
    for(let i=0; i<await resourcesPage.relatedArticleCard.count();i++){
       //await resourcesPage.relatedArticleCard.nth(i).click();
       await resourcesPage.relatedArticleCard.nth(i).hover();
       await test.expect(resourcesPage.relatedArticleCard.nth(i)).toHaveCSS('cursor','pointer');
      }
   }
);