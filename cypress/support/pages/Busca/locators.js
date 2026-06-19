const buscaPageLocators = {
  inputs: {
    campoBusca: () => cy.get('#search_product'),
  },
  buttons: {
    buscar: () => cy.get('#submit_search'),
  },
  texts: {
    tituloBusca: () => cy.get('h2.title.text-center'),
  },
  lists: {
    produtos: () => cy.get('.features_items .product-image-wrapper'),
  },
}

export default buscaPageLocators;
