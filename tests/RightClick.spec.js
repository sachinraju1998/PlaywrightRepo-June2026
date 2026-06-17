import {test,expect} from '@playwright/test'

test("Right click", async ({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    // await page.locator("//span[text()='right click me']").click({button: 'right'})

    const button=await page.locator("//span[text()='right click me']")

     await button.click({button:'right'})
    await button.click({button:'left'})
    await button.click({button:'middle'})

    await page.waitForTimeout(2000)

    await page.close()

})