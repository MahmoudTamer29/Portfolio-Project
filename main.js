const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    // Slide the menu in/out
    mobileMenu.classList.toggle('translate-x-full');
    
    // Toggle the dark overlay
    menuOverlay.classList.toggle('hidden');
    
    // Change icon between Bars and X
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    }
}

menuBtn.addEventListener('click', toggleMenu);

// Close menu if user clicks the background overlay
menuOverlay.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('translate-x-full')) {
            toggleMenu();
        }
    });
});