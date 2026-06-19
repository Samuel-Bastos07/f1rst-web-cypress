import produtoPageLocators from './locators';

class ProdutoPageSteps {

  adicionarPrimeiroProdutoAoCarrinho() {
    produtoPageLocators.lists.cards().first().realHover();
    produtoPageLocators.lists.botaoAdicionarCarrinho(0).first().click({ force: true });
  }

  validarModalAdicionado() {
    produtoPageLocators.modal.container().should('be.visible');
  }

  continuarComprando() {
    produtoPageLocators.modal.continuarComprando().click();
  }

  irParaCarrinho() {
    produtoPageLocators.modal.verCarrinho().click();
  }
}

export default new ProdutoPageSteps();
