# Rocketseat: Coffee Delivery

## Sobre
Nesse segundo desafio da formação React 2022, iremos aplicar os conceitos do React que aprendemos durante a trilha em um fluxo real de e-commerce. O projeto consiste em desenvolver uma aplicação de cafeteria fictícia, permitindo ao usuário listar cafés disponíveis, gerenciar um carrinho de compras e finalizar pedidos.



### Tarefas

- [x] Criar projeto com Vite + React + TypeScript
- [x] Criar página Home (listagem de cafés)
- [x] Criar página Checkout (formulário de endereço + resumo do carrinho)
- [x] Criar página de Sucesso (confirmação do pedido)
- [x] Configurar rotas com `react-router-dom`
- [x] Implementar ContextAPI/useReducer para gerenciar o estado global do carrinho
- [x] Aumentar/diminuir quantidade de um café no carrinho
- [x] Remover café do carrinho 
- [x] Mostrar subtotal e total geral dos itens
- [x] Seleção de método de pagamento (crédito, débito ou dinheiro)

### Requisitos:

1. Regras principais do sistema
- O usuário deve visualizar a listagem de cafés disponíveis com nome, descrição, preço e opções de quantidade.
- O usuário pode adicionar uma quantidade específica de cafés ao carrinho.
- O usuário pode aumentar ou diminuir a quantidade de itens já no carrinho.
- O usuário deve conseguir remover itens individualmente do carrinho.
- No Header deve aparecer o total de itens adicionados ao carrinho.
- Deve existir um formulário de endereço de entrega, com campos validados (CEP, rua, bairro, cidade, UF, etc).
- O usuário deve escolher o método de pagamento (cartão de crédito, débito ou dinheiro).
- O sistema deve exibir o valor total da compra, calculado a partir da soma dos itens e suas quantidades.
- Após confirmar, deve ser exibida uma página de sucesso do pedido, contendo o resumo do endereço e pagamento.

2. Conceitos e ferramentas a praticar
- Estados e imutabilidade
- ContextAPI para gerenciamento global do carrinho
- LocalStorage para persistir itens do carrinho mesmo após atualizar a página
- Manipulação de arrays (map, filter, reduce)
- Componentização e propriedades
- Validação de formulários com react-hook-form + zod
- Estilização com styled-components
- Navegação com react-router-dom

3. Estrutura esperada do desafio
- Página Home com listagem de cafés
- Página Carrinho/Checkout com formulário de entrega e resumo da compra
- Página de Confirmação com os dados do pedido finalizado
- Uso de ContextAPI para compartilhar o estado global do carrinho entre as páginas


...

## Tecnologias

- TypeScript
- React.js
- React Router Dom
- Styled Components
- React Hook Form
- Zod
- Phosphor Icons React

...

## Layout

O layout da aplicação está disponível no perfil do Figma da Rocketseat: [Coffee Delivery](https://www.figma.com/community/file/1550125363212955190)