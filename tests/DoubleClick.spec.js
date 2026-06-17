import {test,expect} from '@playwright/test'

test("Right click", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const field2= await page.locator("[id=field2]")

    await page.locator("//button[text()='Copy Text']").dblclick()

    await expect(field2).toHaveValue("Hello World!")

    await page.waitForTimeout(2000)

    await page.close()

})