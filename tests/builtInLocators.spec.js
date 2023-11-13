const {test, expect} = require('@playwright/test')

// npx playwright test builtInLocators.spec.js --project=chromium --headed --debug
// npx playwright codegen --help

test('Built in Locators', async ( {page} ) => {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const logo = await page.getByAltText("company-branding");
    await expect(logo).toBeVisible();

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    await page.getByRole('button', {tupe: "submit"}).click();

    const userName = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(userName)).toBeVisible();
});