const {test, expect} = require('@playwright/test')

//describe always represent the group

test.beforeAll(async({browser})=>{

    console.log("Before all")
})
test.afterAll(async()=>{
    console.log("After all")
    
})
test.beforeEach(async()=>{
    console.log("Before each")
})

test.afterEach(async()=>{
    console.log("After each")
})



test.describe.only("Group 1", async()=>{

    test("Test 1", async()=>{
        console.log("Test1")
    })

    test("Test 2", async()=>{
        console.log("Test2")
    })


})

test.describe("Group 2", async()=>{

    test("Test 3", async()=>{
        console.log("Test3")
    })

    test("Test 4", async()=>{
        console.log("Test4")
    })


})