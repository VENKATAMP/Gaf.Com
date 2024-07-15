import { Locator, Page, BrowserContext, Frame, ElementHandle } from "@playwright/test"



export class WebActions {
  readonly page: Page;
  readonly context: BrowserContext | undefined;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  async delay(time: number): Promise<void> {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }

  async clickByText(text: string): Promise<void> {
    await this.page.getByText(text, { exact: true }).click();  //Matches locator with exact text and clicks
  }

  async clickElementJS(locator: string): Promise<void> {
    await this.page.$eval(locator, (element: HTMLElement) => element.click());
  }



  //

  async scrollDown(page: Page, pixels: number) {
    await page.evaluate((pixelsToScroll) => {
      window.scrollBy(0, pixelsToScroll);
    }, pixels);
  }

  async scrollToElement(page: Page, selector: string): Promise<ElementHandle<SVGElement | HTMLElement>> {
    const element = await page.$(selector);
    if (!element) {
      throw new Error(`Unable to find element with selector: ${selector}`);
    }
    await element.scrollIntoViewIfNeeded();
    return element;
  }

  async switchToNewWindow(context: BrowserContext): Promise<Page> {
    const newPage = await context.waitForEvent('page');
    await newPage.bringToFront();
    return newPage;
  }

  async findElements(selector: string, page: Page): Promise<ElementHandle[]> {
    try {
      const elements = await page.$$(selector);
      return elements;
    } catch (error) {
      throw new Error(`Unable to find elements with locator: ${selector}`);
    }
  }


  async switchToFrameBySelector(page: Page, selector: string): Promise<Frame | null> {
    const frameElement = await page.$(selector);
    if (frameElement) {
      const frame = await frameElement.contentFrame();
      if (frame) {
        await page.bringToFront();
        await frame.waitForLoadState();
        await page.waitForSelector(selector);
        await page.waitForTimeout(500);
        await frame.focus("");
        return frame;
      }
    }
    return null;
  }

  async switchToFrameByName(page: Page, name: string): Promise<Frame> {
    const frame = page.frame({ name });
    if (!frame) {
      throw new Error(`Frame with name "${name}" not found.`);
    }
    await frame.waitForLoadState();
    return frame;
  }


  async verifyPageTitle(page: Page, expectedTitleName: string): Promise<boolean> {
    const actualTitle = await page.title();
    if (actualTitle === expectedTitleName) {
      console.log('Page title is correct!');
      return true;
    } else {
      console.error(`Expected page title to be "${expectedTitleName}", but it was "${actualTitle}"`);
      return false;
    }
  }

  async getElementText(page: Page, locatorForElement: string): Promise<string> {
    const element = await page.locator(locatorForElement);
    const textOfTheElement = await element.innerText();
    return textOfTheElement;
  }



  async verifyIfUserLoggedInto(page: Page, expectedProfile: string): Promise<void> {
    const currentBox = await page.locator('(//span[@c-uppaccountswitcher_uppaccountswitcher])[last()]').textContent();
    if (currentBox !== null && currentBox.trim() !== expectedProfile) {
      console.log(currentBox.trim());
      const switcher = await page.locator('//span[@class="accSwitcherText"]');
      await switcher.click();
      await page.getByRole('menuitem', { name: expectedProfile }).click();
    }
  }


  async loginIntoThePortal(page: Page, username: any, password: any) {
    await page.locator('//*[@id="idp-discovery-username"]').fill(username);
    await page.getByText('Remember me').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.locator('//*[@id="okta-signin-submit"]').click();
  }


  async clickOnRightMenu(page: Page) {
    await page.waitForSelector('//span[@class="userNameText slds-truncate"]', { timeout: 60000 });
    await page.locator('//span[@class="userNameText slds-truncate"]').click();
  }


  async menuOptionIsVisible(page: Page, optionName: string): Promise<boolean> {
    try {
      await page.waitForSelector(`//span[@class="slds-truncate" and text()="${optionName}"]`, { state: 'visible', timeout: 10000 });
      console.log(optionName + " is the visible menu option in a right upper corner");
      return true;
    } catch (TimeoutError) {
      console.log(optionName + " is NOT the option in a menu");
      return false;
    }
  }


  async clickFromLeftMenuOn(page: Page, optionName: string): Promise<void> {
    if (optionName === "GAF Support" || optionName === "Warranty Management") {
      await page.waitForSelector(`//span[text()="${optionName}"]`);
      await page.getByTitle(optionName).click();
    } else {
      await page.waitForSelector(`//a[text()="${optionName}"]`);
      await page.getByRole('link', { name: `${optionName}` }).click();
    }
  }


  async And_Click_Next_Btn(page: Page) {
    const nextBtn = await page.$(`//span[@class=' label bBody'][normalize-space()='Next']`);
    nextBtn?.click();
    await page.waitForSelector("//button[@name='SaveEdit']", { state: 'visible', timeout: 60000 });
}


  async waitForSwitcherToBeVisible(page: Page): Promise<void> {
    await page.waitForSelector('//span[@class="accSwitcherText"]', { timeout: 60000 });
  }


  async verifyIfButtonIsVisible(page: Page, buttonName: string): Promise<boolean> {
    try {
      await page.waitForSelector(`//a[text()="${buttonName}"]`, { state: 'visible', timeout: 60000 });
      console.log(buttonName + " button is visible on the page!");
      return true;
    } catch (TimeoutError) {
      console.log(buttonName + " button is NOT visible on the page!");
      return false;
    }
  }


  async verifyIfDesignationLogoIsVisible(page: Page): Promise<boolean> {
    try {
      await page.waitForSelector(`//div[contains(@class,'banner')]//img[contains(@class,'designation-logo')]`, { state: 'visible', timeout: 30000 });
      console.log("Designation Logo is visible on the page!");
      return true;
    } catch (TimeoutError) {
      console.log("Designation Logo is NOT visible on the page!");
      return false;
    }
  }



  
}
