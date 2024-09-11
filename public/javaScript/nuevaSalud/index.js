let cuestionesGraves;
let especificarCG;
let especificarDiscapacidad = document.getElementById("especificacionesDiscapacidad");
let asistenciaSanitaria;


let botonComprobar = document.getElementById("comprobar");
let botonSiguiente = document.getElementById("siguiente");
let resultado = document.getElementById("resultado");

botonSiguiente.style.visibility = "hidden";

let discapacidad = document.querySelectorAll('input[name="discapacidadReconocida"]');
discapacidad.forEach((caso) => {
    caso.addEventListener("click", () => {
        let opcionElegida = document.querySelector('input[name="discapacidadReconocida"]:checked').value;
        if (opcionElegida == 0) {
            especificarDiscapacidad.style.visibility = "hidden";
        }
    });
});





botonComprobar.addEventListener("click", () => {
    asistencia = document.getElementById("asistenciaSanitaria").value;

    if (asistencia.value == "") {
        resultado.textContent = "Debe indicarse su situación con respecto a la asistencia sanitaria.";
    }
});