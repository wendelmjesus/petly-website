# Petly

Petly é um projeto front-end fictício de pet shop, criado para praticar HTML, CSS e JavaScript em uma experiência com múltiplas páginas. O foco é apresentar uma interface amigável para produtos, serviços, carrinho e contato.

## Visão Geral

O projeto simula uma loja/serviço para pets com navegação entre páginas, catálogo de produtos, carrinho usando `localStorage`, pagamento demonstrativo e um arquivo `db.json` usado como base de dados mock.

## Funcionalidades

- Página inicial com banner, categorias, produtos em destaque, dicas e benefícios.
- Página de produtos com cards, imagens, busca por nome e botão de compra.
- Carrinho com itens agrupados, alteração de quantidade, remoção, subtotal, frete e total.
- Interface de pagamento simulada.
- Páginas de login e cadastro com leitura do `db.json`.
- Página sobre, serviços e contato.
- Banco de dados mock com produtos, categorias, usuários, serviços, pedidos, cupons e métodos de pagamento.
- Layout responsivo para desktop e mobile.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- JSON como banco mock
- LocalStorage para persistência do carrinho

## Estrutura

```text
pet-project/
├── assets/
│   ├── icons/
│   └── images/
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

Abra o arquivo `pages/index.html` no navegador.

Para testar login com os dados mock:

```text
E-mail: cliente@petly.com
Senha: 123456
```

## Observações

Este projeto é um estudo front-end. O pagamento, o cadastro e o banco de dados são simulações locais, sem backend real ou processamento de compra.

## Próximos Passos

- Renderizar produtos diretamente a partir do `db.json`.
- Criar filtros reais por categoria.
- Melhorar autenticação com backend.
- Adicionar testes e validação mais completa dos formulários.
