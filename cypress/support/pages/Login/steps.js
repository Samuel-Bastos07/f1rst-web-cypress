import loginPageLocators from './locators';

class LoginPageSteps {

  acessarLoginPage() {
    cy.visit('/login');
    loginPageLocators.buttons.entrar().should('be.visible');
  }

  inserirEmail(email) {
    loginPageLocators.inputs.email().type(email);
  }

  inserirSenha(senha) {
    loginPageLocators.inputs.senha().type(senha);
  }

  clicarBotaoEntrar() {
    loginPageLocators.buttons.entrar().click();
  }

  validarLoginSucesso() {
    loginPageLocators.texts.logadoComo().should('be.visible');
  }

  validarErroLogin() {
    loginPageLocators.texts.erroLogin().should('be.visible');
  }
}

export default new LoginPageSteps();
