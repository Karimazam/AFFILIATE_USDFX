


const navToggle = document.getElementById("nav-toggle");
const sideNav = document.getElementById("sideNav");
const body = document.querySelector("body");
const searchBtn = document.querySelector(".search-btn");
const searchContainer = document.querySelector(".search-container");

// SIDE BAR TOGGLE
navToggle.addEventListener("click", (e) => {
    sideNav.classList.toggle("active")
    searchContainer.classList.add("d-none")
    e.stopPropagation()
})
sideNav.addEventListener("click", (e) => {
    sideNav.classList.add("active")
    searchContainer.classList.add("d-none")

    e.stopPropagation()
})


// SEARCH BAR



searchBtn.addEventListener("click", (e) => {
    searchContainer.classList.toggle("d-none");
    sideNav.classList.remove("active")
    e.stopPropagation()
})

searchContainer.addEventListener("click", (e) => {
    searchContainer.classList.remove("d-none");
    e.stopPropagation()
})


body.addEventListener("click", (e) => {
    sideNav.classList.remove("active")
    searchContainer.classList.add("d-none")

    e.stopPropagation()
})
