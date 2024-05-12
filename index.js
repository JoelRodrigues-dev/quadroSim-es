const imgsContainer = document.querySelector(".carrossel .container");
const img = document.querySelectorAll(".carrossel .container img");

console.log(imgsContainer);

console.log(img);

let contador = 0;

function slider() {
  contador++;
  if (contador > img.length - 1) {
    contador = 0;
  }

  imgsContainer.style.transform = `translateX(${-contador * 100}%)`;
}

setInterval(slider, 6000);
