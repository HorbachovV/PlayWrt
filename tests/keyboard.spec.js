const { test, expect } = require('@playwright/test');

// npx playwright test keyboard.spec.js --project=chromium --headed --debug


test('Keyboard action', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare'); 

    // await page.locator('.gdpr-banner__button js-gdpr-banner__button').click()

    await page.locator('[name="text1"]').fill("welcome to automation");
    // await page.type('[name="text1"]', "welcome to automation");
    
    //Ctrl + A
    await page.keyboard.press('Control+A');
    //Ctrl + C
    await page.keyboard.press('Control+C');
    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    ////Ctrl + V
    await page.keyboard.press('Control+V');
    
    await page.waitForTimeout(5000);
});
