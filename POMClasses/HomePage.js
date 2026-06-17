exports.HomePage= class HomePage{

constructor(page){
    this.page=page
    this.productList="//div[@id='tbodyid']/descendant::h4/a"
    this.addToCartButton="//a[normalize-space()='Add to cart']"
}

async addProductToCart(productname){

    const prodList=await this.page.$$(this.productList)
    for(let product of prodList){
        const prodName=await product.textContent()
        if(productname===prodName){
            await product.click()
            break;
        }
    }

      await this.page.on('dialog', async dialog=>{
        console.log(await dialog.message())
        await dialog.accept()

    })
    await this.page.waitForTimeout(2000)
    await this.page.click(this.addToCartButton)

 
}



}