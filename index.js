// Obtén una referencia al elemento del encabezado
var header = document.getElementById("header");

// Asigna una función al evento de desplazamiento
window.addEventListener("scroll", function() {
    // Verifica si el desplazamiento es mayor que cero
    if (window.pageYOffset > 0) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});