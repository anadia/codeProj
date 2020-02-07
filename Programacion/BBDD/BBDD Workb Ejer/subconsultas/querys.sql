/* 1- Devuelve todos los datos de los dos pedidos de mayor valor.*/
SELECT * FROM cliente;
SELECT * FROM comercial;
SELECT * FROM pedido;

SELECT * FROM pedido ORDER BY total DESC LIMIT 2;

/*-- 2- Devuelve un listado con los identificadores de los clientes que han realizado algún pedido.
-- Tenga en cuenta que que no debe mostrar identificadores que estén repetidos.*/
SELECT pedido.id AS pedido_id, pedido.id_cliente
FROM pedido, cliente 
WHERE cliente.id = pedido.id_cliente;
/* GROUP BY pedido.id_cliente;*/

SELECT DISTINCT (id_cliente)
FROM pedido;

SELECT cliente.id FROM cliente GROUP BY cliente.id;
/*-- 3- Devuelve un listado de los nombres de los clientes que empiezan por A y terminan por n y también 
los nombres que empiezan por P. El listado deberá estar ordenado alfabéticamente.*/
SELECT * 
FROM cliente
WHERE nombre LIKE 'A%n' OR nombre  LIKE 'P%' ORDER BY nombre ASC;

/*-- 4- Devuelve un listado con todos los pedidos que ha realizado Adela Salas Díaz. (Sin utilizar INNER JOIN).*/
SELECT * FROM pedido
/*WHERE id_cliente = (SELECT id FROM cliente where nombre ="Adela" AND apellido1 ="Salas" AND apellido2 ="Díaz" );*/
WHERE id_cliente IN (SELECT id FROM cliente where nombre ="Adela" AND apellido1 ="Salas" AND apellido2 ="Díaz" );
/*-- 5- Devuelve el número de pedidos en los que ha participado el comercial Daniel Sáez Vega. (Sin utilizar INNER JOIN)*/
SELECT COUNT(pedido.id_comercial)
FROM pedido, comercial
WHERE pedido.id_comercial = comercial.id
AND nombre  = "Daniel" AND apellido1 = "Sáez" AND apellido2 = "Vega";
/*-- 6- Devuelve los datos del cliente que realizó el pedido más caro en el año 2019. (Sin utilizar INNER JOIN)*/
SELECT *
FROM cliente
WHERE id = (SELECT id_cliente
FROM pedido
WHERE fecha >= "2019-01-01" AND fecha <= "2019-12-31"
ORDER BY id DESC
LIMIT 1);

