import { Selector, t } from 'testcafe' //vamos a utilizar testcafe
//t recibe los paramentros de test controler

class LandingPage { //standar de js las clases inician con mayuscula
    constructor() {
        this.loginLink = Selector('.sel_login')//. is for class
        this.loginIframe = Selector('.GB_frame')//# is for ID, "[name = 'GB_window']"is for name
        this.loginIframeNested = Selector('#GB_frame')
        this.loginEmailInput = Selector('#email')
        this.loginPasswordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn')
    }

    LoginFlow = async (user = '', pass = '') => {
        await t // t es test controler... espera await a que t termine
            .click(this.loginLink) //funcion  test controler hace un click
            .switchToIframe(this.loginIframe)
            .switchToIframe(this.loginIframeNested)
            .typeText(this.loginEmailInput, user)
            .typeText(this.loginPasswordInput, pass)
            .click(this.loginButton)
            .switchToMainWindow()
    }
}

export default new LandingPage()
