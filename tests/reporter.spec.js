const {test, expect} = require('@playwright/test')

// npx playwright test reporter.spec.js --project=chromium --headed --debug

test('TEST 1', async ( {page} ) => {
    
    await page.goto("https://demoblaze.com/");
    await expect(page).toHaveTitle("STORE");
});

test('TEST 2', async ( {page} ) => {
    
    await page.goto("https://demo.opencart.com/");
    await expect(page).toHaveTitle("Your Store");
});
