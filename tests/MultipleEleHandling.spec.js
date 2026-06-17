import {test, expect} from '@playwright/test'

test("Handling multiple elements", async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    // await page.waitForSelector("a")

    // //print all the links present in the page
    // const links = await page.$$("a")

    // for(const link of links){
    //     const text=await link.textContent()
    //     console.log(text)
    // }

    // //print length of links
    // console.log(links.length)


    await page.waitForSelector("//div[@id='tbodyid']/descendant::h4")
    //print all the models in a page
    const modelNames= await page.$$("//div[@id='tbodyid']/descendant::h4")

    for(const model of modelNames){
        const modelText= await model.textContent()
        console.log(modelText)

    }
    console.log(modelNames.length)
})