import {test, expect} from '@playwright/test'

test.fail("Test 1", async ({page})=>{

    console.log("This is test 1")

})
test.only("Test 2", async ({page})=>{

    console.log("This is test 2")

})
test("Test 3", async ({page})=>{

        console.log("This is test 3")
})
test("Test 4", async ({page})=>{
 console.log("This is test 4")
})
test("Test 5", async ({page})=>{
console.log("This is test 5")
})