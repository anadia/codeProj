CREATE DATABASE persona;
USE persona;

CREATE TABLE persona (
persona_id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR (150)
);

CREATE TABLE amigo (
amigo_id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR (150),
persona_id INT,
CONSTRAINT fk_persona_1 FOREIGN KEY (persona_id) REFERENCES persona (persona_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE pareja (
pareja_id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR (150),
persona_id INT,
CONSTRAINT fk_persona_2 FOREIGN KEY (persona_id) REFERENCES persona (persona_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO persona (persona_id, nombre) VALUES
(5,'ANTONIO TERRES'),
(2,'ANTONIO PERES'),
(3,'MARUJA LIMON'),
(4,'PEPE PAN'),
(6,'MANUELA TERRES'),
(7,'LUISA PERES'),
(8,'JUANA PAN');
SELECT * FROM persona;

INSERT INTO amigo (amigo_id, nombre) VALUES
(1,'ANTONIO TERRES'),
(2,'ANTONIO PERES'),
(4,'MARUJA LIMON'),
(3,'PEPE PAN'),
(5,'OSCAR TERRES')
;
select amigo_id, nombre, persona_id as amigo from amigo;
ALTER TABLE amigo
	MODIFY column 1 (1, 'ANTONIO TERRES',4)

INSERT INTO pareja (pareja_id, nombre) VALUES
(1,'MANUELA TERRES'),
(2,'LUISA PERES'),
(4,'MARUJA LIMON'),
(3,'JUANA PAN')
;
select pareja_id, nombre, persona_id as pareja from pareja;

