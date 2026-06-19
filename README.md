# desafioF1rst

Projeto de automação de testes E2E utilizando Cypress com BDD (Cucumber) para o site [Automation Exercise](https://www.automationexercise.com).

---

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/download)
- [Cypress 11](https://docs.cypress.io)
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) — BDD com Gherkin
- [cypress-real-events](https://github.com/dmtrKovalenko/cypress-real-events) — interações reais de mouse
- [cypress-xpath](https://github.com/cypress-io/cypress-xpath) — suporte a XPath
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) — geração de relatório HTML

---

## Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- Usuário cadastrado no site com as credenciais:
  - **E-mail:** teste2021@teste.com.br
  - **Senha:** teste

> Essas credenciais já estão cadastradas no site e prontas para uso.

---

## Instalação

```bash
# 1. Clone o repositório
git clone <url-do-repositório>

# 2. Acesse a pasta do projeto
cd desafioF1rst

# 3. Instale as dependências
npm install
```

---

## Executando os testes

### Via interface gráfica do Cypress

```bash
npx cypress open
```

1. Selecione **E2E Testing**
2. Escolha o navegador desejado
3. Selecione o arquivo `.feature` desejado e aguarde a execução

### Via linha de comandos (headless)

```bash
npx cypress run
```

Para rodar uma feature específica:

```bash
npx cypress run --spec "cypress/e2e/features/login/login.feature"
```

---

## Relatório de execução

O projeto gera automaticamente um relatório HTML ao final de cada execução via linha de comandos, utilizando o **Mochawesome Reporter**.

### Rodar testes e abrir o relatório automaticamente

```bash
npm run test:report
```

### Somente rodar os testes (relatório salvo sem abrir)

```bash
npm test
```

O relatório é gerado em:

```
cypress/reports/relatorio.html
```

### O que o relatório apresenta

- Resumo geral: total de testes, aprovados e reprovados
- Tempo de execução por cenário
- Detalhamento de cada passo executado
- Screenshots automáticos dos testes que falharam

> O relatório é gerado apenas na execução via linha de comandos (`npm test` ou `npm run test:report`). A interface gráfica (`cypress open`) não gera o arquivo HTML.

---

## Arquitetura do projeto

```
cypress/
├── e2e/
│   └── features/
│       ├── common/         # Steps compartilhados entre features (ex: login)
│       ├── login/          # Feature e steps de Login
│       ├── busca/          # Feature e steps de Busca de produtos
│       ├── carrinho/       # Feature e steps de Carrinho
│       └── pagamento/      # Feature e steps de Checkout/Pagamento
├── fixtures/
│   └── usuario.json        # Dados de teste (credenciais)
├── reports/
│   └── relatorio.html      # Relatório HTML gerado após execução
└── support/
    ├── pages/
    │   ├── Login/          # Locators e steps da página de Login
    │   ├── Busca/          # Locators e steps da busca
    │   ├── Produto/        # Locators e steps dos produtos
    │   └── Carrinho/       # Locators e steps do carrinho e checkout
    ├── commands.js
    └── e2e.js
```

### Padrão utilizado

- **Feature files** (`.feature`): cenários escritos em Gherkin (BDD) em português
- **Step definitions** (`.steps.js`): mapeamento dos passos Gherkin para código
- **Page Objects** (`locators.js` + `steps.js`): separação entre seletores e ações de cada página

---

## Cenários cobertos

| Feature     | Cenário                                                        |
|-------------|----------------------------------------------------------------|
| Login       | Realizar login com sucesso                                     |
| Login       | Tentativa de login com credenciais inválidas                   |
| Busca       | Realizar busca de produto com sucesso                          |
| Carrinho    | Incluir produto no carrinho com sucesso                        |
| Pagamento   | Validar produtos incluídos no carrinho na tela de pagamento    |
