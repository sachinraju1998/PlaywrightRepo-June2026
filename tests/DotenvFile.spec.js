import {test,expect} from '@playwright/test'

test("dotenv file data checking", async ({page})=>{

    console.log(process.env.URL)
})