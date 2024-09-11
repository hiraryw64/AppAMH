let miembros;
let situacion;
let cantMenores;
let cantEscolarizados;
let totalCampos = 0;
let contadorCampos = 0;


let botonComprobar = document.getElementById("comprobar");
let botonSiguiente = document.getElementById("siguiente");
let resultado = document.getElementById("resultado");

botonSiguiente.style.visibility = "hidden";

botonComprobar.addEventListener("click", () => {
    miembros = document.getElementById("miembros").value;
    situacion = document.getElementById("situacion").value;
    cantMenores = document.getElementById("cantMenores").value;
    cantEscolarizados = document.getElementById("cantEscolarizados").value;

    let divMenores;
    let nuevoDiv;
    let labelEdadMenores;
    let inputEdadMenores;
    let revisarEdades;
    let cantMenoresAnterior;

    if (miembros == "") {
        resultado.textContent = "Debe indicarse la cantidad de miembros que forman la unidad familiar.";
    } else {
        if (situacion == "") {
            resultado.textContent = "Debe indicarse la situación familiar.";
        } else {
            if (cantMenores == "") {
                resultado.textContent = "Debe indicarse la cantidad de menores que forman la unidad familiar.";
            } else {
                if (cantMenores !== cantMenoresAnterior) {
                    cantMenoresAnterior = cantMenores;
                    divMenores = document.getElementById("divMenores");
                    while (divMenores.childElementCount > 0) {
                        divMenores.removeChild(divMenores.lastChild);
                    }

                    for (let i = 0; i < cantMenores; i++) {
                        nuevoDiv = document.createElement("div");
                        nuevoDiv.className = "div_bloque";

                        labelEdadMenores = document.createElement("label");
                        labelEdadMenores.textContent = "Edad del menor";

                        inputEdadMenores = document.createElement("input");
                        inputEdadMenores.className = "inputTexto";
                        inputEdadMenores.setAttribute("type", "number");
                        inputEdadMenores.setAttribute("pattern", "\d*");
                        inputEdadMenores.setAttribute("placeholder", " Introduzca la edad del menor");
                        inputEdadMenores.id = "edad" + i;

                        nuevoDiv.appendChild(labelEdadMenores);
                        nuevoDiv.appendChild(inputEdadMenores);
                        divMenores.appendChild(nuevoDiv);
                    }
                }

                /*if (resultado.textContent != "Debe indicarse la edad de todos los menores.") {
                        botonSiguiente.style.visibility = "visible";
                        resultado.textContent = "Campos correctos.";
                    }*/

                if (cantEscolarizados == "") {
                    resultado.textContent = "Debe indicarse la cantidad de menores que están escolarizados.";
                } else {
                    for (let i = 0; i < cantMenores; i++) {
                        revisarEdades = document.getElementById("edad" + i);
                        if (revisarEdades == "") {
                            resultado.textContent += "edad" + i;
                            resultado.textContent = "Debe indicarse la edad de todos los menores.";
                        }
                    }
                }
            }
        }
    }
});