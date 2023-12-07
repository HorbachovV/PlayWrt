const { test, expect } = require('@playwright/test');

// npx playwright test before_after_grouping.spec.js --project=chromium --headed --debug

test.beforeAll(async ()=> {
    console.log('Before all Hook');
})

test.afterAll(async ()=> {
    console.log('After all Hook');
})

test.beforeEach(async ()=> {
    console.log('Before each Hook');
})

test.afterEach(async ()=> {
    console.log('After each Hook');
})

test.describe('Group 1', () => {
    test('Test1', async ({ page }) => {

        console.log('TEST 1');
    });
    
    test('Test2', async ({ page }) => {
    
        console.log('TEST 2');
    });
})

test.describe('Group 2', () => {
    test('Test3', async ({ page }) => {

        console.log('TEST 3');
    });
    test('Test4', async ({ page }) => {
    
        console.log('TEST 4');
    });
})


