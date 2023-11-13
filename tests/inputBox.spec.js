const {test, expect} = require('@playwright/test');

// npx playwright test inputBox.spec.js --project=chromium --headed --debug

test('Input box', async ( {page} ) => {
    
    await page.goto("https://itera-qa.azurewebsites.net/home/automation");

    await expect(await page.locator("//input[@id='name'")).toBeVisible();
    await expect(await page.locator("//input[@id='name'")).toBeEmpty();
    await expect(await page.locator("//input[@id='name'")).toBeEditable();
    await expect(await page.locator("//input[@id='name'")).toBeEnabled();

    await page.fill("//input[@id='name'", "John");
    await page.waitForTimeout(5000);
});