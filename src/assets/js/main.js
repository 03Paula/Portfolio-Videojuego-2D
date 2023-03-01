'use strict'
// Función para el tab
function mostrarTab(evt, contenidos ){

    // Definimos las variables
    let i;
    let contenido;
    let links;

    contenido = document.getElementsByClassName('tab__contenido');
    for (i = 0 ; i < contenido.length; i++){
        contenido[i].style.display = "none";
    }

    links = document.getElementsByClassName('tab__link');
    for (i = 0 ; i < links.length; i++){
        links[i].className = links[i].className.replace(" active", "");
    }

    document.getElementById(contenidos).style.display = "block";
    evt.currentTarget.className += " active";

}

// Mostramos por defecto la historia
document.getElementById("mostrarPorDefecto").click();

const enlaces  = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.video__grande')
const cerrar   = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.video').src
        console.log( ruta ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})



var myAccordion = new gianniAccordion({
    elements: ".cartas article",
            trigger: "[data-accordion-element-trigger]",
          content: "[data-accordion-element-content]",
  });
  
  myAccordion.on("elementSelected", (data)=>{
    console.log("elementOpened", data);
  });