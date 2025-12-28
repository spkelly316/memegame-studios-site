/**
 * Hamburger Menu Toggle
 * Shared across all subdomains
 */

document.addEventListener('DOMContentLoaded', function() {
    const siteHeader = document.querySelector('.site-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    if (!siteHeader || !menuToggle || !mainNav) {
        console.warn('Navigation elements not found. Make sure nav.css and menu.js are loaded correctly.');
        return;
    }

    // Create overlay element if it doesn't exist
    let menuOverlay = document.querySelector('.menu-overlay');
    if (!menuOverlay) {
        menuOverlay = document.createElement('div');
        menuOverlay.className = 'menu-overlay';
        siteHeader.appendChild(menuOverlay);
    }

    // Toggle menu function
    function toggleMenu() {
        const isOpen = siteHeader.classList.contains('is-open');
        
        if (isOpen) {
            siteHeader.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            body.classList.remove('menu-open');
        } else {
            siteHeader.classList.add('is-open');
            menuToggle.setAttribute('aria-expanded', 'true');
            body.classList.add('menu-open');
        }
    }

    // Close menu function
    function closeMenu() {
        siteHeader.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-open');
    }

    // Toggle on button click
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking a nav link (mobile only)
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Only close on mobile (when menu is visible)
            if (window.innerWidth < 768) {
                closeMenu();
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && siteHeader.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Handle window resize - close menu if switching to desktop view
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth >= 768 && siteHeader.classList.contains('is-open')) {
                closeMenu();
            }
        }, 250);
    });
});

