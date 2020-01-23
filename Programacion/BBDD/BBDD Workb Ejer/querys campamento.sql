USE campamento;

/* 2) Mostrar el nombre y la población y provincia de todas las actividades. */
SELECT nombre,poblacion,provincia
FROM actividad;


/* 3) Mostrar todas las actividades que tengan una edad mínima inferior a 8 años. */
SELECT nombre, edad_minima
FROM actividad
WHERE edad_minima <8;

/* 4) Incrementar en 1 año la edad mínima de todas las actividades. */
UPDATE actividad
SET edad_minima = edad_minima +1;

SET SQL_SAFE_UPDATES = 0;
/* 5) Vuelve a ejecutar los dos ejercicios anteriores y observa los cambios en los 
resultados devueltos causados por las modificaciones realizadas. */
SELECT nombre, edad_minima
FROM actividad
WHERE edad_minima <9;

/* 6) Mostrar por orden de edad el nombre de todos los campistas menores de 8 años.
Suponemos año actual 2015*/
SELECT nombre, (2015 - ano_nacimiento) AS edad, ano_nacimiento
FROM campista
ORDER BY ano_nacimiento DESC;

SELECT nombre, (2015 - ano_nacimiento) AS edad, ano_nacimiento
FROM campista
WHERE ano_nacimiento > 2007
ORDER BY edad ASC;

SELECT (2015 - ano_nacimiento) AS edad, nombre FROM campista
WHERE (2015 - ano_nacimiento) < 8;

/*7) Mostrar ordenados alfabéticamente los nombres, DNIs, edades y números de teléfono 
de todos los campistas que se dieron de alta antes del presente año 2015. */
SELECT nombre,dni,(2015 - ano_nacimiento) AS edad,telefono
FROM campista WHERE ano_alta <2015
ORDER BY nombre,dni,edad ASC;

/*8) Incrementar en cinco el número de campistas que pueden apuntarse en la actividad 
de Piscina */
SELECT actividad_id,nombre, ninos_maximo
FROM actividad; 

UPDATE actividad
SET ninos_maximo = ninos_maximo +5
WHERE actividad_id=5 ;

/* 9) Cambia la descripción de la actividad de Tenis para indicar que todos los juegos 
serán por parejas, por la alta afluencia de niños. */
USE campamento;

SELECT actividad_id,nombre, descripcion
FROM actividad;

UPDATE actividad
SET descripcion ="Todos los juegos serán por parejas, por la alta afluencia de niños."
WHERE nombre = "Tenis";

/*10) A causa de una fuerte nevada, hay que eliminar Senderismo de la lista de actividades programadas. */
SELECT * FROM chico_actividad; 
/*observamos que no todas las columnas tienen relación funcional de la clave primaria fecha_inicio y fecha_
fin  dependen de id_actividad pero no de id_campista, la tabla no esta en 3FN asi que necesitamos crear otra tabla que relacione
fecha_inicio y fecha_fin con id_actividad y dropear estas columna de la tabla chico_actividad*/

