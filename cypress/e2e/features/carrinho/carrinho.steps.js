import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import produtoSteps from "../../../support/pages/Produto/steps";

When("adiciono o primeiro produto ao carrinho", () => {
  produtoSteps.adicionarPrimeiroProdutoAoCarrinho();
});

Then("o produto deve ser adicionado ao carrinho com sucesso", () => {
  produtoSteps.validarModalAdicionado();
});
