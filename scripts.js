
// Smooth scrolling for navigation links
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

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Mobile menu toggle 
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('nav ul');

// Toggle menu
mobileMenu.addEventListener('click', (e) => {
  e.stopPropagation(); // Impede fechar ao clicar no ícone
  navList.classList.toggle('active');
});

// Fecha ao clicar em um link
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// Fecha ao clicar fora do menu
document.addEventListener('click', (e) => {
  if (!navList.contains(e.target) && !mobileMenu.contains(e.target)) {
    navList.classList.remove('active');
  }
});


mobileMenu.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Header background change on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector('header');

  if (scrollTop > 100) {
    header.style.background = 'rgba(13, 13, 13, 0.95)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.background = '#0d0d0d';
    header.style.backdropFilter = 'none';
  }

  lastScrollTop = scrollTop;
});

// Add loading animation to cards
const cards = document.querySelectorAll('.servico-card, .portfolio-card');
cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all other items
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('active');
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});