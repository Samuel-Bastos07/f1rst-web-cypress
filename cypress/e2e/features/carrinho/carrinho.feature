# language: pt

Funcionalidade: Carrinho de Compras
  Como um usuário logado
  Quero adicionar produtos ao carrinho
  Para realizar uma compra

  Cenário: Incluir produto no carrinho com sucesso
    Dado que estou logado no sistema
    Quando acesso a página de produtos
    E adiciono o primeiro produto ao carrinho
    Então o produto deve ser adicionado ao carrinho com sucesso
