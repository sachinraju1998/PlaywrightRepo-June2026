import {test, expect} from '@playwright/test'

test("Handling the single ele", async ({page})=>{

    //Triggering the url
    await page.goto("https://www.demoblaze.com/index.html")

    //click on login button using property
    await page.locator("id=login2").click()

    //enter username and password using fill using css and xpath

    //css
    // await page.fill("[id=loginusername]","pavanol")
    await page.locator("[id=loginusername]").fill("pavanol")
    //xpath
    await page.fill("//input[@id='loginpassword']","test@123")

    //click on login button
    await page.click("//button[text()='Log in']")

    //validate wheather the logout button is visible or not
    const logoutButton=await page.locator("//a[@id='logout2']")

     await expect(logoutButton).toBeVisible()

})