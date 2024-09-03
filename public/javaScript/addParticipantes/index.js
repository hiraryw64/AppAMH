//const db = require("../crear_bd.js");
import { contFormulario, fechaAcogida, nombreParticipante, apellido1, apellido2, dni, genero, fechaNac, fechaEspana, estadoCivil, paisNacimiento, paisNacionalidad, direccion, ciudad, telefono, email, botonPrueba, resultado } from './inserts.js';
contFormulario.style.visibility = "hidden";


botonPrueba.addEventListener("click", () => {
    let proteccionDatos = document.querySelector('input[name="proteccionDatos"]:checked');

    if (proteccionDatos.value == 0){
        contFormulario.style.visibility = "visible";
        let empadronamiento = document.querySelector('input[name="empadronamiento"]:checked');
    resultado.textContent += estadoCivil.value;
        
    } else {
        contFormulario.style.visibility = "hidden";
    }
    
});