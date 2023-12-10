const {test, expect} = require('@playwright/test');

// npx playwright test tags.spec.js --project=chromium --headed --debug
// npx playwright test tags.spec.js --project=chromium --headed --grep '@sanity'

test('Test 1 @sanity ', async ( {page} ) => { //@sanity is a tag
    
    console.log('This is my test 1');

});

test('Test 2 @sanity ', async ( {page} ) => {
    
    console.log('This is my test 2');

});

test('Test 3 @regression ', async ( {page} ) => {
    
    console.log('This is my test 3');

});

test('Test 4 @regression ', async ( {page} ) => {
    
    console.log('This is my test 4');

});
test('Test 5 @sanity@regression ', async ( {page} ) => {
    
    console.log('This is my test 5');

});