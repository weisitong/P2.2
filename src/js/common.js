// Common JavaScript functionality for English pages

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.addEventListener('click', function(e) {
            if (e.target.classList.contains('mobile-menu-item')) {
                mobileMenu.classList.add('hidden');
            }
        });

        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        }, { passive: true });
    }
}

// Initialize
function initializeCommon() {
    initMobileMenu();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCommon, { once: true });
} else {
    initializeCommon();
}
