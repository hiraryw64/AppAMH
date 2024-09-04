//const db = require("../crear_bd.js");
import { contFormulario, fechaAcogida, nombreParticipante, apellido1, apellido2, dni, genero, fechaNac, fechaEspana, estadoCivil, paisNacimiento, paisNacionalidad, direccion, ciudad, telefono, email, botonPrueba, resultado } from './inserts.js';
contFormulario.style.visibility = "hidden";


botonPrueba.addEventListener("click", () => {
    let contFormulario = document.getElementById("contFormulario");
    let fechaAcogida = document.getElementById("f_Acogida").value;
    let nombreParticipante = document.getElementById("nombre").value;
    let apellido1 = document.getElementById("apellido1").value;
    let apellido2 = document.getElementById("apellido2").value;
    let dni = document.getElementById("dni").value;
    let genero = document.getElementById("genero").value;
    let fechaNac = document.getElementById("fechaNac").value;
    let fechaEspana = document.getElementById("fechaEspana").value;
    let estadoCivil = document.getElementById("estadoCivil").value;
    let paisNacimiento = document.getElementById("paisNacimiento").value;
    let paisNacionalidad = document.getElementById("paisNacionalidad").value;
    let direccion = document.getElementById("direccion").value;
    let ciudad = document.getElementById("ciudad").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;

    let botonPrueba = document.getElementById("prueba");
    let resultado = document.getElementById("resultado");


    let proteccionDatos = document.querySelector('input[name="proteccionDatos"]:checked');

    if (proteccionDatos.value == 0) {
        contFormulario.style.visibility = "visible";
        let empadronamiento = document.querySelector('input[name="empadronamiento"]:checked');
        let nombreNuevo = nombreParticipante;
        resultado.textContent += apellido1;
        resultado.textContent += nombreNuevo;

    } else {
        contFormulario.style.visibility = "hidden";
    }

});