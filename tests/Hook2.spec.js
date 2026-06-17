import {test,expect} from '@playwright/test'

let page;

test.beforeEach(async ({browser})=>{
    page = await browser.newPage()

     // login
    await page.goto("https://www.demoblaze.com/")
    await page.click("//a[@id='login2']")
    await page.fill("//input[@id='loginusername']","pavanol")
    await page.fill("//input[@id='loginpassword']", "test@123")
    await page.click("//button[normalize-space()='Log in']")

})

test.afterEach(async ()=>{
     //logout
     await page.click("(//a[normalize-space()='Log out'])[1]")
})



test("Home page", async ()=>{

    //validate the no of product are there
    const products=await page.$$("//div[@id='tbodyid']/descendant::h4/a")

     await expect(products).toHaveLength(9)
})


test("Add to Cart", async ()=>{

    //validate the no of product are there
   await page.click("//div[@id='tbodyid']/descendant::h4[1]/a")
   await page.click("//a[normalize-space()='Add to cart']")

   await page.on('dialog', async dailog=>{
        console.log( await dailog.type())
        await expect(dailog.message()).toContain("Product added.")
        await dailog.accept()
   })

})