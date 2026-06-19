import buscaPageLocators from './locators';

class BuscaPageSteps {

  acessarPaginaProdutos() {
    cy.visit('/products');
  }

  buscarProduto(termo) {
    buscaPageLocators.inputs.campoBusca().clear().type(termo);
    buscaPageLocators.buttons.buscar().click();
  }

  validarResultadosBusca() {
    buscaPageLocators.texts.tituloBusca().should('contain.text', 'Searched Products');
    buscaPageLocators.lists.produtos().should('have.length.greaterThan', 0);
  }
}

export default new BuscaPageSteps();
