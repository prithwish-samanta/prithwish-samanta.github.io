document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYearElem = document.getElementById('current-year');
    if (currentYearElem) {
        currentYearElem.textContent = new Date().getFullYear();
    }

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 700,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
    });

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("header nav a:not(.btn-resume)");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3 || (section.id === 'home' && pageYOffset < sectionHeight / 2)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });

        if (pageYOffset < sections[0].offsetTop + sections[0].clientHeight / 2) {
            const homeLink = document.querySelector('header nav a[href="#home"]');
            if (homeLink) homeLink.classList.add('active');
        }
    });
});