import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";
import { PlanDesignPage } from '../src/pageFactory/PlanDesignPage';

test('Verify Roofing section, @ProductionHealth, @TR-114', async ({ page, planDesignPage }) => {
  await page.goto('/');
  await planDesignPage.PlanDesignPage_Btn.click();
   await test.expect(planDesignPage.pageSummary, 'Plan Design Page summary should be visible ').toBeVisible()  
});