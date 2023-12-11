const {test, expect} = require('@playwright/test');

// npx playwright test annotations.spec.js --project=chromium --headed --debug
// npx playwright test annotations.spec.js --ui

/*
test.only('Test 1', async ( {page} ) => { //@sanity is a tag
    
    console.log('This is my test 1');

});

test.skip('Test 2', async ( {page} ) => {
    
    console.log('This is my test 2');

});

test('Test 3', async ( {page, browserName} ) => {
    
    console.log('This is my test 3');

    if (browserName === 'chromium') {

        test.skip()
    }

});
*/
test.fixme('Test 4 ', async ( {page} ) => {
    
    console.log('This is my test 4');

});
test.fail('Test 5', async ( {page} ) => {
    
    console.log('This is my test 5');

});

test.slow('Test 6', async ( {page} ) => {
    
    console.log('This is my test 6');

});