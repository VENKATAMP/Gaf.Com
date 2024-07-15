const { test, expect } = require('@playwright/test');

test('title validation', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await page.title();
  await expect(page).toHaveTitle("GreenKart - veg and fruits kart");

  await page.locator(".search-keyword").pressSequentially("cau");
  const product = await page.locator(".products .product");
  await page.waitForTimeout(2000);
  const productName = await product.locator(".product-name").textContent();
  console.log(productName);
  if(productName === "Cauliflower - 1 Kg")
  {
    await product.locator("button").click();
  }
  await page.locator(".cart-icon").click();
  await page.locator(".cart-preview button").click();

  await page.waitForTimeout(2000);
  const CheckoutProductName = await page.locator("p.product-name").textContent();
  console.log(CheckoutProductName);
  await expect(productName).toEqual(CheckoutProductName);

  const productPrice = await page.locator("p.amount").nth(0).textContent();
  console.log(productPrice);
  const productsTotalPrice = await page.locator("p.amount").nth(1).textContent();
  console.log(productsTotalPrice);
  await expect(productPrice).toEqual(productsTotalPrice);

  await page.locator("text=Place Order").click();
  const logoText = await page.locator("div.brand").textContent();
  console.log(logoText);
  await expect(logoText).toEqual("GREENKART");

  await page.locator("select").selectOption("India");
  await page.locator(".chkAgree").check();
  await page.locator("text=Proceed").click();
  // await page.pause();
  const ThankYouText = await page.locator("body div[id='root'] div[class='container'] div[class='products-wrapper'] div[class='products'] div[class='wrapperTwo'] span:nth-child(1)").textContent();
  console.log(ThankYouText);
  await page.locator("body div[id='root'] div[class='container'] div[class='products-wrapper'] div[class='products'] div[class='wrapperTwo'] span:nth-child(1)").isVisible();

});

test('Select from multiple Products', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  const Products = page.locator(".products div.product")
  await Products.last().waitFor();
  const ProductsText = await Products.locator(".product-name").allTextContents();
  console.log(ProductsText);

  const ProductsCount = await Products.count();
  console.log(ProductsCount);

  for(let i=0; i<ProductsCount; ++i)
  {
    if(await Products.nth(i).locator(".product-name").textContent() === "Grapes - 1 Kg")
    {
      await Products.nth(i).locator("button").click();
      break
    }
  }
  // await page.pause();

});
