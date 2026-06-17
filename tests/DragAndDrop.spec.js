import {test,expect} from '@playwright/test'

test("Drag and drop", async ({page})=>{

    await page.goto("url")

    const src= await page.locator("src xpath")
    const des= await page.locator("des xpath")

    //below statement will going to drag to des from the src
    await src.dragTo(des)

    await page.waitForTimeout(2000)

    await page.close();
})