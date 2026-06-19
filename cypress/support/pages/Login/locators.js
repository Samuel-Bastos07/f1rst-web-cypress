const loginPageLocators = {
  inputs: {
    email: () => cy.get('input[data-qa="login-email"]'),
    senha: () => cy.get('input[data-qa="login-password"]'),
  },
  buttons: {
    entrar: () => cy.get('button[data-qa="login-button"]'),
  },
  texts: {
    logadoComo: () => cy.contains('a', 'Logged in as'),
    erroLogin: () => cy.contains('p', 'Your email or password is incorrect!'),
  },
}

export default loginPageLocators;
