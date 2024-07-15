import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";

test('Verify Roofing section, @ProductionHealth, @TR-113', async ({ page, buildingMaterialPage }) => {
  await page.goto('/');
  await buildingMaterialPage.BuildingMaterialPage_Btn.click()
   await test.expect(buildingMaterialPage.pageSummary, 'Building Material Page summary should be visible ').toBeVisible()  
});