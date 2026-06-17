

import {test,expect} from '@playwright/test'

test("Upload file", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //handling the single files
    // await page.locator("[id=singleFileInput]").setInputFiles("Files/Genesis AI Agent Flow.pdf")


    //handling the multiple files
    await page.locator("[id=multipleFilesInput]").setInputFiles(["Files/Genesis AI Agent Flow.pdf","Files/Raddoctor AI Agent Flow.pdf"])

    await page.waitForTimeout(2000)

    await page.close()

})