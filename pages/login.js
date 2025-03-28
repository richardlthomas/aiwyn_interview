export class LoginPage {
  constructor(page){
    this.page = page;
    this.emailField = page.getByTestId('username');
    this.passwordField = page.getByTestId('password');
    this.loginButton = page.getByTestId('user-login');
  }

  async goto() {
    await this.page.goto('client-portal/login');
  }

  async login(email, password){
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
