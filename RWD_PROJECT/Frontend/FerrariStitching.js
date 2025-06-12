// Bildwechsler für Hero-Bereich
const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Automatischer Bildwechsel alle 4 Sekunden (4000 Millisekunden)
setInterval(nextImage, 4000);

// Initiales Anzeigen des ersten Bildes
showImage(currentIndex);

// Menü-Schließen bei Klick auf Element
const menuLinks = document.querySelectorAll('.menu a');
const menuToggle = document.getElementById('menu-toggle');

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuToggle.checked = false;
    });
});

// Smooth Scrolling für Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset für Header-Höhe
                behavior: 'smooth'
            });
        }
    });
});

// Handling für Kontaktformular
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form-Daten sammeln
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Hier kann später die Logik für die Formularverarbeitung eingefügt werden
        
        // Bestätigungsnachricht anzeigen
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
        
        // Formular zurücksetzen
        this.reset();
    });
}
        if (targetElement) {
            // Schließe Mobilmenü wenn geöffnet
            document.getElementById('menu-toggle').checked = false;
            
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset für Header-Höhe
                behavior: 'smooth'
            });
        }

// Scroll Animation für Content-Sektionen
const sections = document.querySelectorAll('.content-section');

// Intersection Observer für Scroll-Animationen
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15 // Trigger, wenn 15% des Elements sichtbar sind
});

// Beobachte alle Content-Sektionen
sections.forEach(section => {
    observer.observe(section);
});