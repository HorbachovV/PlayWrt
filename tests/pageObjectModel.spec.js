const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

// npx playwright test pageObjectModel.spec.js --project=chromium --headed --debug


test('Page Object Model', async ({ page }) => {

    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol', 'test@123')

    //Home
    const home = new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotoCart();

    //Cart
    const cart = new CartPage(page);
    const status = await cart.checkProductInCart("Nexus 6");
    expect(await status).toBe(true);

});