function Login() {

    this.username = element(by.name('username'));
    this.password = element(by.name('password'));
    this.loginbutton =element(by.buttonText('login'));

}
module.exports= new Login();