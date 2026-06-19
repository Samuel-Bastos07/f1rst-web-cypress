const carrinhoPageLocators = {
  buttons: {
    prosseguirCheckout: () => cy.get('a.btn.btn-default.check_out'),
  },
  lists: {
    itensProduto: () => cy.get('#cart_info_table tbody tr'),
    nomeProdutoCheckout: () => cy.get('table.table-condensed tbody tr h4 a'),
  },
}

export default carrinhoPageLocators;
