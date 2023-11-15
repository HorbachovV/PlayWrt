const {test, expect} = require('@playwright/test');

// npx playwright test multiSelectDropdown.spec.js --project=chromium --headed --debug

test('multi dropdown', async ( {page} ) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.selectOption("#colors", ["Blue", "Red", "Yellow"]);

    const optins = await page.locator("#colors option");
    await expect(optins).toHaveCount(5);

    const content = await page.locator("#colors").textContent();
    await expect(content.includes("Blue")).toBeTruthy();

    await page.waitForTimeout(5000);
});