const {test, expect} = require ("@playwright/test")

test("Home Page login",async ({page})=>{

    //launching the browser
    await page.goto("https://www.demoblaze.com/index.html")

    //fetching the title of the page
    const title = await page.title();
    console.log("Title of the page is: "+ title)

    const url= await page.url();
    console.log("Page url id : "+url)

    //validating the title of the page
    await expect(page).toHaveTitle("STORE")
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html")

    //closing the browser
    await page.close()    

})