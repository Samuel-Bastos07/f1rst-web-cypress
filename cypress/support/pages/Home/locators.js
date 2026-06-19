const homePageLocators = {
  buttons: {
    logout: () => cy.get('a[href="/logout"]'),
  },
}

export default homePageLocators;
