const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

if (search && searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
        search.classList.toggle("active");

        if (search.classList.contains("active")) {
            searchInput.focus();
        }
    });

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const productCards = document.querySelectorAll(".product-card");

        productCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

const account = document.querySelector(".account");
const accountBtn = document.querySelector(".account-btn");

if (account && accountBtn) {
    accountBtn.addEventListener("click", () => {
        account.classList.toggle("active");
    });
}

const bannerImg = document.querySelector("#banner-img");
const bannerBtn = document.querySelector(".banner-btn");
const leftArrow = document.querySelector(".banner-arrow-left");
const rightArrow = document.querySelector(".banner-arrow-right");

if (bannerImg) {
    const banners = [
        {
            image: "../assets/images/banner-1.png",
            alt: "Banner de Brinquedos",
            buttonText: "Confira nossos brinquedos"
        },
        {
            image: "../assets/images/banner-2.png",
            alt: "Banner de Rações",
            buttonText: "Veja nossas rações"
        }
    ];

    let currentBanner = 0;
    let isChangingBanner = false;

    function updateBanner(nextBanner) {
        if (isChangingBanner) {
            return;
        }

        isChangingBanner = true;
        bannerImg.classList.add("is-changing");

        setTimeout(() => {
            currentBanner = nextBanner;
            bannerImg.src = banners[currentBanner].image;
            bannerImg.alt = banners[currentBanner].alt;
            bannerBtn.textContent = banners[currentBanner].buttonText;
            bannerImg.classList.remove("is-changing");

            setTimeout(() => {
                isChangingBanner = false;
            }, 350);
        }, 350);
    }

    rightArrow.addEventListener("click", () => {
        let nextBanner = currentBanner + 1;

        if (nextBanner >= banners.length) {
            nextBanner = 0;
        }

        updateBanner(nextBanner);
    });

    leftArrow.addEventListener("click", () => {
        let nextBanner = currentBanner - 1;

        if (nextBanner < 0) {
            nextBanner = banners.length - 1;
        }

        updateBanner(nextBanner);
    });
}

const buyButtons = document.querySelectorAll(".buy-btn");
const cartCount = document.querySelector("#cart-count");
const cartItemsContainer = document.querySelector("#cart-items");
const emptyCart = document.querySelector("#empty-cart");
const subtotalElement = document.querySelector("#subtotal");
const shippingElement = document.querySelector("#shipping");
const totalElement = document.querySelector("#total");
const paymentForm = document.querySelector("#payment-form");
const paymentMessage = document.querySelector("#payment-message");
const checkoutBtn = document.querySelector("#checkout-btn");

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function getProductKey(product) {
    if (product.id) {
        return product.id;
    }

    return product.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    if (!cartCount) {
        return;
    }

    cartCount.textContent = getCart().length;
}

function parsePrice(price) {
    return Number(price.replace("R$", "").replace(".", "").replace(",", ".").trim()) || 0;
}

function formatPrice(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function getGroupedCart() {
    return getCart().reduce((items, product) => {
        const productKey = getProductKey(product);
        const existingItem = items.find(item => item.key === productKey);

        if (existingItem) {
            existingItem.quantity += 1;
            return items;
        }

        items.push({
            ...product,
            id: product.id || productKey,
            key: productKey,
            quantity: 1
        });

        return items;
    }, []);
}

function setProductQuantity(productKey, quantity) {
    const groupedCart = getGroupedCart();
    const nextCart = [];

    groupedCart.forEach(item => {
        const nextQuantity = item.key === productKey ? quantity : item.quantity;

        for (let index = 0; index < nextQuantity; index += 1) {
            nextCart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image
            });
        }
    });

    saveCart(nextCart);
    renderCartPage();
}

