document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.fill');
    
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-out';
            bar.style.width = width;
        }, 300);
    });

    const card = document.querySelector('.dashboard-card');
    document.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 45;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
  
  document.querySelector('.btn-primary').addEventListener('click', function(e) {
    this.style.transform = 'scale(0.95)';
    this.style.opacity = '0.8';
});
});
const openBtn = document.getElementById('openDemoBtn');
const modal = document.getElementById('videoModal');
const closeBtn = document.getElementById('closeModalBtn');
const video = document.getElementById('demoVideo');

openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    video.play();
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    video.pause();
    video.currentTime = 0;
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeBtn.click();
    }
});
const burger = document.getElementById('burgerMenu');
const nav = document.getElementById('navContainer');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active'); 
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});
