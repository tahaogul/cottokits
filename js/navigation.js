/**
 * CottoKits - Navigation Module
 * Mobile hamburger menu functionality
 */

document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
});

/**
 * Initialize mobile navigation
 */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!hamburger || !nav) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && nav.classList.contains('active')) {
            closeMenu();
        }
    });
}

/**
 * Toggle mobile menu
 */
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');

    const isOpen = nav.classList.contains('active');

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

/**
 * Open mobile menu
 */
function openMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');

    hamburger.classList.add('active');
    nav.classList.add('active');
    if (navOverlay) navOverlay.classList.add('active');

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus first nav link for accessibility
    const firstLink = nav.querySelector('.nav__link');
    if (firstLink) {
        setTimeout(() => firstLink.focus(), 300);
    }
}

/**
 * Close mobile menu
 */
function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');

    hamburger.classList.remove('active');
    nav.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');

    // Restore body scroll
    document.body.style.overflow = '';
}

// Export functions
window.Navigation = {
    toggle: toggleMenu,
    open: openMenu,
    close: closeMenu
};

// Global function for onclick usage
window.closeNav = closeMenu;
