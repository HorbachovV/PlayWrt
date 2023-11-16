const {test, expect} = require('@playwright/test');

// npx playwright test autosuggest.spec.js --project=chromium --headed --debug

test('bootstrap dropdown', async ( {page} ) => {
    
    await page.goto("https://www.redbus.in/");

    await page.locator("#src").fill("Delhi");
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    const fromCityOption = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    for (let option of fromCityOption) {

        const value = await option.textContent();
        console.log(value);

        if (value.includes("Delhi")) {
            
            await option.click();
            break;
        }

    }
   

    await page.waitForTimeout(5000);
});