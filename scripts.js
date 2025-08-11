document.addEventListener("DOMContentLoaded", () => {
  // START: Add this theme toggling logic
  const themeToggle = document.getElementById("theme-toggle");

  // Set initial state of the toggle based on the dark-mode class on the <html> tag
  if (document.documentElement.classList.contains("dark-mode")) {
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", function () {
    // Toggle the .dark-mode class on the <html> element
    document.documentElement.classList.toggle("dark-mode");

    // Save the user's preference to localStorage
    if (this.checked) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
  // END: Theme toggling logic

  // Set current year in footer
  const currentYearElem = document.getElementById("current-year");
  if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
  }

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 700,
    easing: "ease-in-out",
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
      if (
        pageYOffset >= sectionTop - sectionHeight / 3 ||
        (section.id === "home" && pageYOffset < sectionHeight / 2)
      ) {
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
      if (homeLink) homeLink.classList.add("active");
    }
  });
});
