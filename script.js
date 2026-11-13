// Check saved theme on page load
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    const themeIcon = themeToggleBtn.querySelector('i');
    if (currentTheme === 'light') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

// Mobile Hamburger Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navbar.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });
}