// Menülogik
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const offcanvas = document.getElementById('offcanvas');
const overlay = document.getElementById('overlay');

function openMenu() {
  offcanvas.classList.add('open');
  overlay.classList.add('active');
}

function closeOffcanvas() {
  offcanvas.classList.remove('open');
  overlay.classList.remove('active');
}

menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeOffcanvas);
overlay.addEventListener('click', closeOffcanvas);

// Schließe Menü beim Klick auf Link
const menuLinks = document.querySelectorAll('.offcanvas-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', closeOffcanvas);
});

// Hero-Bilder wechseln
const heroImages = document.querySelectorAll('.hero-image');
let currentIndex = 0;

function showNextHeroImage() {
  heroImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % heroImages.length;
  heroImages[currentIndex].classList.add('active');
}

if (heroImages.length > 0) {
  heroImages[0].classList.add('active');
  setInterval(showNextHeroImage, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel-image");
  const section = document.querySelector(".aesthetik-scroll-section");

  window.addEventListener("scroll", () => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY + window.innerHeight / 2;

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      const progress = (scrollY - sectionTop) / sectionHeight;
      const index = Math.floor(progress * images.length);

      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }
  });
});
