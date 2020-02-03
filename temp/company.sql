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

/* 5.Seleccionar el nombre, salario y localidad donde trabajan delos empleados 
que tengan un salario entre 10000 y 13000.*/
SELECT employee.name, employee.salary, departament.location
FROM employee,departament
WHERE employee.departament_no = departament.departament_no 
AND employee.salary BETWEEN 10000 and 13000;


/* Visualizar los departamentos con más de 5 empleados*/


SELECT COUNT(employee.departament_no)>2, employee.departament_no, departament.name
FROM employee, departament
WHERE employee.departament_no = departament.departament_no
GROUP BY employee.departament_no;

SELECT departament_no, COUNT(departament_no)>2
FROM employee
GROUP BY departament_no;
/*7.Mostrar el nombre, salario y nombre del departamento de losempleados   que   tengan   
el   mismo   oficio   que   ‘Delgado Carmen’ */
SELECT employee.job FROM employee WHERE employee.last_name = 'Delgado';
SELECT employee.name, employee.last_name, employee.salary,departament.name
FROM employee, departament
WHERE departament.departament_no= employee.departament_no AND employee.job = "Vendedor";

SELECT employee.name, employee.last_name, employee.salary,departament.name
FROM employee, departament
WHERE employee.job IN (SELECT employee.job FROM employee WHERE employee.last_name = 'Delgado';);

/*8.Mostrar el nombre, salario y nombre del departamento de losempleados que tengan el mismo oficio 
que “Castillo Montes Luis” y que no tengan comisión. */
SELECT employee.job FROM employee WHERE employee.last_name = 'Castillo Montes';
SELECT employee.name, employee.last_name, employee.salary,departament.name, employee.commission
FROM employee, departament
WHERE departament.departament_no= employee.departament_no AND employee.job = "Vendedor"
AND employee.commission = 0;


/* 9	Mostrar los datos de los empleados que trabajan en el departamento de contabilidad,
 ordenados por nombre. */
SELECT employee.*, departament.name
FROM employee, departament
WHERE departament.departament_no = employee.departament_no AND departament.name = "Contabilidad"
ORDER BY employee.name DESC; 

/* 10	Nombre de los empleados que trabajan en León y cuyo oficio sea analista o vendedor  */
SELECT employee.name, employee.last_name, employee.dir
FROM employee, departament
WHERE departament.departament_no = employee.departament_no 
AND employee.dir = "León"
AND (employee.job = "Analista" 
OR employee.job= "Vendedor")
ORDER BY employee.name ASC;

/*	11.Calcula el salario medio de todos los empleados.  */

SELECT AVG(employee.salary)
FROM employee;

/*12. ¿Cuál es el máximo salario de los empleados del departamento  10? */

SELECT MAX(employee.salary)
FROM employee
WHERE departament_no = 10;

/*13. Calcula el salario mínimo de los empleados del departamento ‘VENTAS’. */
SELECT MIN(employee.salary)
FROM employee
WHERE departament_no = 40;

/*14 Calcula el promedio del salario de los empleados del departamento de ‘CONTABILIDAD’. */
SELECT AVG(employee.salary)
FROM employee
WHERE departament_no = 30;

/* 15	¿Cuántos empleados hay en el departamento número 10? */
SELECT COUNT(*)
FROM employee
WHERE departament_no = 10;

/* 16	¿Cuántos empleados hay en el departamento número 10? */
SELECT COUNT(*)
FROM employee
WHERE departament_no = 40;

/* 17	Calcula el número de empleados que no tienen comisión.  */
SELECT COUNT(*)
FROM employee
WHERE employee.commission = 0;

/* 18 Visualizar cuántos nombres de los empleados empiezan por la letra ‘A’.   */
SELECT * 
FROM employee
WHERE NAME REGEXP '^(A)';

/* 	19 Visualizar el número de empleados de cada departamento.  */
SELECT employee.departament_no , COUNT(employee.departament_no)
FROM employee 
GROUP BY employee.departament_no;

/* 20		Para cada oficio obtener la suma de salarios.   */
SELECT SUM(salary)
FROM employee;

/*21 Mostrar los datos de los empleados cuyo salario sea mayor que  la 
media de todos los salarios. */
SELECT name, salary
FROM employee
WHERE salary > AVG(salary);

/*22 	Seleccionar el nombre del empleado que tiene máximo salario.  */
SELECT name, salary
FROM employee
WHERE salary = MAX(salary);

/*23 		Mostrar el nombre del empleado que tiene el salario más bajo.   */
SELECT name, salary
FROM employee
WHERE salary = MIN(salary);

/*24 	Mostrar los datos del empleado que tiene el salario más alto en 
el departamento de ‘VENTAS’.   */
SELECT employee.name, employee.salary
FROM employee, departament
WHERE salary = MAX(salary) AND departament.name = "Ventas";

/*25 	Visualizar el departamento con más empleados.    */
SELECT departament_no
FROM employee
WHERE MAX(count(name)) IN departament_no;

/*26 Visualizar el número de departamento que tenga más empleados 
cuyo oficio sea empleado.    */
SELECT departament_no
FROM employee
WHERE MAX(count(name)) IN departament_no AND job = "Empleado";

/*27 	Mostrar el número de oficios distintos de cada departamento     */
SELECT departament_no, job
FROM employee
WHERE (SELECT count(name)) IN departament_no;

/*28 Mostrar los departamentos que tengan más de dos personas trabajando en la misma profesión. */
SELECT departament_no, job
FROM employee
WHERE (SELECT count(name)) > 2 IN job;

SELECT count(name) > 2
FROM employee;
WHERE job = job;