# 🛍️ Automation Practice - Testes E2E com Cypress

<div align="center">
  <img src="https://img.shields.io/badge/Cypress-12.0.0-brightgreen" alt="Cypress Version">
  <img src="https://img.shields.io/badge/Node.js-16+-success" alt="Node Version">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
</div>

Repositório de testes automatizados para o site [Automation Practice](http://www.automationpractice.pl/) desenvolvido com Cypress para validação de funcionalidades críticas de e-commerce.

## 🌟 Funcionalidades Testadas

### 🔐 Autenticação
- Login com credenciais válidas/inválidas
- Criação de nova conta com dados aleatórios

### 🛒 Fluxo de Compras
- Adição/remoção de produtos
- Processo completo de checkout
- Alteração de informações durante pagamento

### 👤 Gestão de Cadastro
- Atualização de endereços
- Alteração de informações pessoais

## 🛠️ Stack Tecnológica

| Tecnologia | Uso |
|------------|-----|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg" width="20"/> **Cypress** | Framework principal para automação |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20"/> **Node.js** | Ambiente de execução |
| **Faker.js** | Geração de dados de teste realísticos |

## 🚀 Começando

### Pré-requisitos
- Node.js 16+
- npm 8+
- Git

### Instalação
1. Clone o repositório:
 
```bash
   git clone https://github.com/assiriamenezes/severest-automation.git
   cd automation-practice
```
2. Instale as dependências:
   
```bash
  npm install
```
3. Instale o Cypress (se não estiver incluído em package.json):

```bash
   npm install cypress --save-dev
```
4. Verifique se o Cypress foi instalado corretamente:

```bash
   npx cypress --version
```

5. Abra o Cypress pela primeira vez (para gerar a estrutura de pasta inicial):

```bash
  npx cypress open
```
## 🧪 Executando os testes

- Modo interativo:
  
Para executar os testes no modo interativo (com interface gráfica), use o comando:

```bash
npx cypress open
```

- Modo Headless:

Para executar os testes no modo headless (sem interface gráfica), use o comando:

```bash
npx cypress run
```
Os resultados do teste serão exibidos no terminal.

## 🐞 Bugs Encontrados 
[Bug] Tela de Login: Ao deixar todos os campos em branco, no alerta é comentado somente sobre 1 erro (referente ao e-mail obrigatório). ![image](https://github.com/user-attachments/assets/72d9d39e-9aee-447e-808b-57081a820663)

[Bug] Tela de Cadastro: Referente aos campos obrigatórios da tela de criação de conta, os nomes de campos obrigatórios são demonstrados como nomes de id do campo.
![image](https://github.com/user-attachments/assets/d918d8c1-a103-439f-aa89-d5c67570f3a4)

[Melhoria] Tela de Endereços: Ao deletar um endereço, não é demonstrado um toast de sucesso referente ao endereço deletado com sucesso.

[Melhoria] Tela de Endereços: Depois de registrar em endereço, não é demonstrado um toast de sucesso referente ao endereço salvo.

## 🤝 Contribuição
1. Faça um fork do projeto
2. Crie sua branch (git checkout -b feature/nova-feature)
3. Commit suas mudanças (git commit -m 'Adiciona nova feature')
4. Push para a branch (git push origin feature/nova-feature)
5. Abra um Pull Request

##
<div align="center"> Desenvolvido com ❤️ por <a href="https://github.com/assiriamenezes">Assiria Menezes</a> | <a href="https://github.com/assiriamenezes/automation-practice/issues">Reportar Bug</a> | <a href="https://github.com/assiriamenezes/automation-practice/discussions">Discussões</a> </div>
