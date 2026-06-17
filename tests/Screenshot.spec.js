import {test, expect} from '@playwright/test'

test("Page screenshot", async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")
    await page.screenshot({path:'Screenshots/'+Date.now()+'PageScreenshot.png'})

})

test("Full page screenshot", async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.screenshot({path:'Screenshots/'+Date.now()+'fullpage.png',fullPage:true})
})

test("Particular element screenshot", async ({page})=>{
     await page.goto("https://www.demoblaze.com/index.html")
     await page.locator("//a[@id='login2']").screenshot({path:'Screenshots/'+Date.now()+'Element.png'})
})