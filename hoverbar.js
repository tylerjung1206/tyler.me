//hover bar thingy width adjustment and implementation
document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar__links");

    navbarLinks.forEach(link => {
        const linkWidth = link.offsetWidth;
        link.style.setProperty('--underline-width', `${linkWidth}px`); 
    });
});