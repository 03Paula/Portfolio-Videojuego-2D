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

//# sourceMappingURL=index.4f492e9b.js.map
