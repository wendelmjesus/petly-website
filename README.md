# Petly

Petly é um projeto front-end fictício de pet shop, criado para praticar React, HTML, CSS, JavaScript e modelagem SQL em uma experiência com múltiplas páginas. O foco é apresentar uma interface amigável para produtos, serviços, carrinho e contato.

## Visão Geral

O projeto simula uma loja/serviço para pets com navegação entre páginas, catálogo de produtos, carrinho usando `localStorage`, pagamento demonstrativo e um arquivo `db.json` usado como base de dados mock.

## Funcionalidades

- Página inicial em React com banner, categorias, produtos em destaque, dicas e benefícios.
- Página de produtos com cards, imagens, código do produto, descrição, estoque, busca por nome e botão de compra.
- Carrinho com itens agrupados, alteração de quantidade, remoção, subtotal, frete e total.
- Interface de pagamento simulada.
- Páginas de login e cadastro com leitura do `db.json`.
- Página sobre, agendamento de serviços e contato.
- Banco de dados mock com produtos, categorias, usuários, serviços, pedidos, cupons e métodos de pagamento.
- Banco de dados SQL com tabelas para cadastro, endereços, produtos, estoque, compras, pagamentos, cupons e agendamentos.
- Layout responsivo para desktop e mobile.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- React
- Vite
- JSON como banco mock
- SQL
- LocalStorage para persistência do carrinho

## Estrutura

```text
pet-project/
├── assets/
│   ├── icons/
│   └── images/
├── database/
│   ├── schema.sql
│   └── seed.sql
├── pages/
│   ├── index.html
│   ├── products.html
│   ├── cart.html
│   ├── contato.html
│   ├── login.html
│   ├── register.html
│   ├── servicos.html
│   └── sobre.html
├── scripts/
├── src/
├── styles/
├── db.json
├── package.json
└── README.md
```

## Como Rodar

Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Depois abra a URL exibida pelo Vite.

Para testar login com os dados mock:

```text
E-mail: cliente@petly.com
Senha: 123456
```

## Observações

Este projeto é um estudo front-end. O pagamento, o cadastro e o banco de dados são simulações locais, sem backend real ou processamento de compra.

Os arquivos em `database/` trazem uma estrutura SQL pronta para evoluir o projeto com backend. Use `schema.sql` para criar as tabelas e `seed.sql` para inserir dados iniciais.

## Próximos Passos

- Renderizar produtos diretamente a partir do `db.json`.
- Criar filtros reais por categoria.
- Melhorar autenticação com backend.
- Adicionar testes e validação mais completa dos formulários.
