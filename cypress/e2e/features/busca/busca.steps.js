import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import buscaSteps from "../../../support/pages/Busca/steps";

When("acesso a página de produtos", () => {
  buscaSteps.acessarPaginaProdutos();
});

When("busco pelo produto {string}", (termo) => {
  buscaSteps.buscarProduto(termo);
});

Then("devo visualizar os produtos encontrados", () => {
  buscaSteps.validarResultadosBusca();
});
