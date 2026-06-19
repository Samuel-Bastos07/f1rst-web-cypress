# language: pt

Funcionalidade: Validação de Produtos no Checkout
  Como um usuário logado com produtos no carrinho
  Quero prosseguir para o pagamento
  Para confirmar que os itens corretos estão no pedido

  Contexto:
    Dado que estou logado no sistema com produto no carrinho

  Cenário: Validar produtos incluídos no carrinho na tela de pagamento
    Quando acesso o carrinho de compras
    E prossigo para o checkout
    Então devo visualizar os produtos adicionados na tela de pagamento
