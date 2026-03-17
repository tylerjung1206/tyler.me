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

        function openMenu() {
            navbarMenu.classList.add("active");
            mobileMenu.classList.add("active");
            overlay.classList.add("active");
            overlay.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        }

        function closeMenu() {
            navbarMenu.classList.remove("active");
            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");
            overlay.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }

        mobileMenu.addEventListener("click", function () {
            if (navbarMenu.classList.contains("active")) {
                closeMenu();
            } else {
                openMenu();
            }
        });

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