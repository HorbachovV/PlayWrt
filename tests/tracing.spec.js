const {test, expect} = require('@playwright/test');

// npx playwright test tracing.spec.js --project=chromium --headed --debug

test('Tracing test', async ( {page} ) => {
    
    await page.goto("https://demoblaze.com/");

    await page.getByRole('link', {name: 'Log in'}).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', {name: 'Log in'}).click();
    await expect(page.locator('#logout2')).toBeVisible();

});

// to see trace use  npx playwright show-report and click icon view trace
/*
use: {
    Base URL to use in actions like `await page.goto('/')`. 
    baseURL: 'http://127.0.0.1:3000',

    Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer 


    >>> trace: 'on',<<<
  },
*/