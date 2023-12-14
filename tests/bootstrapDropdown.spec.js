const {test, expect} = require('@playwright/test');

// npx playwright test bootstrapDropdown.spec.js --project=chromium --headed --debug

test('bootstrap dropdown', async ( {page} ) => {
    
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
    await page.locator(".multiselect").click();
    
    // const options = await page.locator("ul>li label input");
    // await expect(options).toHaveCount(11);

    // const options = await page.$$("ul>li label input");
    // await expect(options.length).toBe(11);
    
    // const options = await page.$$("ul>li label");
    // for (let option of options) {
    //     const value = await option.textContent();
    //     console.log("Value is: ", value);

    //     if (value.includes("Angular") || value.includes("Java")) {
    //         await option.click();
    //     }
    // }

    const options = await page.locator("ul>li label").all()
    for (let option of options) {

        const value = await option.textContent();
        console.log("Value is: ", value);

        if (value.includes("Angular") || value.includes("Java")) {
            await option.click();
        }
    }


    await page.waitForTimeout(5000);
});