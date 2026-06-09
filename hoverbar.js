//hover bar thingy width adjustment and implementation
document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar__links");
    const mobileMenu = document.getElementById("mobile-menu");
    const navbarMenu = document.querySelector(".navbar__menu");

    navbarLinks.forEach(link => {
        const linkWidth = link.offsetWidth;
        link.style.setProperty('--underline-width', `${linkWidth}px`); 
    });

    // Mobile menu toggle
    if (mobileMenu && navbarMenu) {
        const overlay = document.createElement("div");
        overlay.className = "navbar__overlay";
        overlay.setAttribute("aria-hidden", "true");
        document.body.appendChild(overlay);

        mobileMenu.setAttribute("role", "button");
        mobileMenu.setAttribute("aria-label", "Toggle navigation menu");
        mobileMenu.setAttribute("aria-expanded", "false");

        function openMenu() {
            navbarMenu.classList.add("active");
            mobileMenu.classList.add("active");
            overlay.classList.add("active");
            overlay.setAttribute("aria-hidden", "false");
            mobileMenu.setAttribute("aria-expanded", "true");
            document.body.style.overflow = "hidden";
        }

        function closeMenu() {
            navbarMenu.classList.remove("active");
            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");
            overlay.setAttribute("aria-hidden", "true");
            mobileMenu.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
        }

        function toggleMenu(event) {
            event.preventDefault();
            event.stopPropagation();
            if (navbarMenu.classList.contains("active")) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        mobileMenu.addEventListener("click", toggleMenu);

        overlay.addEventListener("click", closeMenu);

        navbarLinks.forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    }
});