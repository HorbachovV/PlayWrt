const { test, expect } = require('@playwright/test');

// npx playwright test screenshots.spec.js --project=chromium --headed --debug


test('Page screenshots', async ({ page }) => {

    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path: '\PlayWrt\screenshots' + Date.now() + 'Homepage.png'})
});

test('Full Page screenshots', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path: '\PlayWrt\screenshots' + Date.now() + 'FullHomepage.png', fullPage: true})
    
});

test.only('Element screenshots', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    await page.locator('//*[@id="content"]/div[2]/div[1]/form').screenshot({path: '\PlayWrt\screenshots' + Date.now() + 'Element.png'})
    
});


/*
video recording and screenshots
playwright.config

use: {
    Base URL to use in actions like `await page.goto('/')`.
    //baseURL: 'http://127.0.0.1:3000',

    //Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer 
    //trace: 'on-first-retry',
  //},
  screenshot: 'on' , 'only-on-failure',
  video: 'on'

*/