import {test,expect} from '@playwright/test'

test("Handling dropdown using select box", async ({page})=>{

    //launching the browser
    await page.goto("https://testautomationpractice.blogspot.com/")

    //selcet using label
    await page.locator("[id=country]").selectOption({label:'India'})

    await page.waitForTimeout(2000)

    //using value
    await page.selectOption("[id=country]",{value:'brazil'})

    await page.waitForTimeout(2000)

    //using index
    await page.selectOption("[id=country]",{index:2})

    await page.waitForTimeout(2000)

    await page.close()


})