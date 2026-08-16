import React, { useMemo, useState } from "react";

const navLinks = [
    ["Início", "../pages/index.html"],
    ["Produtos", "../pages/products.html"],
    ["Sobre", "../pages/sobre.html"],
    ["Agendamento", "../pages/servicos.html#agendamento"],
    ["Contato", "../pages/contato.html"]
];

const banners = [
    {
        image: "../assets/images/banner-1.png",
        alt: "Banner de Brinquedos",
        buttonText: "Confira nossos brinquedos",
        href: "../pages/products.html"
    },
    {
        image: "../assets/images/banner-2.png",
        alt: "Banner de Rações",
        buttonText: "Veja nossas rações",
        href: "../pages/products.html"
    }
];

const categories = [
    ["Brinquedos", "../assets/images/toys.png"],
    ["Acessórios", "../assets/images/acessories.png"],
    ["Rações", "../assets/images/raçao.png"],
    ["Higiene", "../assets/images/higiene.png"],
    ["Promoções", "../assets/images/promocoes.png"]
];

const products = [
    {
        id: "brinquedo-interativo",
        name: "Brinquedo Interativo",
        description: "Para cães ativos e curiosos",
        price: "R$ 79,90",
        image: "../assets/images/product-1.png"
    },
    {
        id: "racao-premium",
        name: "Ração Premium",
        description: "Nutrição completa para gatos",
        price: "R$ 129,90",
        image: "../assets/images/product-2.png"
    },
    {
        id: "cama-confortavel",
        name: "Cama Confortável",
        description: "Descanso macio para seu pet",
        price: "R$ 199,90",
        image: "../assets/images/product-3.png"
    },
    {
        id: "kit-higiene",
        name: "Kit de Higiene",
        description: "Cuidado diário para cães",
        price: "R$ 59,90",
        image: "../assets/images/product-4.png"
    }
];

const tips = [
    ["Alimentação", "Escolha a ração ideal!", "Observe idade, porte e rotina do seu pet antes de escolher a alimentação adequada."],
    ["Brincadeiras", "Estimule seu pet todos os dias!", "Brincar é essencial para a saúde física e mental do seu pet e ajuda a gastar energia."],
    ["Higiene", "Cuide da higiene do seu pet!", "Banhos regulares, escovação dos pelos e limpeza dos ouvidos ajudam a proteger a saúde."],
    ["Saúde Preventiva", "Mantenha os check-ups em dia!", "Consultas regulares, vacinação e vermifugação atualizadas evitam doenças graves."],
    ["Atividade Física", "Faça exercícios com seu pet!", "Passeios e brincadeiras ajudam a manter o peso ideal e promovem bem-estar."],
    ["Socialização", "Socialize seu pet!", "Novos ambientes, pessoas e animais ajudam a desenvolver um comportamento equilibrado."]
];

const benefits = [
    ["Entrega", "Entrega rápida", "Receba os produtos do seu pet com agilidade e segurança."],
    ["Pagamento", "Compra segura", "Finalize seus pedidos com tranquilidade e proteção."],
    ["Atendimento", "Ajuda especializada", "Conte com suporte para escolher o melhor para seu amigo."]
];

function readStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
        return [];
    }
}

