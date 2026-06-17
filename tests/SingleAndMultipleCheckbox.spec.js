import {test, expect} from '@playwright/test'

test("Single and Multiple checkbox handling", async ({page})=>{
    //handling the single check box

    await page.goto("https://www.testmuai.com/selenium-playground/checkbox-demo/?utm_source=chatgpt.com")

    await page.locator("//label[text()='Click on check box']/input").check()
    // await page.check("//label[text()='Click on check box']/input")

    // validation
    await expect(await page.locator("//label[text()='Click on check box']/input")).toBeChecked()
    await expect(await page.locator("//label[text()='Click on check box']/input").isChecked()).toBeTruthy()
    await page.waitForTimeout(2000)
    await page.locator("//label[text()='Click on check box']/input").uncheck()
    await page.waitForTimeout(2000)
    await expect(await page.locator("//label[text()='Click on check box']/input").isChecked()).toBeFalsy()
    
    //waiting statement
    await page.waitForTimeout(2000)

    //handling multiple check box

    let checkboxes=[
        "//input[@type='checkbox' and @name='option1' ]",
        "//input[@type='checkbox' and @name='option4' ]"
    ]


    //check the boxes
    for (const checks of checkboxes){
        await page.waitForTimeout(1000)
        await page.check(checks)
        expect (await page.check(checks)).toBeChecked()
    }

    //check the boxes which are slected
     for(const checks of checkboxes){
        await page.waitForTimeout(1000)
        if(await page.locator(checks).isChecked()){
            await page.uncheck(checks)
        }
     }
     await page.waitForTimeout(1000)

     await page.close()

})
