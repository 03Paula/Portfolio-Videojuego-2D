"use strict";
// Función para el tab
function mostrarTab(evt, contenidos) {
    // Definimos las variables
    let i;
    let contenido;
    let links;
    contenido = document.getElementsByClassName("tab__contenido");
    for(i = 0; i < contenido.length; i++)contenido[i].style.display = "none";
    links = document.getElementsByClassName("tab__link");
    for(i = 0; i < links.length; i++)links[i].className = links[i].className.replace(" active", "");
    document.getElementById(contenidos).style.display = "block";
    evt.currentTarget.className += " active";
}
// Mostramos por defecto la historia
document.getElementById("mostrarPorDefecto").click();
// Para la galeria de videos
const contenedor = document.getElementById("contenedor");
let mainVideo = document.querySelector(".main-video video");
const videos = document.querySelectorAll(".videos");
const cerrar = document.querySelector(".cerrar");
for(let i = 0; i < videos.length; i++)videos[i].addEventListener("click", (e)=>{
    const target = e.target;
    contenedor.className += " active";
    target.className += " active"; // Añadimos la clase active en el video.
    let src = document.querySelector(".videos.active source").src;
    mainVideo.src = src; // cambiamos la src que teniamos predeterminada por el video en el que se ha hecho click.
    console.log(mainVideo);
    console.log(contenedor);
    console.log(src);
    // Cuando cliqueamos en la cruz eliminamos la clase active.
    cerrar.onclick = ()=>{
        contenedor.classList.remove("active");
        target.classList.remove("active");
    };
});

//# sourceMappingURL=index.4f492e9b.js.map
