import {test,expect} from '@playwright/test'

test("Practice",async ({page})=>{

   await page.frame({name:""})
   const f=await page.frame({url :''})
   
   const f2=page.frames()
   f2[0].locator()
   
})