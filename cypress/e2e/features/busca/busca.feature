# language: pt

Funcionalidade: Busca de Produtos
  Como um usuário logado
  Quero buscar produtos pelo nome
  Para encontrar o que desejo comprar

  Cenário: Realizar busca de produto com sucesso
    Dado que estou logado no sistema
    Quando acesso a página de produtos
    E busco pelo produto "dress"
    Então devo visualizar os produtos encontrados
