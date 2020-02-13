DROP DATABASE IF EXISTS ventas;
CREATE DATABASE ventas CHARACTER SET utf8mb4;
USE ventas;

CREATE TABLE cliente (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  ciudad VARCHAR(100),
  categoría INT UNSIGNED
);

CREATE TABLE comercial (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  comisión FLOAT
);

CREATE TABLE pedido (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  total DOUBLE NOT NULL,
  fecha DATE,
  id_cliente INT UNSIGNED NOT NULL,
  id_comercial INT UNSIGNED NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id),
  FOREIGN KEY (id_comercial) REFERENCES comercial(id)
);

INSERT INTO cliente VALUES(1, 'Aarón', 'Rivero', 'Gómez', 'Almería', 100);
INSERT INTO cliente VALUES(2, 'Adela', 'Salas', 'Díaz', 'Granada', 200);
INSERT INTO cliente VALUES(3, 'Adolfo', 'Rubio', 'Flores', 'Sevilla', NULL);
INSERT INTO cliente VALUES(4, 'Adrián', 'Suárez', NULL, 'Jaén', 300);
INSERT INTO cliente VALUES(5, 'Marcos', 'Loyola', 'Méndez', 'Almería', 200);
INSERT INTO cliente VALUES(6, 'María', 'Santana', 'Moreno', 'Cádiz', 100);
INSERT INTO cliente VALUES(7, 'Pilar', 'Ruiz', NULL, 'Sevilla', 300);
INSERT INTO cliente VALUES(8, 'Pepe', 'Ruiz', 'Santana', 'Huelva', 200);
INSERT INTO cliente VALUES(9, 'Guillermo', 'López', 'Gómez', 'Granada', 225);
INSERT INTO cliente VALUES(10, 'Daniel', 'Santana', 'Loyola', 'Sevilla', 125);

INSERT INTO comercial VALUES(1, 'Daniel', 'Sáez', 'Vega', 0.15);
INSERT INTO comercial VALUES(2, 'Juan', 'Gómez', 'López', 0.13);
INSERT INTO comercial VALUES(3, 'Diego','Flores', 'Salas', 0.11);
INSERT INTO comercial VALUES(4, 'Marta','Herrera', 'Gil', 0.14);
INSERT INTO comercial VALUES(5, 'Antonio','Carretero', 'Ortega', 0.12);
INSERT INTO comercial VALUES(6, 'Manuel','Domínguez', 'Hernández', 0.13);
INSERT INTO comercial VALUES(7, 'Antonio','Vega', 'Hernández', 0.11);
INSERT INTO comercial VALUES(8, 'Alfredo','Ruiz', 'Flores', 0.05);

INSERT INTO pedido VALUES(1, 150.5, '2017-10-05', 5, 2);
INSERT INTO pedido VALUES(2, 270.65, '2016-09-10', 1, 5);
INSERT INTO pedido VALUES(3, 65.26, '2017-10-05', 2, 1);
INSERT INTO pedido VALUES(4, 110.5, '2016-08-17', 8, 3);
INSERT INTO pedido VALUES(5, 948.5, '2017-09-10', 5, 2);
INSERT INTO pedido VALUES(6, 2400.6, '2016-07-27', 7, 1);
INSERT INTO pedido VALUES(7, 5760, '2015-09-10', 2, 1);
INSERT INTO pedido VALUES(8, 1983.43, '2017-10-10', 4, 6);
INSERT INTO pedido VALUES(9, 2480.4, '2016-10-10', 8, 3);
INSERT INTO pedido VALUES(10, 250.45, '2015-06-27', 8, 2);
INSERT INTO pedido VALUES(11, 75.29, '2016-08-17', 3, 7);
INSERT INTO pedido VALUES(12, 3045.6, '2017-04-25', 2, 1);
INSERT INTO pedido VALUES(13, 545.75, '2019-01-25', 6, 1);
INSERT INTO pedido VALUES(14, 145.82, '2017-02-02', 6, 1);
INSERT INTO pedido VALUES(15, 370.85, '2019-03-11', 1, 5);
INSERT INTO pedido VALUES(16, 2389.23, '2019-03-11', 1, 5);

-- Parte I
-- 1- Devuelve todos los datos de los dos pedidos de mayor valor.
SELECT total FROM pedido ORDER BY total DESC LIMIT 2;

-- 2- Devuelve un listado con los identificadores de los clientes que han realizado algún pedido.
-- Tenga en cuenta que que no debe mostrar identificadores que estén repetidos.
SELECT DISTINCT (id_cliente)
FROM pedido;

-- 3- Devuelve un listado de los nombres de los clientes que empiezan por A y 
--  terminan por n y también los nombres que empiezan por P. 
-- El listado deberá estar ordenado alfabéticamente.
SELECT * FROM cliente WHERE (nombre LIKE 'A%' AND nombre LIKE '%N') OR nombre LIKE 'P%' ORDER BY nombre ASC;
SELECT * FROM cliente WHERE nombre LIKE 'A%N' OR nombre LIKE 'P%' ORDER BY nombre ASC;

-- 4- Devuelve un listado con todos los pedidos que ha realizado Adela Salas Díaz. (Sin utilizar INNER JOIN).
SELECT * FROM pedido
WHERE id_cliente = (select id FROM cliente where nombre ="Adela" AND apellido1 ="Salas" and apellido2 ="Díaz" );

