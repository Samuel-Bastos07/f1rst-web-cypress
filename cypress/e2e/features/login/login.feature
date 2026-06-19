# language: pt

Funcionalidade: Login
  Como um usuário registrado
  Quero realizar login no sistema
  Para acessar as funcionalidades da loja

  Cenário: Realizar login com sucesso
    Dado que estou na página de login
    Quando insiro o email "teste2021@teste.com.br"
    E insiro a senha "teste"
    E clico no botão de login
    Então devo estar logado no sistema

  Cenário: Tentativa de login com credenciais inválidas
    Dado que estou na página de login
    Quando insiro o email "invalido@teste.com.br"
    E insiro a senha "senhaerrada"
    E clico no botão de login
    Então devo ver uma mensagem de erro de login
