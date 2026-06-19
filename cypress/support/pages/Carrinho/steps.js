import carrinhoPageLocators from './locators';

class CarrinhoPageSteps {

  acessarCarrinho() {
    cy.visit('/view_cart');
  }

  validarProdutosNoCarrinho() {
    carrinhoPageLocators.lists.itensProduto().should('have.length.greaterThan', 0);
  }

  prosseguirParaCheckout() {
    carrinhoPageLocators.buttons.prosseguirCheckout().click();
  }

  validarProdutosNoPagamento() {
    carrinhoPageLocators.lists.nomeProdutoCheckout().should('have.length.greaterThan', 0);
  }
}

export default new CarrinhoPageSteps();
