// Smooth scroll cho các liên kết nội bộ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Nút "Lên đầu trang" (Back to top button)
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '⬆️';
backToTopBtn.id = 'backToTopBtn';
document.body.appendChild(backToTopBtn);

backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '30px';
backToTopBtn.style.right = '30px';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.fontSize = '20px';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.backgroundColor = '#0d6efd';
backToTopBtn.style.color = 'white';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
backToTopBtn.style.display = 'none';
backToTopBtn.style.zIndex = '999';

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hiệu ứng load trang (fade-in)
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = 1;
    }, 100);
});