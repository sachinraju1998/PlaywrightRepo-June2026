import {test,expect} from '@playwright/test'

test("handling window", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const [newPage] = await Promise.all([
         page.waitForEvent('popup'),
         page.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    ])

    await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

    await newPage.waitForTimeout(3000)

    await newPage.close()
    await page.close()
    
})


// page.waitForEvent('popup') //"Start listening for any new tab/window that opens from this page."

//page.waitForEvent('popup')
// Because Playwright was already listening:
// captures the newly opened tab and returns its Page object.

// const [newPage] // Promise.all() returns an array.
//page.waitForEvent('popup') returns the newly opened Page object.




 //below is the way we have to handle multiple window's or tab

// const [tab1] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('#link1').click()
// ]);

// const [tab2] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('#link2').click()
// ]);

// const [tab3] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('#link3').click()
// ]);