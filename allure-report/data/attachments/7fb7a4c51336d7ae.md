# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Hook3.spec.js >> Home page
- Location: tests\Hook3.spec.js:24:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.demoblaze.com/
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

```
"afterAll" hook timeout of 30000ms exceeded.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | let page;
  4  | 
  5  | test.beforeAll(async ({browser})=>{
  6  |     page = await browser.newPage()
  7  | 
  8  |      // login
  9  |     await page.goto("https://www.demoblaze.com/")
  10 |     await page.click("//a[@id='login2']")
  11 |     await page.fill("//input[@id='loginusername']","pavanol")
  12 |     await page.fill("//input[@id='loginpassword']", "test@123")
  13 |     await page.click("//button[normalize-space()='Log in']")
  14 | 
  15 | })
  16 | 
> 17 | test.afterAll(async ()=>{
     |      ^ "afterAll" hook timeout of 30000ms exceeded.
  18 |      //logout
  19 |      await page.click("(//a[normalize-space()='Log out'])[1]")
  20 | })
  21 | 
  22 | 
  23 | 
  24 | test("Home page", async ()=>{
  25 | 
  26 |     await page.waitForTimeout(2000)
  27 | 
  28 |     //validate the no of product are there
  29 |     const products=await page.$$("//div[@id='tbodyid']/descendant::h4/a")
  30 | 
  31 |      await expect(products).toHaveLength(9)
  32 | })
  33 | 
  34 | 
  35 | test("Add to Cart", async ()=>{
  36 | 
  37 |     //validate the no of product are there
  38 |    await page.click("//div[@id='tbodyid']/descendant::h4[1]/a")
  39 |    await page.click("//a[normalize-space()='Add to cart']")
  40 | 
  41 |    await page.on('dialog', async dailog=>{
  42 |         console.log( await dailog.type())
  43 |         await expect(dailog.message()).toContain("Product added.")
  44 |         await dailog.accept()
  45 |    })
  46 | 
  47 | })
```