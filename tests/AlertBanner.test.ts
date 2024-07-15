import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";
import { AlertBannerPage } from '../src/pageFactory/AlertBanner';

test('Verify Roofing section, @ProductionHealth, @TR-111', async ({ page, alertBannerPage }) => {
  await page.goto('/');
  await test.expect(alertBannerPage.bannerTitle, 'Alert Button tiltle should be visible ').toBeVisible()
  await test.expect(alertBannerPage.pageDescription, 'Alert Button Description should be visible').toBeVisible() 
});