SELECT * FROM pedido
WHERE id_cliente IN (select id FROM cliente where nombre ="Adela" AND apellido1 ="Salas" and apellido2 ="Díaz" );

-- 5- Devuelve el número de pedidos en los que ha participado el comercial Daniel Sáez Vega. (Sin utilizar INNER JOIN)
select count(id) from pedido 
where id_comercial = (SELECT id FROM comercial 
	WHERE nombre = 'Daniel' AND apellido1 = 'Sáez' AND apellido2 = 'Vega');

select count(id) from pedido 
where id_comercial IN (SELECT id FROM comercial 
	WHERE nombre = 'Daniel' AND apellido1 = 'Sáez' AND apellido2 = 'Vega');
    
SELECT COUNT(pedido.id_comercial)
FROM pedido, comercial
WHERE pedido.id_comercial = comercial.id
AND nombre  = "Daniel" AND apellido1 = "Sáez" AND apellido2 = "Vega";
​
-- 6- Devuelve los datos del cliente que realizó el pedido más caro en el año 2019. (Sin utilizar INNER JOIN)
select * FROM cliente 
	WHERE id = (SELECT id_cliente FROM pedido WHERE fecha >= "2019-01-01" AND fecha <= "2019-12-31" 
    order by id desc LIMIT 1);
    
select * from cliente where id in 
(select id_cliente from pedido where total = 
(select MAX(total) from pedido where fecha between "2019-01-01" AND "2019-12-31"));

-- Parte II
-- 1- Devuelve un listado de los nombres de los clientes que no empiezan por A. El listado deberá estar ordenado alfabéticamente.
SELECT
    nombre, apellido1, apellido2
FROM
    cliente
WHERE
    nombre NOT LIKE 'A%'
ORDER BY nombre ASC;

-- 2- Devuelve un listado que muestre todos los pedidos que ha realizado cada cliente. El resultado debe mostrar todos los datos de los pedidos y del cliente. El listado debe mostrar los datos de los clientes ordenados alfabéticamente.
SELECT *
FROM cliente, pedido
WHERE cliente.id = pedido.id_cliente
ORDER BY cliente.id ASC;

-- SUBCONSULTAS (NO SE PUEDE USAR NINGÚN TIPO DE JOIN)
-- 3- Devuelve la fecha y la cantidad del pedido de menor valor realizado por el 
-- cliente Pepe Ruiz Santana.
-- MAXIMO
SELECT fecha, total FROM pedido WHERE id = (select id from pedido where id_cliente = 
(SELECT id FROM cliente WHERE nombre = "Pepe" AND apellido1 = "Ruiz" AND apellido2 = 'Santana')
order by total desc limit 1);
-- MIN
SELECT fecha, total FROM pedido WHERE id = (select id from pedido where id_cliente = 
(SELECT id FROM cliente WHERE nombre = "Pepe" AND apellido1 = "Ruiz" AND apellido2 = 'Santana')
order by total asc limit 1);



-- 4- Devuelve un listado con los datos de los clientes y los pedidos,
--  de todos los clientes que han realizado un pedido durante el año 2017 
-- con un valor mayor o igual al valor medio de los pedidos realizados durante ese mismo año.
SELECT * FROM cliente, pedido
 WHERE pedido.id_cliente = cliente.id and pedido.id IN (
	SELECT pedido.id FROM pedido WHERE pedido.fecha BETWEEN '2017-01-01' AND '2017-12-31' AND pedido.total >= (
		SELECT AVG(total) FROM pedido WHERE pedido.fecha BETWEEN '2017-01-01' AND '2017-12-31')
 );
 


-- 5- Devuelve el pedido más caro que existe en la tabla pedido sin hacer uso de MAX, 
-- ORDER BY ni LIMIT.
SELECT * FROM pedido
WHERE pedido.total >= ALL (SELECT pedido.total FROM pedido);

select * from pedido order by total desc limit 1;

-- 6- Devuelve un listado de los clientes que no han realizado ningún pedido. 
-- (Utilizando ANY o ALL).
select * from cliente where cliente.id <> all (select id_cliente from pedido);
select * from cliente where cliente.id != all (select id_cliente from pedido);

-- 7- Devuelve un listado de los comerciales que no han realizado ningún pedido. 
-- (Utilizando ANY o ALL).
SELECT * FROM comercial WHERE comercial.id != ALL (SELECT  pedido.id_comercial  FROM pedido );


-- 8- Devuelve un listado de los clientes que no han realizado ningún pedido. 
-- (Utilizando IN o NOT IN).
select *  FROM cliente
where id NOT IN (select id_cliente from pedido);


-- 9- Devuelve un listado de los comerciales que no han realizado ningún pedido. 
-- (Utilizando IN o NOT IN).
SELECT * FROM comercial
WHERE comercial.id NOT IN ( SELECT  pedido.id_comercial  FROM pedido );

-- 10- Devuelve un listado de los clientes que no han realizado ningún pedido. 
-- (Utilizando EXISTS o NOT EXISTS).

SELECT * FROM cliente WHERE NOT EXISTS (
	SELECT  pedido.id_cliente
    FROM pedido
    WHERE pedido.id_cliente = cliente.id
);

-- 11- Devuelve un listado de los comerciales que no han realizado ningún pedido.
--  (Utilizando EXISTS o NOT EXISTS).
SELECT * FROM comercial
WHERE NOT EXISTS (
	SELECT  pedido.id_comercial
    FROM pedido
    WHERE pedido.id_comercial = comercial.id
);
