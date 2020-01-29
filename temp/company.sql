create database business;
use business;
CREATE TABLE departament(
	departament_no INT PRIMARY KEY UNIQUE,
	name VARCHAR (40) NOT NULL,
	location VARCHAR (40) NOT NULL
);
CREATE TABLE employee (
	codigo_id VARCHAR(20) PRIMARY KEY UNIQUE,
    name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
	age tinyint NOT NULL,
    job VARCHAR(15) NOT NULL,
    dir VARCHAR(15) NOT NULL,
    start_date DATE NOT NULL,
    salary NUMERIC (6, 0) NOT NULL,
	commission SMALLINT NOT NULL DEFAULT 0,
	departament_no INT NOT NULL,
	CONSTRAINT fk_departament_1 FOREIGN KEY (departament_no)
		REFERENCES departament(departament_no)
		ON DELETE CASCADE ON UPDATE CASCADE
);
ALTER TABLE employee
MODIFY COLUMN salary NUMERIC (6, 0) NOT NULL;
INSERT INTO departament(departament_no,name,location) VALUES
(10,"Desarrollo Software","El Coyolar"),
(20,"Analisis Sistema","Guadalupe"),
(30,"Contabilidad","Subtiava"),
(40,"Ventas","San Felipe");
INSERT INTO employee (codigo_id, last_name, name, age, job, dir, start_date,salary,commission,departament_no) VALUES
("281-160483-0005F", "Rocha Vargas", "Hector", 27, "Vendedor", "Leon", "1983-05-12", 12000, 0 , 40),
("281-040483-0056P", "López Hernandez", "Julio", 27, "Analista", "Chinandega", "1982-07-14", 13000, 1500,20),
("081-130678-0004S","Esquivel", "José",31,"Director","Juigalpa","1981-06-05", 167000, 1200, 30),
("281-160473-0009Q","Delgado", "Carmen", 37,"Vendedor", "Leon", "1983-03-02", 134000,0,40),
("281-160493-0005F","Castillo Montes", "Luis",17,"Vendedor", "Masaya", "1982-08-12", 163009,1000,40),
("281-240784-0004Y", "Esquivel Leonel", "Alfonso",26,"Presidente","Nagarote","1981-09-12",15000,0,30),
("261-161277-0008R", "Perez", "Luis",32,"Empleado","Managua","1960-03-02",16890,0,10);


SELECT last_name,  name 
FROM employee
ORDER BY last_name DESC;

select employee.name job ,dir
from employee, departament 
where employee.departament_no = departament.departament_no
and departament.name = 'ventas' ;

SELECT  name FROM employee
WHERE NAME like '%o';

SELECT  CONCAT(last_name, ",", name) as nombre_completo FROM employee
WHERE NAME like '%o';

SELECT name, last_name, job, salary
FROM employee
WHERE dir = 'Leon';

SELECT employee.name, employee.salary, departament.location
FROM employee,departament
WHERE employee.departament_no = departament.departament_no 
AND employee.salary BEETWEEN 10000 and 13000;







