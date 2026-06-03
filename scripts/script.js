const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
    search.classList.toggle("active");

    if (search.classList.contains("active")) {
        searchInput.focus();
    }
});

const account = document.querySelector(".account");
const accountBtn = document.querySelector(".account-btn");

accountBtn.addEventListener("click", () => {
    account.classList.toggle("active");
});

const bannerImg = document.querySelector("#banner-img");
const bannerBtn = document.querySelector(".banner-btn");
const leftArrow = document.querySelector(".banner-arrow-left");
const rightArrow = document.querySelector(".banner-arrow-right");

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

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "Adicionado ao carrinho";
        button.classList.add("added");

        setTimeout(() => {
            button.textContent = "Comprar";
            button.classList.remove("added");
        }, 2000);
    });
});