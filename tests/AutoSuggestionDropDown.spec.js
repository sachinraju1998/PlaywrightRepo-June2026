import {test, expect} from '@playwright/test'

test("Handling the auto suggestion dropdown", async ({page})=>{

    await page.goto("https://www.redbus.in/");

    //click on trian tickets image
    await page.click("//span[text()='Train tickets']")

    // await page.waitForSelector("[id=rails-search-widget-source]")

    await page.click("//div[@class='inputAndSwapWrapper___474a53']/div")

    //filling the data in from text field
    await page.locator("[id=src-search-input]").fill("Delhi")

    await page.waitForTimeout(2000)

    await page.waitForSelector("//div[contains(@class,'listHeader')]")

    //print all the option and select requires option
    const options=await page.$$("//div[contains(@class,'listHeader')]")

    for(let value of options){
        // console.log(await value.textContent())

        const text = await value.textContent()
        if(text.includes("Anand Vihar")){
            await value.click()
            break;
        }
    }

    await page.waitForTimeout(2000)

})