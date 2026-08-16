INSERT INTO categories (name, slug, image_url) VALUES
('Brinquedos', 'brinquedos', '../assets/images/toys.png'),
('Racoes', 'racoes', '../assets/images/raçao.png'),
('Camas e casinhas', 'camas-casinhas', '../assets/images/product-3.png'),
('Higiene', 'higiene', '../assets/images/higiene.png'),
('Acessorios', 'acessorios', '../assets/images/acessories.png');

INSERT INTO products (category_id, sku, name, short_description, full_description, species, price, image_url, featured) VALUES
(1, 'PET-001', 'Brinquedo Interativo', 'Para caes ativos e curiosos', 'Brinquedo resistente para enriquecimento ambiental, ajuda a gastar energia e estimula a curiosidade do pet durante a rotina.', 'Cao', 79.90, '../assets/images/product-1.png', TRUE),
(2, 'PET-002', 'Racao Premium', 'Nutricao completa para gatos', 'Formula balanceada para gatos adultos, com ingredientes selecionados para apoiar energia, pelagem saudavel e digestao equilibrada.', 'Gato', 129.90, '../assets/images/product-2.png', TRUE),
(3, 'PET-003', 'Cama Confortavel', 'Descanso macio para seu pet', 'Cama acolchoada com tecido macio e base firme, ideal para cochilos longos e recuperacao depois dos passeios.', 'Cao e gato', 199.90, '../assets/images/product-3.png', TRUE),
(4, 'PET-004', 'Kit de Higiene', 'Cuidado diario para caes', 'Kit com itens essenciais para banho, escovacao e limpeza, pensado para manter o pet limpo e confortavel em casa.', 'Cao', 59.90, '../assets/images/product-4.png', TRUE),
(5, 'PET-005', 'Coleira Ajustavel', 'Conforto e seguranca no passeio', 'Coleira leve com regulagem precisa, fecho resistente e acabamento confortavel para passeios mais seguros.', 'Cao e gato', 44.90, '../assets/images/product-5.jpg', FALSE),
(1, 'PET-006', 'Arranhador Compacto', 'Diversao e cuidado para gatos', 'Arranhador compacto para gatos, ajuda a proteger os moveis e incentiva o comportamento natural de arranhar.', 'Gato', 149.90, '../assets/images/product-6.jpg', FALSE),
(5, 'PET-007', 'Bebedouro Automatico', 'Agua fresca durante todo o dia', 'Bebedouro automatico com fluxo continuo para estimular hidratacao e manter agua limpa por mais tempo.', 'Cao e gato', 89.90, '../assets/images/product-7.jpg', FALSE),
(3, 'PET-008', 'Casinha Moderna', 'Abrigo aconchegante e resistente', 'Casinha com estrutura resistente e design moderno, feita para oferecer protecao, conforto e um cantinho proprio ao pet.', 'Cao e gato', 249.90, '../assets/images/product-8.jpg', FALSE);

INSERT INTO inventory (product_id, quantity, minimum_quantity) VALUES
(1, 24, 6),
(2, 18, 5),
(3, 10, 3),
(4, 30, 8),
(5, 42, 10),
(6, 12, 4),
(7, 16, 4),
(8, 7, 2);

INSERT INTO users (name, email, password_hash, phone, role) VALUES
('Cliente Petly', 'cliente@petly.com', '123456', '(11) 99999-0000', 'customer'),
('Administrador Petly', 'admin@petly.com', 'admin123', '(11) 98888-0000', 'admin');

INSERT INTO services (name, description, price_from, duration_minutes) VALUES
('Banho e Tosa', 'Higiene completa com produtos seguros para pets.', 59.90, 90),
('Consulta Veterinaria', 'Atendimento para acompanhar saude e bem-estar.', 89.90, 45),
('Adestramento', 'Treinamento com reforco positivo para bons comportamentos.', 120.00, 60),
('Pet Sitter', 'Cuidado com carinho enquanto o tutor esta fora.', 75.00, 120);

INSERT INTO coupons (code, discount_type, value, minimum_subtotal, active) VALUES
('PETLY10', 'percent', 10.00, 120.00, TRUE);
