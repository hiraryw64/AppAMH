const sqlite3 = require("sqlite3").verbose();

function crearBase() {
  const db = new sqlite3.Database(
      "movilidadHumana.db",
      sqlite3.OPEN_READWRITE,
      (err) => {
          if (err) {
              console.error(err.message);
          }
          console.log("Conectando");
      },
  );
  db.exec(
      `
      drop table if exists paises;
create table paises(
idPais integer PRIMARY KEY AUTOINCREMENT,
nombrePais varchar(50) unique not null
);


drop table if exists udFamiliar;
create table udFamiliar(
idUdFamiliar integer PRIMARY KEY AUTOINCREMENT,
cantMenores integer not null,
cantEscolarizados integer not null,
miembros integer not null,
situación varchar(50)
);

drop table if exists participantes;
create table participantes(
idParticipante integer PRIMARY KEY AUTOINCREMENT,
nombre varchar(100) not null,
apellido1 varchar(100) not null,
apellido2 varchar(100),
dni varchar(100),
genero varchar(25),
fechaNac date not null,
fechaEspana date not null,
fechaAcogida date not null,
estadoCivil varchar(25) not null,
idPaisNacimiento int not null,
idPaisNacionalidad int not null,
direccion varchar(200),
ciudad varchar(50) not null,
telefono varchar(15) not null,
empadronamiento bool not null,
email varchar(50),
idUdFamiliar int,
puestoFamiliar varchar(25),
idTablaSalud integer not null,
idTablaFormacion integer not null,
idTablaLaboral integer not null,
foreign key (idUdFamiliar) references udFamiliar(idUdFamiliar),
foreign key (idPaisNacimiento) references paises(idPais),
foreign key (idPaisNacionalidad) references paises(idPais)
);


drop table if exists edadesMenores;
create table edadesMenores(
idFamilia integer not null,
idMenor integer PRIMARY KEY AUTOINCREMENT,
edad integer not null,
foreign key (idFamilia) references udFamiliar(idUdFamiliar)
);


drop table if exists salud;
create table salud(
idSaludParticipante integer PRIMARY KEY,
cuestionesGraves bool not null,
especificacionesGraves varchar(250),
discapacidadReconocida bool not null,
especificacionesDiscapacidad varchar(250),
asistenciaSanitaria varchar(50),
  FOREIGN key (idSaludParticipante) references participantes(idparticipante)
);


drop table if exists formacion;
create table formacion(
idFormacionParticipante integer primary key,
nivelEstudios varchar(100) not null,
especialidad varchar(100) not null,
formacionComplementaria varchar(100),
otrosDatos varchar(200),
tieneCV bool not null,
tieneCarnetAlimentos bool not null,
tieneEstudiosHomologados bool not null,
tieneCarnetConducir bool not null,
tieneCarnetConvalidado bool not null,
  FOREIGN key (idFormacionParticipante) REFERENCES participantes(idparticipante)
);


drop table if exists laboral;
create table laboral(
idLaboralParticipante integer primary key,
premisoTrabajo bool not null,
inscritoDemandante bool not null,
experienciaLaboral bool not null,
situacionLaboral varchar(50) not null,
tipoContrato varchar(25),
tipoJornada varchar(25),
tipoSector varchar(25),
sectoresExpPrevia varchar(100),
otrosDatosExpPrevia varchar(250),
  FOREIGN key (idLaboralParticipante) REFERENCES participantes(idparticipante)
);
      `,
      (err) => {
          if (err) {
              console.error(err.message);
          }
          console.log("Base de datos creada");
      },
  );
  return db;
}

module.exports = crearBase();
