//const db = require("../crear_bd.js");
let fechaAcogida;
let nombreParticipante;
let apellido1;
let apellido2;
let dni;
let genero;
let fechaNac;
let fechaEspana;
let estadoCivil;
let paisNacimiento;
let paisNacionalidad;
let direccion;
let ciudad;
let telefono;
let email;
let empadronamiento;  

let contFormulario = document.getElementById("contFormulario");
let botonComprobar = document.getElementById("comprobar");
let botonSiguiente = document.getElementById("siguiente");
let botonBorrar = document.getElementById("borrar");
let resultado = document.getElementById("resultado");

contFormulario.style.visibility = "hidden";
botonSiguiente.style.visibility = "hidden";


let proteccionDatos = document.querySelectorAll('input[name="proteccionDatos"]');
proteccionDatos.forEach((caso) => {
    caso.addEventListener("click", () => {
        let opcionElegida = document.querySelector('input[name="proteccionDatos"]:checked').value;
        if (opcionElegida == 0) {
            contFormulario.style.visibility = "visible";
            botonBorrar.style.visibility = "visible";
            botonComprobar.style.visibility = "visible";
            resultado.textContent = "";
        } else {
            resultado.textContent = "No se pueden recoger datos de las personas que no hayan firmado la ley de protección de datos.";
            contFormulario.style.visibility = "hidden";
            botonBorrar.style.visibility = "hidden";
            botonComprobar.style.visibility = "hidden";
            botonSiguiente.style.visibility = "hidden";
        }
    });
});


botonComprobar.addEventListener("click", () => {
    fechaAcogida = document.getElementById("f_Acogida").value;
    nombreParticipante = document.getElementById("nombre").value;
    apellido1 = document.getElementById("apellido1").value;
    apellido2 = document.getElementById("apellido2").value;
    dni = document.getElementById("dni").value;
    genero = document.getElementById("genero").value;
    fechaNac = document.getElementById("fechaNac").value;
    fechaEspana = document.getElementById("fechaEspana").value;
    estadoCivil = document.getElementById("estadoCivil").value;
    paisNacimiento = document.getElementById("paisNacimiento").value;
    paisNacionalidad = document.getElementById("paisNacionalidad").value;
    direccion = document.getElementById("direccion").value;
    ciudad = document.getElementById("ciudad").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    empadronamiento = document.querySelector('input[name="empadronamiento"]:checked');    

    //Comprobaciones
    if (fechaAcogida == "") {
        resultado.textContent = "Debe indicarse la fecha de acogida.";
    } else {
        if (nombreParticipante == "") {
            resultado.innerHTML = "Debe indicarse el nombre.";
        } else {
            if (apellido1 == "") {
                resultado.textContent = "Debe indicarse al menos un apellido.";
            } else {
                if (fechaNac == "") {
                    resultado.textContent = "Debe indicarse la fecha de nacimiento.";
                } else {
                    if (fechaEspana == "") {
                        resultado.textContent = "Debe indicarse la fecha de llegada a España.";
                    } else {
                        if (paisNacimiento == "") {
                            resultado.textContent = "Debe indicarse el país de nacimiento.";
                        } else {
                            if (paisNacionalidad == "") {
                                resultado.textContent = "Debe indicarse el país de nacionalidad.";
                            } else {
                                if (ciudad == "") {
                                    resultado.textContent = "Debe indicarse la ciudad.";
                                } else {
                                    if (telefono == "") {
                                        resultado.textContent = "Debe indicarse un número de teléfono.";
                                    } else {
                                        if (empadronamiento == null) {
                                            resultado.textContent += "Debe indicarse si el participante está empadronado.";
                                        } else {
                                            resultado.textContent = "Campos correctos.";
                                            botonSiguiente.style.visibility = "visible";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});