const {test,expect} = require("@playwright/test")

test("Date Picker", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // //pass the date directly to the date field
    // await page.fill("[id=datepicker]", "06/02/2026")


    //By writting the logic
    const year1= "2026";
    const month1 = "July";
    const date1="4";

    //first click the element
    await page.click("[id=datepicker]")

    const month = await page.locator(".ui-datepicker-month").textContent();
    const year = await page.locator(".ui-datepicker-year").textContent();

    console.log(month1 +"   "+year1)

    while(true){
        if(year1===year && month1===month){
            
            const date = await page.$$("//a[@class='ui-state-default']")
            for(const dat of date){
                if(await dat.textContent()==date1){
                    await dat.click()
                    break;
                }
            }

        } else{
            await page.click("//span[text()='Next']")
        }
        
    }
    await page.waitForTimeout(2000)

    await page.close()

})