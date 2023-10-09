const luna   = document.getElementById("luna");
const tierra = document.getElementById("tierra");

const line1  = document.getElementById("line1");
const line2  = document.getElementById("line2");
const line3  = document.getElementById("line3");
const line4  = document.getElementById("line4");

const triangulo = document.getElementById("triangulo");
const triangulo_inv = document.getElementById("triangulo-inverso");
const video     = document.getElementById("aceleracion");

var duracion = 2;
var doble_duracion = 4;
video.addEventListener("input", () => {
  duracion = video.value;
  doble_duracion = video.value*2;
  luna.style.animation = "eliptico "+duracion+"s ease-in-out alternate infinite";
  line1.style.animation = "linea1  "+duracion+"s ease-in-out alternate infinite";
  line2.style.animation = "linea2  "+duracion+"s ease-in-out alternate infinite";
  line3.style.animation = "linea3  "+duracion+"s ease-in-out alternate infinite";
  line4.style.animation = "linea4  "+duracion+"s ease-in-out alternate infinite";

  triangulo_inv.style.animation = "eliptico-triangulo-inverso "+duracion+"s alternate ease-in-out infinite, ocultar-luna "+doble_duracion+"s infinite forwards";

  luna.style.animation = "animation: scroll-luna "+doble_duracion+"s linear infinite, eliptico "+duracion+"s ease-in-out alternate infinite, ocultar-luna "+doble_duracion+"s infinite";

  triangulo.style.animation = "eliptico-triangulo "+duracion+"s alternate ease-in-out infinite, ocultar-triangulo "+doble_duracion+"s infinite forwards";
});