function App() {
    const [activeBanner, setActiveBanner] = useState(0);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [cartCount, setCartCount] = useState(() => readStorage("cart").length);
    const [addedProduct, setAddedProduct] = useState("");

    const filteredProducts = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();

        if (!term) {
            return products;
        }

        return products.filter(product => product.name.toLowerCase().includes(term));
    }, [searchTerm]);

    function changeBanner(direction) {
        setActiveBanner(current => {
            const nextBanner = current + direction;

            if (nextBanner < 0) {
                return banners.length - 1;
            }

            if (nextBanner >= banners.length) {
                return 0;
            }

            return nextBanner;
        });
    }

    function addToCart(product) {
        const cart = readStorage("cart");
        const nextCart = [...cart, product];
        localStorage.setItem("cart", JSON.stringify(nextCart));
        setCartCount(nextCart.length);
        setAddedProduct(product.id);

        window.setTimeout(() => {
            setAddedProduct("");
        }, 1600);
    }

    const banner = banners[activeBanner];

    return (
        <>
            <nav className="header">
                <a href="../pages/index.html">
                    <img className="logo" src="../assets/logo.svg" alt="Petly Logo" />
                </a>

                <div className="nav-center">
                    <div className="menu">
                        {navLinks.map(([label, href]) => (
                            <a key={label} href={href}>{label}</a>
                        ))}
                    </div>

                    <div className={`search ${isSearchOpen ? "active" : ""}`}>
                        <button className="search-btn" type="button" aria-label="Pesquisar" onClick={() => setIsSearchOpen(open => !open)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0,0,256,256">
                                <g fill="#61cfe5" fillRule="nonzero">
                                    <g transform="scale(10.66667,10.66667)">
                                        <path d="M13.26172,14.86719l2.48047,2.48047c-0.37891,0.72266 -0.41797,1.44141 -0.01953,1.83984l4.52734,4.52734c0.57031,0.57031 1.8125,0.25781 2.76563,-0.69922c0.95703,-0.95703 1.26953,-2.19531 0.69922,-2.76562l-4.52344,-4.52734c-0.40234,-0.39844 -1.12109,-0.35937 -1.84375,0.01563l-2.48047,-2.47656zM8.5,0c-4.69531,0 -8.5,3.80469 -8.5,8.5c0,4.69531 3.80469,8.5 8.5,8.5c4.69531,0 8.5,-3.80469 8.5,-8.5c0,-4.69531 -3.80469,-8.5 -8.5,-8.5zM8.5,15c-3.58984,0 -6.5,-2.91016 -6.5,-6.5c0,-3.58984 2.91016,-6.5 6.5,-6.5c3.58984,0 6.5,2.91016 6.5,6.5c0,3.58984 -2.91016,6.5 -6.5,6.5z" />
                                    </g>
                                </g>
                            </svg>
                        </button>

                        <input
                            className="search-input"
                            type="text"
                            value={searchTerm}
                            onChange={event => setSearchTerm(event.target.value)}
                            placeholder="Pesquisar..."
                        />
                    </div>
                </div>

                <div className="account">
                    <a href="../pages/cart.html" className="cart-link" aria-label={`Carrinho com ${cartCount} itens`}>
                        <img src="../assets/icons/cart-icon.svg" alt="" />
                        <span id="cart-count">{cartCount}</span>
                    </a>

                    <div className="profile-menu">
                        <button className="account-btn" type="button" aria-label="Conta">
                            <img src="../assets/icons/account-icon.svg" alt="" className="account-icon" />
                        </button>

                        <div className="account-menu">
                            <a href="../pages/login.html">Entrar</a>
                            <a href="../pages/register.html">Sou novo</a>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div className="container">
                    <div className="banner">
                        <img src={banner.image} alt={banner.alt} />

                        <button className="banner-arrow banner-arrow-left" type="button" aria-label="Imagem anterior" onClick={() => changeBanner(-1)}>‹</button>
                        <button className="banner-arrow banner-arrow-right" type="button" aria-label="Próxima imagem" onClick={() => changeBanner(1)}>›</button>

                        <a className="banner-btn" href={banner.href}>{banner.buttonText}</a>
                    </div>

                    <section className="categories">
                        <SectionHeader title="Categorias" linkText="Encontre o que seu amigo precisa" href="../pages/products.html" />

                        <div className="category-list">
                            {categories.map(([name, image]) => (
                                <a href="../pages/products.html" className="category-card" key={name}>
                                    <img src={image} alt={name} />
                                    <span>{name}</span>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>

                <section className="featured-products">
                    <SectionHeader title="Produtos em destaque" linkText="Veja todos os produtos" href="../pages/products.html" />

                    <div className="product-list">
                        {filteredProducts.map(product => (
                            <article className="product-card" key={product.id} data-id={product.id}>
                                <img src={product.image} alt={product.name} />

                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>

                                    <div className="product-footer">
                                        <strong>{product.price}</strong>
                                        <button
                                            type="button"
                                            className={`buy-btn ${addedProduct === product.id ? "added" : ""}`}
                                            onClick={() => addToCart(product)}
                                        >
                                            {addedProduct === product.id ? "Adicionado" : "Comprar"}
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="tips">
                    <SectionHeader title="Dicas para seu pet" linkText="Cuidados simples no dia a dia" href="../pages/servicos.html#agendamento" />

                    <div className="tips-list">
                        {tips.map(([label, title, text]) => (
                            <article className="tip-card" key={title}>
                                <span>{label}</span>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="benefits">
                    <SectionHeader title="Por que escolher a Petly?" linkText="Cuidado, praticidade e carinho em cada pedido" href="../pages/sobre.html" />

                    <div className="benefits-list">
                        {benefits.map(([label, title, text]) => (
                            <article className="benefit-card" key={title}>
                                <span>{label}</span>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <div>
                        <h2>Petly</h2>
                        <p>Cuidando do seu melhor amigo com carinho, qualidade e praticidade.</p>
                    </div>

                    <div className="footer-links">
                        {navLinks.filter(([label]) => label !== "Sobre").map(([label, href]) => (
                            <a key={label} href={href}>{label}</a>
                        ))}
                    </div>
                </div>

                <p className="footer-copy">Petly © 2026. Todos os direitos reservados.</p>
            </footer>
        </>
    );
}

function SectionHeader({ title, linkText, href }) {
    return (
        <div className="section-header">
            <h2>{title}</h2>
            <a href={href}>{linkText}</a>
        </div>
    );
}

export default App;
