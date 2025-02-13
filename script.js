// Back-to-top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Scroll to the top when clicking the button
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});