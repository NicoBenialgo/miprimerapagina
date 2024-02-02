// PARTE 1 - Código usado para realizar cambios en el contenido de etiquetas
// let texto1 = "Curso Egg";
// let texto = document.querySelector("#cambio-nombre");
// texto.innerHTML = texto1;
// let textoH2 = texto.innerText;
// console.log(textoH2);
// if(textoH2 == texto1) {
//     texto.innerHTML = "Juegos";
// };
// FIN DE PARTE 1

// PARTE 2 - Código usado para cambiar contenido de una etiqueta p usando una función
// let nombre = "Nicolas Benialgo";
// let pais = "Argentina";
// let edad = 18;
// let gustos = "viajar, el helado y aprender programación";
// let parrafo = document.querySelector(".parrafo1");

// function cambiarTexto(nombre, pais, edad, gustos) {
//     let contenido = `Mi nombre es ${nombre}, nací y crecí dentro del país de ${pais} y tengo ${edad} años. Mis gustos son: ${gustos}.`;
//     return contenido;
// };

// parrafo.innerText = cambiarTexto(nombre, pais, edad, gustos);
// FIN DE PARTE 2

// PARTE 3 - Interactividad para la barra de navegación en pantallas menores a 768px
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};