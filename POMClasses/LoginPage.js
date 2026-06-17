exports.LoginPage = class LoginPage{

    constructor(page){
        this.page=page;
        this.loginButton="//a[@id='login2']";
        this.username="//input[@id='loginusername']";
        this.password="//input[@id='loginpassword']";
        this.login= "//button[normalize-space()='Log in']"
    }

    async goToLoginPage(){
        await this.page.goto('/index.html')
    }

    async loginToApplication(username,password){
        await this.page.click(this.loginButton)
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.click(this.login)
    }

}