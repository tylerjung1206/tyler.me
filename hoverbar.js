//hover bar thingy width adjustment for navbar only working for home page atm
document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar__links");

    navbarLinks.forEach(link => {
        const linkWidth = link.offsetWidth;
        link.style.setProperty('--underline-width', `${linkWidth}px`); 
    });
});