/*creamos la nueva tabla refernciamos las claves foraneas y creamos una clave primaria con los tres elementos */
CREATE TABLE actividad_programacion (
	actividad_id INTEGER UNSIGNED NOT NULL,
	fecha_inicio DATETIME NOT NULL,
    fecha_fin DATETIME NOT NULL,
    FOREIGN KEY (actividad_id) REFERENCES actividad (actividad_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    PRIMARY KEY (actividad_id, fecha_inicio, fecha_fin)
);

/*observamos en el ejercicio que nos pide eliminar una actividad de la programacion, consideramos que no sería apropiado
dropear esa actidad sino conservar sus referencia a modo de registro(log). Por ello establecemos la fecha de dicha actividad
a una fecha claramente irreal, consideramos 'null' que no puede ser al tratarse de componentes de la clave primaria y 0 que no
es adecuado para el formato 'DATETIME', igualmente todo a 0 tampoco es correcto. Establecemos por convencion '9999-01-01 0:00:00'
como valor por defecto para los campos fecha_inicio y fecha_fin */
ALTER TABLE campamento.actividad_programacion 
CHANGE COLUMN fecha_inicio fecha_inicio DATETIME NOT NULL DEFAULT '9999-01-01 0:00:00' ,
CHANGE COLUMN fecha_fin fecha_fin DATETIME NOT NULL DEFAULT '9999-01-01 0:00:00'
;

/*insertamos valores en la tabla, observando que la actividad con actividad_id igual a 7 que es Esqui no tiene fechas programadas,
por ello establecemos la fecha a la fecha default establecidad por convencion '9999-01-01 0:00:00'*/
INSERT INTO actividad_programacion (actividad_id,fecha_inicio,fecha_fin)
VALUES
(1, '2014-07-15 0:00:00', '2014-07-15 0:00:00'),
(2, '2014-07-16 0:00:00', '2014-07-23 0:00:00'),
(3, '2014-07-24 0:00:00', '2014-07-25 0:00:00'),
(4, '2014-08-01 0:00:00', '2014-08-01 0:00:00'),
(5, '2014-08-15 0:00:00', '2014-08-17 0:00:00'),
(6, '2014-08-20 0:00:00', '2014-08-22 0:00:00'),
(7, default, default)
;

/*dropeamos(quitamos) las columnas fecha_inicio fecha_fin de la tabla chico_actividad, quedando esta tabla normalizada */
ALTER TABLE chico_actividad
DROP COLUMN fecha_inicio,
DROP COLUMN fecha_fin;

/* observamos los datos en la nueva tabla*/
SELECT *
FROM actividad_programacion;

/* comprobamos los nombre de las actidades*/
SELECT actividad.actividad_id,actividad.nombre
FROM actividad;

/* unimos la consulta de las dos tablas para identificar mas humanamente los datos, observamos los datos repetidos segun 
todas sus referencia y defaults*/
SELECT  actividad.actividad_id,actividad.nombre, actividad_programacion.fecha_inicio, actividad_programacion.fecha_fin
FROM actividad, actividad_programacion;

/*por ello especificamos que nos muestre la tabla en la que coincidan actividad_id de las tablas actidad y actividad_programacion exclusivamente*/
SELECT  actividad.actividad_id,actividad.nombre, actividad_programacion.fecha_inicio, actividad_programacion.fecha_fin
FROM actividad, actividad_programacion
WHERE actividad.actividad_id = actividad_programacion.actividad_id;

/* para eliminar Senderismo que tiene id 1 de la programacion establecemos su fecha a default*/
UPDATE actividad_programacion
SET fecha_inicio = default
WHERE actividad_id = 1;

UPDATE actividad_programacion
SET fecha_fin = default
WHERE actividad_id = 1;

/*comprobamos cambios*/

select *
from actividad;
SELECT *
FROM actividad_programacion;

/* mostrar campistas que esten apuntado a la actividad tenis*/
SELECT campista.nombre,actividad.nombre
FROM campista,chico_actividad,actividad
WHERE  campista.campista_id = chico_actividad.campista_id AND actividad.actividad_id =chico_actividad.actividad_id 
AND  actividad.nombre = "Tenis";

SELECT campista.nombre,actividad.nombre
FROM campista,chico_actividad,actividad
WHERE  campista.campista_id = chico_actividad.campista_id AND actividad.actividad_id =chico_actividad.actividad_id 
AND  campista.nombre = "Juana Flecha González";

/*provincia y poblaciones campistas apuntados a juegos tradicionales*/
SELECT campista.provincia, campista.poblacion
FROM campista, chico_actividad, actividad
WHERE campista.campista_id = chico_actividad.campista_id 
AND chico_actividad.actividad_id = actividad.actividad_id
AND actividad.nombre ="Juegos tradicionales"
GROUP BY campista.poblacion;
/*11) Selecciona el nombre de todos los campistas anotados a alguna actividad */

SELECT chico_actividad.campista_id,campista.nombre, chico_actividad.actividad_id,actividad.nombre
FROM campista, chico_actividad, actividad
WHERE chico_actividad.campista_id = campista.campista_id AND chico_actividad.actividad_id = actividad.actividad_id
ORDER BY campista_id ASC,actividad_id ASC;


/* en WHERE igualamos campista_id y actividad_id entre las tablas para que las refencias se crucen(relacionen) y sean correctas.
Cambiamos en Preferences -> SQL Execution el limit de 10 rows en los resultados para que se muestren todos.
Ordenamos por campista_id y tambien por actividad_id para que los datos aparezcan ordenados segun nuestra referncia y facilitar la comprobación
*/

/*12) ¿Cuantos registros contiene la tabla campista_actividad? */
SELECT * 
FROM chico_actividad;

SELECT COUNT(*) 
FROM chico_actividad;

/*13) Crea una consulta que devuelva los pares nombre de campista y nombre de actividad, para todas las actividades 
en las que está anotado cada campista. */
SELECT campista.nombre, actividad.nombre
FROM campista, chico_actividad, actividad
WHERE chico_actividad.campista_id = campista.campista_id AND chico_actividad.actividad_id = actividad.actividad_id
ORDER BY campista.campista_id ASC,actividad.actividad_id ASC;

/*14) Selecciona el nombre de todas las actividades tienen algún campista anotado */
SELECT DISTINCT chico_actividad.actividad_id, actividad.nombre
FROM chico_actividad, actividad
WHERE actividad.actividad_id = chico_actividad.actividad_id
;


SELECT COUNT(actividad_id) as n_campistas FROM chico_actividad WHERE actividad_id = 1;

/* mostramos el numero de campistas por actividad, para las actividades que tienen un campista apuntado*/
SELECT  actividad.actividad_id, actividad.nombre, COUNT(chico_actividad.actividad_id) AS n_campistas
FROM chico_actividad, actividad
WHERE actividad.actividad_id = chico_actividad.actividad_id
GROUP BY actividad.actividad_id
ORDER BY actividad.actividad_id
;
