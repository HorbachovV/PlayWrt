const { test, expect } = require('@playwright/test');

// npx playwright test calendarpicker.spec.js --project=chromium --headed --debug


test('Date picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/'); 
    // await page.fill("#datepicker", "12/04/2024");

    const year = "2024";
    const month = "December";
    const day = "4";

    await page.locator("#datepicker").click();

    while (true) {

       const currentYear = await page.locator(".ui-datepicker-year").textContent();
       const currentMonth = await page.locator(".ui-datepicker-month").textContent();

       if (currentYear === year && currentMonth === month) {
            break;
       }
       await page.locator("[title='Next']").click();
    }

    const dates = await page.$$("//a[@class='ui-state-default']");

    for(let date of dates) {
        
        if (await date.textContent() === date) {
            await date.click();
            break;
        }
    }

    await page.waitForTimeout(3000)
});