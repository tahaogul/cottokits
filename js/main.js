/**
 * CottoKits - Main JavaScript
 * Core functionality and utilities
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  initApp();
});

/**
 * Initialize the application
 */
function initApp() {
  initSmoothScroll();
  initHeaderScroll();
  initAnimationOnScroll();
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Header scroll effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

/**
 * Animate elements when they come into view
 */
function initAnimationOnScroll() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    animatedElements.forEach(el => el.classList.add('animated'));
  }
}

/**
 * Utility: Format phone number for WhatsApp
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone number
 */
function formatPhoneForWhatsApp(phone) {
  // Remove all non-numeric characters except +
  return phone.replace(/[^\d+]/g, '');
}

/**
 * Utility: Create WhatsApp link
 * @param {string} phone - Phone number
 * @param {string} message - Pre-filled message
 * @returns {string} WhatsApp URL
 */
function createWhatsAppLink(phone, message = '') {
  const formattedPhone = formatPhoneForWhatsApp(phone);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

/**
 * Utility: Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utility: Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in ms
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Export utilities for use in other modules
window.CottoKits = {
  formatPhoneForWhatsApp,
  createWhatsAppLink,
  debounce,
  throttle
};
