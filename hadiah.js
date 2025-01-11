document.addEventListener("DOMContentLoaded", function() {
  const fotoItems = document.querySelectorAll('.foto-item');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, {
      threshold: 0.1
  });

  fotoItems.forEach(item => {
      observer.observe(item);
  });
});