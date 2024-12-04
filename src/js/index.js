document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращение отправки формы

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Симуляция успешной отправки данных с использованием LocalStorage
    localStorage.setItem(
      "contactFormData",
      JSON.stringify({ name, email, message })
    );

    document.getElementById("result").innerHTML =
      "Thank you for contacting us! Your message has been saved locally.";
    document.getElementById("contactForm").reset(); // Сброс формы
  });

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.btn--bounce-left, .btn--bounce-right');
    const works = document.querySelectorAll('.works__card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio === 1) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 1.0 });

  const observerWorks = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("visible");
        observerWorks.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  buttons.forEach(button => {
    observer.observe(button);
  });

    works.forEach(work => {
        observerWorks.observe(work);
    });
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
