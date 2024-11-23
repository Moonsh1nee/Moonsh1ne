document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращение отправки формы

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Симуляция успешной отправки данных с использованием LocalStorage
  localStorage.setItem('contactFormData', JSON.stringify({ name, email, message }));

  document.getElementById('result').innerHTML =
    'Thank you for contacting us! Your message has been saved locally.';
  document.getElementById('contactForm').reset(); // Сброс формы
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();
