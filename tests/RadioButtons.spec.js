import {test, expect} from '@playwright/test'

test("Handling the radio buttons", async ({page})=>{

    await page.goto("https://demoqa.com/radio-button?utm_source=chatgpt.com")

    //check the checkbox
    await page.locator("[id=yesRadio]").check()
    // await page.check("[id=yesRadio]")

    //validating in diff way
    await expect(await page.locator("[id=yesRadio]")).toBeChecked()
    await expect(await page.locator("[id=yesRadio]").isChecked()).toBeTruthy()

    //checking the unchecked check box
    await expect (await page.locator("[id=impressiveRadio]").isChecked()).toBeFalsy()
})