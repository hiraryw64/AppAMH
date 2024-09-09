let miembros;
let situacion;
let cantMenores;
let cantEscolarizados;
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

    if (miembros == "") {
        resultado.textContent = "Debe indicarse la cantidad de miembros que forman la unidad familiar.";
    } else {
        if (situacion == "") {
            resultado.textContent = "Debe indicarse la situación familiar.";
        } else {
            if (cantMenores == "") {
                resultado.textContent = "Debe indicarse la cantidad de menores que forman la unidad familiar.";
            } else {
                //ACORDARME DE COLOCAR TANTOS CAMPOS COMO MENORES HAYA
                let divMenores = document.getElementById("divMenores");

                let nuevoDiv = document.createElement("div");
                let labelEdadMenores = document.createElement("label");
                labelEdadMenores.textContent = "Edad del menor";
                
                nuevoDiv.appendChild(labelEdadMenores);
                nuevoDiv.className = "definir";
                divMenores.appendChild(nuevoDiv);

                //let inputEdadMenores = document.createElement("input");




















                if (cantEscolarizados == "") {
                    resultado.textContent = "Debe indicarse la cantidad de menores que están escolarizados.";
                } else {
                    //Bucle para revisar tantos campos como menores haya


                    botonSiguiente.style.visibility = "visible";
                    resultado.textContent = "Campos correctos.";
                }
            }
        }
    }
});