'use-strict';

const openBtn = document.getElementById("openLogin");
const closeBtn = document.getElementById("closeLogin");
const wrapper = document.querySelector(".wrapper");

// Open login form
openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.add("active");
});

// Close login form
closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("active");
});