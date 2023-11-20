const {test, expect} = require('@playwright/test');

// npx playwright test alert.spec.js --project=chromium --headed --debug

test.skip('Alert test', async ( {page} ) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    //First enable dialog window handler alert, prompt, confirm
    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })
    
    await page.click("//button[normalize-space()='Alert']");

});

test.skip('Confirmation test', async ( {page} ) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    //First enable dialog window handler alert, prompt, confirm
    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept(); // close by using OK button
        // await dialog.dismiss(); // close by using Cancel button
    })
    
    await page.click("//button[normalize-space()='Confirm Box']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')

});

test('Prompt test', async ( {page} ) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    //First enable dialog window handler alert, prompt, confirm
    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");

        await dialog.accept('John');
       
    })
    
    await page.click("//button[normalize-space()='Prompt']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');

});