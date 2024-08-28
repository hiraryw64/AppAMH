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
/*-------------------------------------------------------------------*/



/* --- START SERVER --- */
app.listen(5000, function () {
    console.log("Server running");
  }); // OBLIGATORIO