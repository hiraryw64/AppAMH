let especificarCG = document.getElementById("especificacionesGraves");
let textoCuestiones = document.getElementById("textoCuestiones");
let especificarDiscapacidad = document.getElementById("especificacionesDiscapacidad");
let textoEspecificaciones = document.getElementById("textoEspecificaciones");
let asistencia;


let botonComprobar = document.getElementById("comprobar");
let botonSiguiente = document.getElementById("siguiente");
let resultado = document.getElementById("resultado");

botonSiguiente.style.visibility = "hidden";

let cuestionesGraves = document.querySelectorAll('input[name="cuestionesGraves"]');
cuestionesGraves.forEach((caso) => {
    caso.addEventListener("click", () => {
        let opcionElegida = document.querySelector('input[name="cuestionesGraves"]:checked').value;
        if (opcionElegida == 0) {
            especificarCG.style.visibility = "visible";
            textoCuestiones.style.visibility = "visible";
        } else {
            especificarCG.style.visibility = "hidden";
            textoCuestiones.style.visibility = "hidden";
        }
    });
});

let discapacidad = document.querySelectorAll('input[name="discapacidadReconocida"]');
discapacidad.forEach((caso) => {
    caso.addEventListener("click", () => {
        let opcionElegida = document.querySelector('input[name="discapacidadReconocida"]:checked').value;
        if (opcionElegida == 0) {
            especificarDiscapacidad.style.visibility = "visible";
            textoEspecificaciones.style.visibility = "visible";
        } else {
            especificarDiscapacidad.style.visibility = "hidden";
            textoEspecificaciones.style.visibility = "hidden";
        }
    });
});

botonComprobar.addEventListener("click", () => {
    asistencia = document.getElementById("asistenciaSanitaria").value;
    if (asistencia == "") {
        resultado.textContent = "Debe indicarse su situación con respecto a la asistencia sanitaria.";
    } else {
        resultado.textContent = "Campos correctos.";
        botonSiguiente.style.visibility = "visible";
    }
});