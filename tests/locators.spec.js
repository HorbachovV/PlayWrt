const {test, expect} = require('@playwright/test')

// npx playwright test locators.spec.js --project=chromium --headed --debug

test("Locators", async ( {page} ) => {

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

    // await page.close()

})