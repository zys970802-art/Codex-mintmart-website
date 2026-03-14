const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#main-nav');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// Smooth scroll for anchor links
navLinks?.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#') {
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        navLinks.classList.remove('open');
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Simple form validation + mock submit
const form = document.querySelector('#contact-form');
const hint = document.querySelector('#form-hint');

form?.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  hint.textContent = '已收到您的需求，我们会尽快与您联系。';
  hint.style.color = '#2a4b68';
  form.reset();
});
