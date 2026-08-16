# 🐾 Petly

Petly is a fictional pet shop front-end project built to practice React, HTML, CSS, JavaScript, and SQL database modeling across a multi-page shopping experience.

The goal is to provide a friendly interface for browsing pet products, managing a cart, scheduling services, and simulating checkout flows.

## ✨ Overview

Petly simulates a pet store and service platform with page navigation, a product catalog, a `localStorage` cart, demo payment flow, mock data through `db.json`, and SQL files prepared for a future backend.

## 🚀 Features

- 🏠 React home page with banner, categories, featured products, tips, and benefits.
- 🛍️ Products page with images, product codes, descriptions, stock quantity, search by name, and buy buttons.
- 🛒 Cart with grouped items, quantity controls, item removal, subtotal, shipping, and total.
- 💳 Simulated payment interface.
- 🔐 Login and registration pages using mock data from `db.json`.
- 📅 Service scheduling page with local appointment persistence.
- 📦 Mock database with products, categories, users, services, orders, coupons, and payment methods.
- 🗄️ SQL database schema for users, addresses, products, inventory, orders, payments, coupons, and appointments.
- 📱 Responsive layout for desktop and mobile.

## 🧰 Technologies

- HTML5
- CSS3
- JavaScript
- React
- Vite
- JSON mock database
- SQL
- LocalStorage

## 📁 Project Structure

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

## 🔑 Mock Login

Use this mock account to test the login flow:

```text
Email: cliente@petly.com
Password: 123456
```

## 🗄️ Database

The `database/` folder includes SQL files for a future backend implementation:

- `schema.sql`: creates the relational database structure.
- `seed.sql`: inserts starter data for products, inventory, users, services, and coupons.

## 📝 Notes

This is a front-end study project. Payments, authentication, appointments, and database operations are local simulations and do not process real transactions.
