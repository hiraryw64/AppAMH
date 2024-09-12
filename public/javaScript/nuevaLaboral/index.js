let situacionLaboral;
let tipoContrato = document.getElementById("tipoContrato");
let valorTipoContrato;
let tipoJornada = document.getElementById("tipoJornada");
let valorTipoJornada;
let tipoSector = document.getElementById("tipoSector");
let valorTipoSector;
let sectoresExpPrevia = document.getElementById("sectoresExpPrevia");
let valorSectoresExpPrevia;
let otrosDatosExpPrevia = document.getElementById("otrosDatosExpPrevia");
let valorOtrosDatosExpPrevia;


let botonComprobar = document.getElementById("comprobar");
let botonSiguiente = document.getElementById("siguiente");
let resultado = document.getElementById("resultado");

botonSiguiente.style.visibility = "hidden";
tipoContrato.style.visibility = "hidden";
tipoJornada.style.visibility = "hidden";
tipoSector.style.visibility = "hidden";
sectoresExpPrevia.style.visibility = "hidden";
otrosDatosExpPrevia.style.visibility = "hidden";

//Radio de permiso de trabajo
let permisoTrabajo = document.querySelectorAll('input[name="permisoTrabajo"]');
permisoTrabajo.forEach((caso) => {
    caso.addEventListener("click", () => {
        let opcionElegida = document.querySelector('input[name="permisoTrabajo"]:checked').value;
        if (opcionElegida == 0) {
            //Tipo contrato, tipo jornada y sector
            tipoContrato.style.visibility = "visible";
            tipoJornada.style.visibility = "visible";
            tipoSector.style.visibility = "visible";
        } else {
            tipoContrato.style.visibility = "hidden";
            tipoJornada.style.visibility = "hidden";
            tipoSector.style.visibility = "hidden";
        }
    });
});

//Radio de experiencia laboral
let experienciaPrevia = document.querySelectorAll('input[name="experienciaLaboral"]');
experienciaPrevia.forEach((caso) => {
    caso.addEventListener("click", () => {
        let opcionElegida = document.querySelector('input[name="experienciaLaboral"]:checked').value;
        if (opcionElegida == 0) {
            sectoresExpPrevia.style.visibility = "visible";
            otrosDatosExpPrevia.style.visibility = "visible";
        } else {
            sectoresExpPrevia.style.visibility = "hidden";
            otrosDatosExpPrevia.style.visibility = "hidden";
        }
    });
});

botonComprobar.addEventListener("click", () => {
    situacionLaboral = document.getElementById("situacionLaboral").value;
    if(situacionLaboral == ""){
        resultado.textContent = "Debe indicarse su situación laboral.";
    } else {
        if(tipoContrato.style.visibility == "visible"){
            valorTipoContrato = tipoContrato.value;
            valorTipoJornada = tipoJornada.value;
            valorTipoSector = tipoSector.value;
        }

        if(sectoresExpPrevia.style.visibility == "visible"){
            valorSectoresExpPrevia = sectoresExpPrevia.value;
            valorOtrosDatosExpPrevia = otrosDatosExpPrevia.value;
        }
        botonSiguiente.style.visibility = "visible";
    }
});