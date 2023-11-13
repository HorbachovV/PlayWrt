const {test, expect} = require('@playwright/test')

// npx playwright test multipleLocators.spec.js --project=chromium --headed --debug

test("Locate multiple elements", async ( {page} ) => {

    await page.goto("https://demoblaze.com/");

    await page.locator("id=login2").click()
    // await page.click("id=login2")

    await page.locator("#loginusername").fill("pavanol")
    // await page.fill("#loginusername", "pavanol")

    await page.locator("input[id='loginpassword']").fill("test@123")
    // await page.fill("input[id='loginpassword']", "test@123")

    await page.click("//button[normalize-space()='Log in']")

    const logOutLink = await page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logOutLink).toBeVisible();

    // const links = await page.$$("a")

    // for (const link of links) {
    //    const linkText =  await link.textContent()
    //    console.log(linkText);
    // }

    const products = await page.$$("//div[@id='tbodyid']//div//h4//a")

    for (const product of products) {

        const productName = await product.textContent();
        console.log(productName)
    }


    await page.close()

})