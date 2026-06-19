import { Given } from "@badeball/cypress-cucumber-preprocessor";
import loginSteps from "../../../support/pages/Login/steps";
import produtoSteps from "../../../support/pages/Produto/steps";

const usuario = { email: "teste2021@teste.com.br", senha: "teste" };

Given("que estou logado no sistema", () => {
  loginSteps.acessarLoginPage();
  loginSteps.inserirEmail(usuario.email);
  loginSteps.inserirSenha(usuario.senha);
  loginSteps.clicarBotaoEntrar();
  loginSteps.validarLoginSucesso();
});

Given("que estou logado no sistema com produto no carrinho", () => {
  loginSteps.acessarLoginPage();
  loginSteps.inserirEmail(usuario.email);
  loginSteps.inserirSenha(usuario.senha);
  loginSteps.clicarBotaoEntrar();
  loginSteps.validarLoginSucesso();
  cy.visit("/products");
  produtoSteps.adicionarPrimeiroProdutoAoCarrinho();
  produtoSteps.continuarComprando();
});
