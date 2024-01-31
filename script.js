let texto1 = "Curso Egg";

let texto = document.querySelector("#cambio-nombre");
texto.innerHTML = texto1;

// vigesimocuarto intento del condicionar
let textoH2 = texto.innerText;
console.log(textoH2);

if(textoH2 == texto1) {
    texto.innerHTML = "Juegos";
};

// segundo intento de la función de cambiar texto
let nombre = "Nicolas Benialgo";
let pais = "Argentina";
let edad = 18;
let gustos = "viajar, el helado y aprender programación";

let parrafo = document.querySelector(".parrafo1");

// function cambiarTexto(nombre, pais, edad, gustos) {
//     let contenido = `Mi nombre es ${nombre}, nací y crecí dentro del país de ${pais} y tengo ${edad} años. Mis gustos son: ${gustos}.`;
//     return contenido;
// };

// parrafo.innerText = cambiarTexto(nombre, pais, edad, gustos);

// Check btn js
// let menu_responsive = document.querySelector(".checkbtn");
// menu_responsive.onclick = function () {
//     navBar = document.querySelector(".navbar");
//     navBar.classList.toggle("active");
// };