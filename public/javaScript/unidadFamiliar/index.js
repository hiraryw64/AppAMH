let botonComprobar = document.getElementById("comprobar");
let botonSiguiente = document.getElementById("siguiente");
let resultado = document.getElementById("resultado");

botonSiguiente.style.visibility = "hidden";

botonComprobar.addEventListener("click", () => {
    let puestoFamiliar = document.getElementById("puestoFamiliar").value;
    if (puestoFamiliar == "") {
        botonSiguiente.style.visibility = "hidden";
        resultado.textContent = "Debe indicarse el puesto del participante en su unidad familiar.";
    } else {
        resultado.textContent = "Campos correctos.";
        botonSiguiente.style.visibility = "visible";
    }
});

