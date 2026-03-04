lucide.createIcons();

/* Navbar elegante dinámico */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

/* Scroll Reveal Premium (entra y sale) */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".reveal").forEach(section => {
    observer.observe(section);
});
/* SEARCH FUNCTIONALITY */
const searchIcon = document.querySelector(".search-icon");
const searchOverlay = document.getElementById("search-overlay");
const closeSearch = document.getElementById("close-search");
const searchInput = document.getElementById("search-input");

searchIcon.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    setTimeout(() => {
        searchInput.focus();
    }, 300);
});

closeSearch.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
});

searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        searchOverlay.classList.remove("active");
    }
});
/* MOBILE MENU */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});