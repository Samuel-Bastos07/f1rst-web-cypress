import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import carrinhoSteps from "../../../support/pages/Carrinho/steps";

When("acesso o carrinho de compras", () => {
  carrinhoSteps.acessarCarrinho();
  carrinhoSteps.validarProdutosNoCarrinho();
});

When("prossigo para o checkout", () => {
  carrinhoSteps.prosseguirParaCheckout();
});

Then("devo visualizar os produtos adicionados na tela de pagamento", () => {
  carrinhoSteps.validarProdutosNoPagamento();
});
