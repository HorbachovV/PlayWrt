const {test, expect} = require('@playwright/test');

// npx playwright test apitesting.spec.js --project=chromium --headed --debug

test('API testing: GET', async ( {request} ) => {
    
   const response = await request.get('https://reqres.in/api/users?page=2');

//    console.log(await response.json())
   expect(response.status()).toBe(200)

});

test.only('API testing: POST', async ( {request} ) => {

    const user = {
        "name": "morpheus",
        "job": "leader"
    }
    
    const response = await request.post('https://reqres.in/api/users', user);
    // console.log(await response.json())
    expect(response.status()).toBe(201)

    const userName = await response.json()
    console.log(userName)
    // expect(userName.name).toBe(user.name);
 
});

test('API testing: PUT', async ( {request} ) => {

const user = {
    "name": "QA",
    "job": "QA leader"
}

const response = await request.put('https://reqres.in/api/users/2', user);

// console.log(await response.json())
expect(response.status()).toBe(200)

});

test('API testing: DELETE', async ( {request} ) => {
    
    const response = await request.delete('https://reqres.in/api/users/2');
 
    expect(response.status()).toBe(204)
 
 });