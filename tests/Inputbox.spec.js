import {test, expect} from '@playwright/test'

test("Handling the input box", async ({page})=>{

    //launch the brower
    await page.goto("https://parabank.parasoft.com/parabank/index.htm?utm_source=chatgpt.com")
    console.log(`Sucessfully logged to : ${await page.url()}`)

    //validate the inputbox in diff ways
    const firstnameBox=await page.locator("[name=username]")

    await expect (firstnameBox).toBeVisible()
    await expect (firstnameBox).toBeEmpty()
    await expect (firstnameBox).toBeEditable()
    await expect (firstnameBox).toBeEnabled()

    await firstnameBox.fill("Sachin Raj")

    //waiting statement
    await page.waitForTimeout(3000)

    //close the browser
    await page.close()

})