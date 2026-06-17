const {test,expect} = require ("@playwright/test")

test("Alert handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // we need to handle before alert pop up  explicitly using Dailog window handler
    // handling is not mandatory by deafult playwright will handle the popup's
    await page.on("dialog", async (dailog)=>{
        console.log(await dailog.type())
        await dailog.accept()
        // await dailog.dismiss()
        // await dailog.defaultValue()
     
    })

    await page.click("//button[@id='alertBtn']")

    await page.fill("//input[@id='email']", "Sachin Raj")

    await page.waitForTimeout(2000)

    await page.close()
})