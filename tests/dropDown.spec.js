const {test, expect} = require('@playwright/test');
const exp = require('constants');

// npx playwright test dropDown.spec.js --project=chromium --headed --debug

test('Drop Down', async ( {page} ) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator("#country").selectOption({label: "India"});
    // await page.locator("#country").selectOption({value: "India"});
    // await page.locator("#country").selectOption({index: 1});
    // await page.locator("#country").selectOption("India");

    // const options = await page.locator("#country option");
    // await expect(options).toHaveCount(10);

    // const options = await page.$$("#country option");
    // await expect(options.length).toBe(10);

    // const content = await page.locator("#country").textContent();
    // await expect(content.includes("India")).toBeTruthy();

    // const options = await page.$$("#country option");
    // let status = false;

    // for (const option of options) {

    //     let value = await option.textContent();

    //     if (value.includes('France')) {
    //         status = true;
    //         break;
    //     }
    // }
    // await expect(status).toBeTruthy();


    const options = await page.$$("#country option");
    

    for (const option of options) {

        let value = await option.textContent();

        if (value.includes('France')) {
            await page.selectOption("#country", value)
            break;
        }
    }


    // await page.waitForTimeout(5000);
});