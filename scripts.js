// Custom cursor (only on non-touch devices)
const cursor = document.getElementById('cursor');
if (cursor && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '24px';
            cursor.style.height = '24px';
            cursor.style.background = 'transparent';
            cursor.style.border = '1.5px solid var(--accent)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '8px';
            cursor.style.height = '8px';
            cursor.style.background = 'var(--accent)';
            cursor.style.border = 'none';
        });
    });
}

// Navbar on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile hamburger toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
    // Close menu on outside click
    document.addEventListener('click', e => {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            obs.unobserve(e.target);
        }
    });
}, {threshold: 0.1});
reveals.forEach(el => obs.observe(el));