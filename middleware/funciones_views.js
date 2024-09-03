const path = require("path"); // OBLIGATORIO

/**PAGINA DE INDEX */
const paginaIndex = (req, res) => {
    const optionsRuta ={
      root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/index.html", optionsRuta);
  };

  /*----------------------------------------------------------------------------------------------------*/
/** PAGINA DE MENÚ */
const paginaMenu = (req, res) => {
    //Enviamos la dirección de un html
    const optionsRuta = {
      root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/menu.html", optionsRuta); // le enviamos la ruta
  };

/** PAGINA DE NUEVO PARTICIPANTE */
const paginaNuevoParticipante = (req, res) => {
  //Enviamos la dirección de un html
  const optionsRuta = {
    root: path.join(__dirname, "../public"),
  };
  res.sendFile("./views/nuevoParticipante.html", optionsRuta); // le enviamos la ruta
}; 

/** PAGINA DE UNIDAD FAMILIAR */
const paginaUnidadFamiliar = (req, res) => {
  //Enviamos la dirección de un html
  const optionsRuta = {
    root: path.join(__dirname, "../public"),
  };

  //let existeUD = document.querySelector('input[name="existeUD"]:checked');
  //if (existeUD.value == 0){
  //  res.sendFile("./views/buscarUDFamiliar.html", optionsRuta);
  //} else {
    res.sendFile("./views/unidadFamiliar.html", optionsRuta); // le enviamos la ruta
  //}
}; 

/** PAGINA DE NUEVA UNIDAD FAMILIAR */
const paginaNuevaUnidadFamiliar = (req, res) => {
  //Enviamos la dirección de un html
  const optionsRuta = {
    root: path.join(__dirname, "../public"),
  };
  res.sendFile("./views/nuevaUnidadFamiliar.html", optionsRuta); // le enviamos la ruta
}; 

/** PAGINA DE SALUD */
const paginaSalud = (req, res) => {
  //Enviamos la dirección de un html
  const optionsRuta = {
    root: path.join(__dirname, "../public"),
  };
  res.sendFile("./views/salud.html", optionsRuta); // le enviamos la ruta
}; 

  module.exports = {
    paginaMenu,
    paginaNuevoParticipante,
    paginaNuevaUnidadFamiliar,
    paginaUnidadFamiliar,
    paginaSalud
  };