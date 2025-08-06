// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initAnimations();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change hamburger icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Scroll effects
function initScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 15, 35, 0.98)';
        } else {
            header.style.background = 'rgba(15, 15, 35, 0.95)';
        }
    });

    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active navigation link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Animation effects
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .event-card, .category-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

function formatCurrency(value) {
    return `R$ ${formatPrice(value)}`;
}

// Loading state management
function showLoading(element) {
    if (element) {
        element.innerHTML = '<div class="loading">Carregando...</div>';
    }
}

function hideLoading() {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(el => el.remove());
}

// Error handling
function showError(message, element = null) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <span>${message}</span>
    `;
    
    if (element) {
        element.appendChild(errorDiv);
    } else {
        document.body.appendChild(errorDiv);
    }

    // Auto remove after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Search functionality (for future implementation)
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Theme toggle (for future dark/light mode)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Initialize theme from localStorage
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Lazy loading for images (if images are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Recalculate layouts if needed
    const cartSidebar = document.getElementById('cart-sidebar');
    if (window.innerWidth > 768 && cartSidebar.classList.contains('open')) {
        cartSidebar.style.width = '400px';
    } else if (window.innerWidth <= 768) {
        cartSidebar.style.width = '100vw';
    }
}, 250));

// Service Worker registration (for PWA features if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker can be implemented later for offline functionality
    });
}

// Analytics tracking (placeholder for future implementation)
function trackEvent(category, action, label) {
    console.log(`Analytics: ${category} - ${action} - ${label}`);
    // Integration with Google Analytics or other services can be added here
}

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
    // Handle keyboard navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Performance optimizations
function optimizeImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.onload = function() {
            this.classList.add('loaded');
        };
    });
}

// Debounce function for performance
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

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', function() {
    optimizeImageLoading();
    
    // Optimize scroll events
    const optimizedScrollHandler = debounce(function() {
        // Add any scroll-based logic here if needed
    }, 100);
    
    window.addEventListener('scroll', optimizedScrollHandler);
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Print functionality
function printPage() {
    window.print();
}

// Social sharing (for future implementation)
function shareOnSocial(platform, url = window.location.href, text = document.title) {
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    };

    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 Ponto Nerd - Sistema Inicializado!');
    
    // Track page load
    trackEvent('Page', 'Load', 'Home');
    
    // Initialize theme
    initTheme();
    
    // Initialize lazy loading
    lazyLoadImages();
});
