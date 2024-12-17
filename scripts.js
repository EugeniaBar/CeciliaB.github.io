



                   /* sector product contenedor transparente*/
const product = document.querySelectorAll(".product");
const circle = document.querySelector(".scroll-progress");

window.onscroll = function () {
  const element = document.querySelector(".header");

  let progress =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  circle.innerText = Math.round(progress) + "%";

  if (window.scrollY > 10) {
    element.classList.add("posColor");
  } else {
    element.classList.remove("posColor");
  }
};

window.addEventListener("scroll", scroller);

function scroller() {
  const size = (window.innerHeight / 5) * 4;

  product.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < size) {
      box.classList.add("scroll");
    } else {
      box.classList.remove("scroll");
    }
  });
}

const product2 = document.querySelectorAll(".product2");
const circle2 = document.querySelector(".scroll-progress2");

window.onscroll = function () {
  const element = document.querySelector(".header");

  let progress =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  circle.innerText = Math.round(progress) + "%";

  if (window.scrollY > 10) {
    element.classList.add("posColor");
  } else {
    element.classList.remove("posColor");
  }
};

window.addEventListener("scroll", scroller);

function scroller() {
  const size = (window.innerHeight / 5) * 4;

  product.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < size) {
      box.classList.add("scroll");
    } else {
      box.classList.remove("scroll");
    }
  });
}

                        /*firebase */
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



document.getElementById('myBarChart').addEventListener('mouseenter', function() {
  var newGradient1 = ctx.createLinearGradient(0, 0, 0, 400);
  newGradient1.addColorStop(0, '#FF6347'); // Rojo claro
  newGradient1.addColorStop(1, '#B22222'); // Rojo oscuro
  
  var newGradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  newGradient2.addColorStop(0, '#98FB98'); // Verde claro
  newGradient2.addColorStop(1, '#008000'); // Verde oscuro

  var newGradient3 = ctx.createLinearGradient(0, 0, 0, 400);
  newGradient3.addColorStop(0, '#FFD700'); // Amarillo
  newGradient3.addColorStop(1, '#FF8C00'); // Naranja

  // Cambiar los colores de fondo de las barras
  myBarChart.data.datasets[0].backgroundColor = [newGradient1, newGradient2, newGradient3, gradient4, gradient5, gradient6];
  myBarChart.update(); // Actualiza el gráfico para aplicar los cambios
});

document.getElementById('myBarChart').addEventListener('mouseleave', function() {
  // Restaurar los colores originales
  myBarChart.data.datasets[0].backgroundColor = [gradient1, gradient2, gradient3, gradient4, gradient5, gradient6];
  myBarChart.update();
});