function renderCartPage() {
    if (!cartItemsContainer) {
        return;
    }

    const groupedCart = getGroupedCart();
    const hasItems = groupedCart.length > 0;
    let subtotal = 0;

    cartItemsContainer.innerHTML = "";
    emptyCart.classList.toggle("is-visible", !hasItems);
    cartItemsContainer.style.display = hasItems ? "grid" : "none";

    groupedCart.forEach(item => {
        const price = parsePrice(item.price);
        const itemTotal = price * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement("article");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <span>Total do item: ${formatPrice(itemTotal)}</span>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control" aria-label="Quantidade de ${item.name}">
                    <button type="button" class="quantity-btn" data-action="decrease" data-key="${item.key}" aria-label="Diminuir quantidade">-</button>
                    <span>${item.quantity}</span>
                    <button type="button" class="quantity-btn" data-action="increase" data-key="${item.key}" aria-label="Aumentar quantidade">+</button>
                </div>
                <button type="button" class="remove-from-cart-btn" data-key="${item.key}">Remover</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    const shipping = subtotal > 0 && subtotal < 180 ? 19.9 : 0;
    const total = subtotal + shipping;

    subtotalElement.textContent = formatPrice(subtotal);
    shippingElement.textContent = subtotal > 0 ? formatPrice(shipping) : formatPrice(0);
    totalElement.textContent = formatPrice(total);
    checkoutBtn.disabled = !hasItems;
}

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productCard = button.closest(".product-card");

        if (cartCount && productCard) {
            const productName = productCard.querySelector("h3").textContent;
            const product = {
                id: productCard.dataset.id || getProductKey({ name: productName }),
                name: productName,
                price: productCard.querySelector("strong").textContent,
                image: productCard.querySelector("img").src
            };

            const cart = getCart();
            cart.push(product);
            saveCart(cart);
        }

        button.textContent = "Adicionado ao carrinho";
        button.classList.add("added");

        setTimeout(() => {
            button.textContent = "Comprar";
            button.classList.remove("added");
        }, 2000);
    });
});

updateCartCount();
renderCartPage();

if (cartItemsContainer) {
    cartItemsContainer.addEventListener("click", event => {
        const quantityButton = event.target.closest(".quantity-btn");
        const removeButton = event.target.closest(".remove-from-cart-btn");

        if (quantityButton) {
            const productKey = quantityButton.dataset.key;
            const item = getGroupedCart().find(cartItem => cartItem.key === productKey);

            if (!item) {
                return;
            }

            const nextQuantity = quantityButton.dataset.action === "increase" ? item.quantity + 1 : item.quantity - 1;

            setProductQuantity(productKey, Math.max(nextQuantity, 0));
        }

        if (removeButton) {
            setProductQuantity(removeButton.dataset.key, 0);
        }
    });
}

if (paymentForm) {
    paymentForm.addEventListener("submit", event => {
        event.preventDefault();

        if (getCart().length === 0) {
            paymentMessage.textContent = "Adicione produtos ao carrinho antes de finalizar.";
            return;
        }

        localStorage.removeItem("cart");
        paymentForm.reset();
        paymentMessage.textContent = "Pagamento aprovado. Seu pedido foi criado com sucesso!";
        updateCartCount();
        renderCartPage();
    });
}

const appointmentForm = document.querySelector("#appointment-form");
const appointmentMessage = document.querySelector("#appointment-message");

function getAppointments() {
    return JSON.parse(localStorage.getItem("appointments")) || [];
}

if (appointmentForm) {
    appointmentForm.addEventListener("submit", event => {
        event.preventDefault();

        const formData = new FormData(appointmentForm);
        const appointment = {
            id: Date.now(),
            guardian: formData.get("guardian"),
            pet: formData.get("pet"),
            service: formData.get("service"),
            date: formData.get("date"),
            time: formData.get("time"),
            phone: formData.get("phone")
        };
        const appointments = [appointment, ...getAppointments()].slice(0, 8);

        localStorage.setItem("appointments", JSON.stringify(appointments));
        appointmentForm.reset();

        if (appointmentMessage) {
            appointmentMessage.textContent = "Agendamento criado com sucesso!";
        }
    });
}
