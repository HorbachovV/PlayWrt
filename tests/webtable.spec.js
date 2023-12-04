// @ts-check
const { test, expect } = require('@playwright/test');

// npx playwright test webtable.spec.js --project=chromium --headed --debug


test('Web tables', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator("#productTable");
    const columns = await table.locator("thead tr th");
    console.log("Number of columns:", await columns.count());

    const rows = await table.locator("tbody tr");
    console.log("Number of rows:", await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    const machedRow = rows.filter({
        has: page.locator("td"),
        hasText: "Product 4"
    })
    await machedRow.locator("input").check();

    await selectProduct(rows, page, "Product 1");
    await selectProduct(rows, page, "Product 3");
    await selectProduct(rows, page, "Product 5");

    for (let i = 0; i < await rows.count(); i++) {

        const row = rows.nth(i);
        const tds = row.locator("td");

        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent());
        }
    }

    const pages = await page.locator('.pagination li a');
    console.log('Number of pages:', await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        if(p > 0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i < await rows.count(); i++) {

            const row = rows.nth(i);
            const tds = row.locator("td");
    
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    }

    await page.waitForTimeout(3000)
});



async function selectProduct (rows, page, name) {
    const machedRow = rows.filter({
        has: page.locator("td"),
        hasText: name
    })
    await machedRow.locator("input").check();
}