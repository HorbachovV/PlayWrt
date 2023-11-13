const {test, expect} = require('@playwright/test');

// npx playwright test asertions.spec.js --project=chromium --headed --debug

test('Assertions test', async ( {page} ) => {
    
    await page.goto("https://demo.nopcommerce.com/register");

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    const logo = await page.locator(".header-logo");
    await expect(logo).toBeVisible();

    const searchBox = await page.locator("#small-searchterms");
    await expect(searchBox).toBeEnabled();
    // await expect(searchBox).toBeDisabled();

    const maleRadioButton = await page.locator("#gender-male");
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    const newsLetterCheckbox = await page.locator("#Newsletter");
    await expect(newsLetterCheckbox).toBeChecked();

    const regButton = await page.locator("#register-button");
    await expect(regButton).toHaveAttribute("type", "submit");

    await expect(await page.locator(".page-title h1")).toHaveText("Register");
    await expect(await page.locator(".page-title h1")).toContainText("Regist");

    const emailInput = await page.locator("#Email");
    await emailInput.fill("test@demo.com");
    await expect(emailInput).toHaveValue("test@demo.com");

    const options = await page.locator("select[name='DateOfBirthMonth'] option");
    await expect(options).toHaveCount(13);

});