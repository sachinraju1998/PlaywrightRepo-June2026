exports.CartPage = class CartPage{
    
    constructor(page){
        this.page=page
        this.cartButton="//a[normalize-space()='Cart']";
        this.listOfProduct="//tbody/tr/td[2]";
    }

    async verifyProductIsAddedToCart(productName){
        await this.page.click(this.cartButton)
        await this.page.waitForTimeout(3000)
        const productList=await this.page.$$(this.listOfProduct)

        for(const product of productList){
            const text=await product.textContent();
            if(text===productName){
                return true
                break;
            }
        }
    }
}