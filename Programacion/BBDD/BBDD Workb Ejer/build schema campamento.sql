CREATE DATABASE campamento;

USE campamento;

CREATE TABLE campista(
	campista_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    dni VARCHAR(10) UNIQUE NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    direccion VARCHAR(150) NOT NULL,
    cp VARCHAR(5) NOT NULL,
    poblacion VARCHAR(75) NOT NULL,
    provincia VARCHAR(75) NOT NULL,
	telefono VARCHAR(15) NOT NULL,
    ano_nacimiento YEAR NOT NULL,
    ano_alta YEAR NOT NULL
);

ALTER TABLE campista
MODIFY COLUMN nombre VARCHAR(150) NOT NULL;

ALTER TABLE campista
MODIFY COLUMN cp VARCHAR(5) NOT NULL;

ALTER TABLE campista
MODIFY COLUMN provincia VARCHAR(75) NOT NULL;

INSERT INTO campista 
(dni,nombre,direccion,cp,poblacion,provincia,telefono,ano_nacimiento,ano_alta) 
VALUES
('11111111A','Antonio Pérez López','c/Azucena nº5 4ºD', '32004', 'Ourense', 'Ourense', '911111111', 2001, 2014 ),
('22222222B', 'Luisa Méndez Rodríguez', 'Plaza Mayor nº 26 2º', '40523', 'Bande', 'Ourense', '922222222', 2002, 2014),
('33333333C', 'Juana Flecha González', 'c/ de la Esperanza nº 45 6ºC', '32003', 'Ourense', 'Ourense', '633333333', 2006, 2015),
('44444444D', 'Ana Diz Rial', 'c/ Río Avia nº 6 4ºA', '52368', 'Ribadavia', 'Ourense', '944444444', 2009,  2015 ),
('55555555E', 'Andrés Soto Estévez', 'Avda. Portugal nº 146 5ºD', '32005', 'Ourense', 'Ourense', '655555555', 2008,  2014),
('66666666F', 'Adrián Gómez Cid', 'c/ Monte Medo nº 29 4ºC', '32002', 'Ourense', 'Ourense', '966666666', 2007,  2014),
('77777G', 'Susana Montes Rivo', 'c/ Ourense nº 14 3ºB',  '45612', 'Celanova', 'Ourense', '677777777', 2006, 2015),
('88888888H', 'Lucía Barral Conde', 'Avda. Universida de nº 15 4º C', '32003', 'Ourense', 'Ourense', '988888888', 2005, 2015)
;

SELECT * FROM campista;

CREATE TABLE actividad(
	actividad_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(256) NOT NULL,
    edad_minima TINYINT UNSIGNED NOT NULL,
    ninos_maximo SMALLINT UNSIGNED NOT NULL,
    poblacion VARCHAR(75) NOT NULL,
    provincia VARCHAR(75) NOT NULL
);

ALTER TABLE actividad
MODIFY COLUMN poblacion VARCHAR(75) NOT NULL;

INSERT INTO actividad (nombre, descripcion, edad_minima, ninos_maximo, poblacion, provincia)
VALUES
('Senderismo',  'Ruta por el monte en los alrededores de Ourense realizando paradas para observar la flora y la fauna…', 7,  10,  'Ourense',  'Ourense' ),
('Hípica', 'Conocer cuidados de los caballos y recibir instrucciones básicas y montar con monitor.', 9,  10,  'Monterrei',  'Ourense'),
('Juegos tradicionales', 'Visita a Melide para ver la “I Mostra de Xogos Tradicionais da Terra de Melide” y el “I Campionato de Tirapedras da Galiza Central.” organizada por la Asociación Galega do Xogo Popular e Tradicional.', 7,  15,  'Melide',  'Ourense' ),
('Tenis',  'Reglas del tenis. Jugar de dos con varios compañeros. Jugar en parejas con diferentes contrincantes y compañeros.', 7,  14,  'Ourense',  'Ourense'),
('Piscina',  'Normas higiénicas. Consejos natación. Tiempo libre.', 10,  15,  'Monterrei',  'Ourense'),
('Playa',  'Visita a la playa. Normas básicas Recogida de basura. Recogida de algas. Tiempo libre.', 10,  15,  'Sanxenxo', 'Pontevedra'),
('Esquí',  'Visita a la estación de Manzaneda. Vista de instalaciones. Consejos para esquiar.', 7,  15, 'Manzaneda', 'Ourense' )
;
SHOW TABLES;
CREATE TABLE chico_actividad(
    campista_id INTEGER UNSIGNED NOT NULL,
    actividad_id INTEGER UNSIGNED NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    fecha_fin DATETIME NOT NULL,
    observaciones VARCHAR(300),
    PRIMARY KEY (campista_id, actividad_id),
    CONSTRAINT fk_campista_1 FOREIGN KEY (campista_id ) REFERENCES campista (campista_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_actividad_1 FOREIGN KEY (actividad_id) REFERENCES actividad (actividad_id) ON DELETE RESTRICT ON UPDATE CASCADE
    
);
SELECT * FROM campista;
SELECT * FROM actividad;
INSERT INTO chico_actividad (campista_id, actividad_id,fecha_inicio, fecha_fin, observaciones)
VALUES
(2, 3, '2014-07-25 0:00:00', '2014-07-25 0:00:00', 'Le hubiera gustado asistir más tiempo'),
(2, 4, '2014-08-01 0:00:00', '2014-08-01 0:00:00', 'Es lo suyo'),
(3, 1, '2014-07-15 0:00:00', '2014-07-15 0:00:00', 'Le ha gustado'),
(3, 3, '2014-07-24 0:00:00', '2014-07-25 0:00:00', 'Ha conocido nuevos juegos'),
(3, 4, '2014-08-01 0:00:00', '2014-08-01 0:00:00', 'Quiere convertirse en profesional'),
(4, 1, '2014-07-15 0:00:00', '2014-07-15 0:00:00', 'Ha aprendido'),
(4, 2, '2014-07-16 0:00:00', '2014-07-23 0:00:00', 'Prefiere otras actividades'),
(4, 3, '2014-07-24 0:00:00', '2014-07-25 0:00:00', 'Los pondrá en práctica'),
(4, 4, '2014-08-01 0:00:00', '2014-08-01 0:00:00', 'Se cansa enseguida'),
(5, 1, '2014-07-15 0:00:00', '2014-07-15 0:00:00', 'No estaba interesado'),
(5, 3, '2014-07-24 0:00:00', '2014-07-25 0:00:00', 'No le han gustado'),
(5, 4, '2014-08-01 0:00:00', '2014-08-01 0:00:00', 'No le gusta seguir las reglas del juego'),
(6, 5, '2014-08-15 0:00:00', '2014-08-17 0:00:00', 'Se aburre'),
(6, 6, '2014-08-20 0:00:00', '2014-08-22 0:00:00', 'Muy entretenido'),
(7, 5, '2014-08-10 0:00:00', '2014-08-17 0:00:00', 'Se muestra interesado'),
(7, 6, '2014-08-20 0:00:00', '2014-08-22 0:00:00', 'Se le hace corto'),
(8, 1, '2014-07-15 0:00:00', '2014-07-15 0:00:00', 'Repetiría'),
(8, 2, '2014-07-16 0:00:00', '2014-07-23 0:00:00', 'Muy interesado'),
(8, 3, '2014-07-24 0:00:00', '2014-07-25 0:00:00', 'No ha disfrutado la actividad'),
(8, 4, '2014-08-01 0:00:00', '2014-08-01 0:00:00', 'Sabe ganar y perder')
;

SELECT * FROM chico_actividad;

