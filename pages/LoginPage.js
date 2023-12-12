exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = '//*[@id="login2"]';
        this.usernameInput = '//*[@id="loginusername"]';
        this.passwordInput = '//*[@id="loginpassword"]';
        this.loginButton = '//*[@id="logInModal"]/div/div/div[3]/button[2]';
    }

    async gotoLoginPage() {
        await this.page.goto("https://demoblaze.com/");
    }

    async login(username, password) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}