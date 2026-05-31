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