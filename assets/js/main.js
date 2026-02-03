// Mobile Menu functionality
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    });

    document.querySelectorAll('.glass-card, .section-title, .glass-panel').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Carousel Auto Scroll
    const tracks = document.querySelectorAll('.carousel-track');
    tracks.forEach(track => {
        const slides = track.children;
        if (slides.length > 1) {
            let index = 0;
            setInterval(() => {
                index++;
                if (index >= slides.length) {
                    index = 0;
                }
                track.style.transition = 'transform 0.5s ease-in-out';
                track.style.transform = `translateX(-${index * 100}%)`;
            }, 3000); // 3 seconds interval
        }
    });

});

// Mock Contact Form
function sendMail(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
        alert('Message sent successfully! (Mock)');
        event.target.reset();
        btn.innerText = originalText;
        btn.disabled = false;
    }, 1500);

    return false;
}
