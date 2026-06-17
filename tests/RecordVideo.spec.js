import {test,expect} from '@playwright/test'

test("Home page", async ({page})=>{

    // login
    await page.goto("https://www.demoblaze.com/")
    await page.click("//a[@id='login2']")
    await page.fill("//input[@id='loginusername']","pavanol")
    await page.fill("//input[@id='loginpassword']", "test@123")
    await page.click("//button[normalize-space()='Log in']")

    //validate the no of product are there
    const products=await page.$$("//div[@id='tbodyid']/descendant::h4/a")

     await expect(products).toHaveLength(9)

     //logout
     await page.click("(//a[normalize-space()='Log out'])[1]")


})