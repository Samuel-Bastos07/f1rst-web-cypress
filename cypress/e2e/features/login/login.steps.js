import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginSteps from "../../../support/pages/Login/steps";

Given("que estou na página de login", () => {
  loginSteps.acessarLoginPage();
});

When("insiro o email {string}", (email) => {
  loginSteps.inserirEmail(email);
});

When("insiro a senha {string}", (senha) => {
  loginSteps.inserirSenha(senha);
});

When("clico no botão de login", () => {
  loginSteps.clicarBotaoEntrar();
});

Then("devo estar logado no sistema", () => {
  loginSteps.validarLoginSucesso();
});

Then("devo ver uma mensagem de erro de login", () => {
  loginSteps.validarErroLogin();
});
