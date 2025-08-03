// Simple button click handler
document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('Thank you for your interest! We will contact you soon.');
        });
    }
});

// Simple smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
