const {test, expect} = require('@playwright/test');

// npx playwright test softAssertions.spec.js --project=chromium --headed --debug

test('Soft aseertions', async ( {page} ) => {
    
    await page.goto("https://demoblaze.com/");

    // await expect(page).toHaveTitle("STORE");
    // await expect(page).toHaveURL("https://demoblaze.com/");
    // await expect(page.locator(".navbar-brand")).toBeVisible();

    await expect.soft(page).toHaveTitle("STOR");
    await expect(page).toHaveURL("https://demoblaze.com/");
    await expect(page.locator(".navbar-brand")).toBeVisible()

});