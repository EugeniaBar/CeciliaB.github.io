document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("typed-text");
    const phrases = ["Data Scientist", "AI Enthusiast", "Python Developer", "Tech Innovator"];
    const typeSpeed = 300; // Velocidad de tipeo (milisegundos)
    const backSpeed = 50; // Velocidad al borrar (milisegundos)
    const delayBetween = 1000; // Pausa entre frases (milisegundos)
    let i = 0;
    let j = 0;
    let isDeleting = false;
  
    function type() {
      const currentPhrase = phrases[i];
      if (isDeleting) {
        element.textContent = currentPhrase.substring(0, j--);
        if (j < 0) {
          isDeleting = false;
          i = (i + 1) % phrases.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, backSpeed);
        }
      } else {
        element.textContent = currentPhrase.substring(0, j++);
        if (j > currentPhrase.length) {
          isDeleting = true;
          setTimeout(type, delayBetween);
        } else {
          setTimeout(type, typeSpeed);
        }
      }
    }
  
    type();
  });
  

  // Selecciona el botón con el nuevo ID

// Muestra/oculta el botón dependiendo del scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Si el usuario scrolleó más de 200px
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// Acción del botón: volver arriba
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Animación suave
  });
});
