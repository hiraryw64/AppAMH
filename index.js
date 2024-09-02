//** IMPORTAMOS */
const {paginaMenu, paginaNuevoParticipante, paginaNuevaUnidadFamiliar, paginaUnidadFamiliar, paginaSalud} = require("./middleware/funciones_views.js");


/** --- CREAMOS LAS CONSTANTES QUE NOS DESCARGARAN, INDICAN LA RUTA Y EJECUTAN "express" --- */

const express = require("express"); // OBLIGATORIO
const path = require("path"); // OBLIGATORIO
const app = express(); // OBLIGATORIO

/** --- AUTORIZACION --> OBLIGATORIO, necesario para leer el secreto --- */
//require("dotenv").config();

/** --- INDICAMOS QUE TIENE QUE USAR : json y url --- */

app.use(express.json()); // OBLIGATORIO
//app.use(express.urlencoded({ extended: true })); // OBLIGATORIO

const carpetaStatic = path.join(__dirname, "public"); // OBLIGATORIO
app.use(express.static(carpetaStatic)); // OBLIGATORIO


/*-----------------MOVERSE ENTRE DIFERENTES PAGINAS-----------------*/
//Página Menu
app.get("/pagMenu", paginaMenu);

//Página Nuevo Participante
app.get("/pagNuevoParticipante", paginaNuevoParticipante);

//Página Nueva Unidad Familiar
app.get("/pagNuevaUnidadFamiliar", paginaNuevaUnidadFamiliar);

//Página Existe Unidad Familiar
app.get("/pagUnidadFamiliar", paginaUnidadFamiliar){
  // revisar condiciones, si if == no --> entrar en paginaNuevaunidadFamiliar, si if == si --> recoger datos de la ud familiar existente y abrir pagSalud
}

//Página Salud
app.get("/pagSalud", paginaSalud);


/* --- START SERVER --- */
app.listen(5000, function () {
    console.log("Server running");
  }); // OBLIGATORIO