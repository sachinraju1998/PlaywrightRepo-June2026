import {test,expect} from '@playwright/test'

test("Assertion Practice",async ({page})=>{

    //navigate to the page
    await page.goto("https://demo.nopcommerce.com/register")

    //validating the to have url
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    //valoidating the title
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    //to be visible
    const logo=await page.locator("//div[@class='header-logo']")
    await expect(logo).toBeVisible()

    //toBeEnabled
    const enabled= await page.locator("[id=small-searchterms]")
    await expect(enabled).toBeEnabled()

    //toBeChecked
    const checked=await page.locator("[id=NewsLetterSubscriptions_0__IsActive]")
    await expect(checked).toBeChecked()

    //toHaveAttribute
    const attribute= await page.locator([id=FirstName])
    await expect(attribute).toHaveAttribute("type","text")

    //toHaveText
    const text=await page.locator("[class=page-title] h1")
    await expect (text).toHaveText("Register")

    //toConatinsText
    const containsText=await page.locator("[class=page-title] h1")
    await expect (containsText).toContainText("Regi")

    //toHaveValue
    const valueInInputBox= await page.locator([id=FirstName])
    await valueInInputBox.fill("Sachin Raj")
    await expect(valueInInputBox).toHaveValue("Sachin Raj")

    //toHaveCount
    //to check that xpath has specified count or not


    //-ve validation
    await expect(page).not.toHaveTitle()
    await expect("sachin").not.toContain("Raj")

    //soft assert
    await expect.soft(page).toHaveTitle()

    await page.close()
})