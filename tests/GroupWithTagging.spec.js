
import {test,expect} from "@playwright/test"

test.describe("Test 1@smoke",async ()=>{
      test("Test 1", async()=>{
        console.log("Test1")
    })
})

test.describe("Test 2@reg",async ()=>{
     test("Test 2", async()=>{
        console.log("Test2")
    })
})

test.describe("Test 3@smoke@reg",async ()=>{
     test("Test 3", async()=>{
        console.log("Test3")
    })
})