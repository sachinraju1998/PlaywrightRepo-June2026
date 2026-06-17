const {test,expect} = require("@playwright/test")

test("Test1@smoke",async ({page})=>{
    console.log("Test 1............!")
})

test("Test2@smoke",async ({page})=>{
    console.log("Test 2............!")
})

test("Test3@reg",async ({page})=>{
    // test.fail()
    console.log("Test 3............!")
})

//Playwright plugin will give the built in reporters like html, json, junit, dot, json
// we can add that in config file or else through cmd we can generate the report which we want by using below cmd's
// npx playwright test Reporter.spec.js --reporter=dot
// npx playwright test Reporter.spec.js --reporter=json
// npx playwright test Reporter.spec.js --reporter=html
//npx playwright test Reporter.spec.js --reporter=line
// npx playwright test Reporter.spec.js --reporter=junit