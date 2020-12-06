const fastNav = document.querySelector("#side-nav");
const main = document.querySelector("main");

window.addEventListener("scroll",() => {

    // Handle side nav menu position
    if (window.innerWidth > 1570) {
        if (main.getBoundingClientRect().top <= 0) {
            fastNav.classList.remove("position-absolute");
            fastNav.classList.add("position-fixed");
        } else if (main.getBoundingClientRect().top > 0) {
            fastNav.classList.remove("position-fixed");
            fastNav.classList.add("position-absolute");
        }
    }
});