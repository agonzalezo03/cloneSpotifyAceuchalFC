// Obtén una referencia al elemento del encabezado
var header = document.getElementById("header");
var containerDelIndex = document.querySelector(".container");

// Asigna una función al evento de desplazamiento en el contenedor específico
containerDelIndex.addEventListener("scroll", function() {
    // Verifica si el desplazamiento es mayor que cero en el contenedor
    if (containerDelIndex.scrollTop > 0) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});
