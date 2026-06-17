import {test,expect} from "@playwright/test"

test("Test1@smoke",async ({page})=>{
    console.log("Test 1............!")
})

test("Test2@smoke",async ({page})=>{
    console.log("Test 2............!")
})

test("Test3@reg",async ({page})=>{
    console.log("Test 3............!")
})

test("Test4@reg",async ({page})=>{
    console.log("Test 4............!")
})

test("Test5@smoke@reg",async ({page})=>{
    console.log("Test 5............!")
})

