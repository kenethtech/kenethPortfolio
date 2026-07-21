

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-badge');
    
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
    // Trigger animation on load
    setTimeout(animateOnScroll, 300);
});

// Form submission feedback
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function() {
        const btn = this.querySelector('button');
        if (btn) {
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            // Reset after 3 seconds (demo)
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        }
    });
}

// Keyboard shortcut: Press '/' to focus search (if you add one later)
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && 
        document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        // You can extend this later
    }
});

console.log('%c✅ Keneth Njoroge Portfolio Loaded Successfully!', 'color: #0d6efd; font-size: 14px; font-weight: bold');