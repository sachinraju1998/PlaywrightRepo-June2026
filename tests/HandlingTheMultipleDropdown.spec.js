import {test, expect} from '@playwright/test'

test("Multiple dropdown", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    console.log(await page.url())
    await page.waitForTimeout(5000)
    //check the options using text
    // await page.locator("[id=colors]").selectOption(['Red','Blue','Yellow'])

    // await page.waitForTimeout(5000)
    // await page.locator("[id=colors]").selectOption(['Red','Blue','Yellow'])

    //check the no of option in dropdown
    const count = await page.locator("[id=colors] option")
    await expect(count).toHaveCount(7)

    //here it'll return the array
    const count2= await page.$$("[id=colors] option")
    await expect(count2.length).toBe(7)
    await page.waitForTimeout(2000)

    //validate passed text is available in dropdown & it'll return the array
    const content = await page.locator("[id=colors]").textContent()
    console.log(content)
    await expect(content.includes("Red")).toBeTruthy()

    await page.close()
})