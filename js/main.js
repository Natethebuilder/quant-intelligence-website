// Smooth Scrolling for Navigation Links
document.querySelectorAll("header nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Hero Section Fade-In Animation on Load
window.addEventListener("load", () => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
});
// Initialize AOS (Animate on Scroll)
AOS.init();
