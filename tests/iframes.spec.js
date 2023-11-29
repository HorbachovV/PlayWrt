const {test, expect, chromium} = require('@playwright/test')

// npx playwright test iframes.spec.js --project=chromium --headed --debug

test.skip('Iframe Page', async ({ page }) => {
    
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allFrames = await page.frames();
    console.log("Number of frames:", allFrames.length)

    //using url
    const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill("[name='mytext1']", "Hello");

    //using locator
    await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']").fill("Bye");

});

test('nested Iframe Page', async ({ page }) => {
    
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame3.locator("input[name='mytext3']").fill("Welcome");
   
    //nested frames
    const nestedFrames = await frame3.childFrames();
    await nestedFrames[0].locator("//div[@id='i5']//div[@class='AB7Lab Id5V1']").check();
    

});