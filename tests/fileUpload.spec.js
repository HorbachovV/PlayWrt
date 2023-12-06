const { test, expect } = require('@playwright/test');

// npx playwright test fileUpload.spec.js --project=chromium --headed --debug


test.skip('Single file', async ({ page }) => {

    await page.goto('https://www.foundit.in/'); 

    await page.waitForSelector('.mqfihd-upload');
    await page.locator('.mqfihd-upload').click();

    await page.locator('#file-upload').setInputFiles('uploadfiles/File_1.pdf');
    
    await page.waitForTimeout(5000);
});

test('Multiple file', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php'); 

    await page.locator('#filesToUpload').setInputFiles(['uploadfiles/File_1.pdf', 'uploadfiles/File_2.pdf']);

    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('File_1.pdf');
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('File_2.pdf');

    await page.waitForTimeout(3000);

    //removing files
    await page.locator('#filesToUpload').setInputFiles([]);
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
    
    await page.waitForTimeout(5000);
});