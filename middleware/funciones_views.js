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
  res.sendFile("./views/unidadFamiliar.html", optionsRuta); // le enviamos la ruta
}; 

  module.exports = {
    paginaMenu,
    paginaNuevoParticipante,
    paginaUnidadFamiliar
  };