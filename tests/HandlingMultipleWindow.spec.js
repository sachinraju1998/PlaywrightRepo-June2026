import {test, expect, chromium} from '@playwright/test'

//we have to import specific brower module where we have to perform the action

// test("Handling the multiple pages", async()=>{

//     const browser=await chromium.launch()
//     const context= await browser.newContext()

//     const page1 = await context.newPage()
//     const page2 = await context.newPage()

//     await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await expect(page1).toHaveTitle("OrangeHRM")

//     await page2.goto("https://orangehrm.com/")
//     await expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

//     await page1.close()
//     await page2.close()
// })

test("Handling the multiple pages", async()=>{

    //1st we have to launch the browser
    const browser=await chromium.launch()

    //2nd we have to create new context
    const context= await browser.newContext()

    //3rd we have to create the page
    const page1 = await context.newPage()
    
    //4th using created newpage reference variable we can call the methods and perform the action on web
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    //5th we have call waitForEvent() method to create new tab
    const pagePromise =context.waitForEvent('page')

    //6th now we have to click the click where it'll open in newtab or new window
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    //7th we have to wait for the link to open in new tab or promise to completed and using this reference variable we can access the all the methods which are in page fixture
    const newPage= await pagePromise;
    
    await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

    await newPage.waitForTimeout(3000)

    await newPage.close()
    await page1.close()
  
})
