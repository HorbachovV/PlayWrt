const {test, expect, chromium} = require('@playwright/test')

// npx playwright test homePage.spec.js --project=chromium --headed --debug

test('Home Page', async ({ page }) => {
    
    await page.goto('https://demoblaze.com/');

    const pageTitle = page.title();
    console.log('Page title: ', pageTitle);

    await expect(page).toHaveTitle("STORE");
    await expect(page).toHaveURL("https://demoblaze.com/")

    await page.close();
});