const produtoPageLocators = {
  lists: {
    cards: () => cy.get('.features_items .product-image-wrapper'),
    overlay: (index) => cy.get('.features_items .product-image-wrapper').eq(index).find('.product-overlay'),
    botaoAdicionarCarrinho: (index) => cy.get('.features_items .product-image-wrapper').eq(index).find('.add-to-cart'),
  },
  modal: {
    container: () => cy.get('#cartModal'),
    continuarComprando: () => cy.get('#cartModal button.close-modal'),
    verCarrinho: () => cy.get('#cartModal a[href="/view_cart"]'),
  },
}

export default produtoPageLocators;
