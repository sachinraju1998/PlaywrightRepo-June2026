import {test, expect} from "@playwright/test"
import { LoginPage } from "../POMClasses/LoginPage"
import {HomePage} from "../POMClasses/HomePage"
import {CartPage} from "../POMClasses/CartPage"

test("POM class Test", async ({page})=>{
 //Login to the application
//new
 const loginPage= new LoginPage(page)
 
 await loginPage.goToLoginPage()

 await loginPage.loginToApplication("pavanol","test@123")

 await page.waitForTimeout(3000)

 //Home page - add product to the cart
 const homePage= new HomePage(page)

 homePage.addProductToCart("Nexus 6")

 await page.waitForTimeout(3000)

 //cart page - validate the product is added or not
 const cartPage = new CartPage(page)

 const status=await cartPage.verifyProductIsAddedToCart("Nexus 6")
 console.log(status)
 await expect(status).toBe(true)

 await page.waitForTimeout(3000)

})