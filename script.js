const hero = document.querySelector('.hero');
const images = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://static.nike.com/a/images/w_960,c_limit/3f78a2ff-773e-430d-b312-c317e7607fa6/image.jpg',
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519'
];
let currentImage = 0;

function changeBackground() {
    currentImage = (currentImage + 1) % images.length;
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                                 url('${images[currentImage]}')`;
}

setInterval(changeBackground, 5000);


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


document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});