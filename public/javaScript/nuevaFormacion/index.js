let nivelEstudios;

let botonComprobar = document.getElementById("comprobar");
let botonSiguiente = document.getElementById("siguiente");
let resultado = document.getElementById("resultado");

botonSiguiente.style.visibility = "hidden";

botonComprobar.addEventListener("click", () => {
    nivelEstudios = document.getElementById("nivelEstudios").value;

    if (nivelEstudios == "") {
        resultado.textContent = "Debe indicarse el nivel de estudios.";
    } else {
        resultado.textContent = "Campos correctos.";
        botonSiguiente.style.visibility = "visible";
    }
});