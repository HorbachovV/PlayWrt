const {test, expect} = require('@playwright/test')

// npx playwright test reporter.spec.js --project=chromium --headed --debug
// allure generate my-allure-results -o allure-report --clean
// allure open allure-report

test('TEST 1', async ( {page} ) => {
    
    await page.goto("https://demoblaze.com/");
    await expect(page).toHaveTitle("STORE");
});

test('TEST 2', async ( {page} ) => {
    
    await page.goto("https://demo.opencart.com/");
    await expect(page).toHaveTitle("Your Store");
});


/* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'list',
  // reporter: 'html',
  // reporter: "allure-playwright",
  // reporter: 'dot',
  // reporter: [['json', { outputFile: 'results.json' }]],