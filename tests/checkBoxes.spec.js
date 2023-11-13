const {test, expect} = require('@playwright/test');

// npx playwright test checkBoxes.spec.js --project=chromium --headed --debug

test('Checkboxes', async ( {page} ) => {
    
    await page.goto("https://itera-qa.azurewebsites.net/home/automation");

    await page.locator("//input[@id='monday' and @type='checkbox']").check();

    await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();


    const multiplyCheckBoxes = ["//input[@id='monday' and @type='checkbox']", "//input[@id='sunday' and @type='checkbox']", "//input[@id='saturday' and @type='checkbox']"];

    for (const locator of multiplyCheckBoxes) {
        await page.locator(locator).check();// select multiple checkboxes
    }
    await page.waitForTimeout(5000);

    for (const locator of multiplyCheckBoxes) {

        if(await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();// diselect multiple checkboxes
        }
        
    }

    await page.waitForTimeout(5000);
});