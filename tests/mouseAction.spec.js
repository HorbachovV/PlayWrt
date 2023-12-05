const { test, expect } = require('@playwright/test');

// npx playwright test mouseAction.spec.js --project=chromium --headed --debug


test.skip('Mouse hover', async ({ page }) => {

    await page.goto('https://demo.opencart.com/'); 

    const desktop = await page.locator('//a[normalize-space()="Desktops"]');
    const mac = await page.locator('//a[normalize-space()="Mac (1)"]');

    await desktop.hover();
    await mac.hover();
    
    await page.waitForTimeout(3000)
});

test.skip('Mouse right click', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html'); 

    const button = await page.locator('//span[normalize-space()="right click me"]');
    await button.click({button: 'right'});
    
    await page.waitForTimeout(3000)
});

test.skip('Mouse double click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/'); 

    const copyButton = await page.locator('//button[normalize-space()="Copy Text"]');
    await copyButton.dblclick();
    
    const field2 = await page.locator('#field2');
    await expect(field2).toHaveValue('Hello World!');

    await page.waitForTimeout(3000)
});

test('Mouse drag and drop', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html'); 

    const rome = await page.locator('#box6');
    const italy = await page.locator('#box106');

    // approach 1
    await rome.hover();
    await page.mouse.down();

    await italy.hover();
    await page.mouse.up();

    //approach 2

    await rome.dragTo(italy);

    await page.waitForTimeout(3000)
});