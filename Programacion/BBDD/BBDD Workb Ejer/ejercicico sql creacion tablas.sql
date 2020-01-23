
/*EJERCICIO 1*/
CREATE DATABASE hospital;
USE hospital;

CREATE TABLE patient(
	nss BIGINT UNSIGNED  PRIMARY KEY,
    name VARCHAR(150) NOT NULL
);

CREATE TABLE medical_history(
	nss BIGINT UNSIGNED  PRIMARY KEY,
	aperture_date DATETIME NOT NULL,
    health_center VARCHAR(150) NOT NULL,
    CONSTRAINT fk_patient_1 FOREIGN KEY (nss) REFERENCES patient (nss) ON DELETE CASCADE ON UPDATE CASCADE
);
SELECT * FROM medical_history;
/*mejor dos tablas para evitar rellenar info con nulos*/

/*EJERCICIO 2*/

CREATE DATABASE empresa;
USE empresa;

CREATE TABLE department(
	department_id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL
);

CREATE TABLE employee(
	employee_id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    department_id INTEGER UNSIGNED,
    CONSTRAINT fk_department_id_1 FOREIGN KEY (department_id) REFERENCES department (department_id) ON DELETE CASCADE ON UPDATE CASCADE
);

//segun Carlos no esta bien ver su solucion
CREATE TABLE manager_department(
	employee_id INTEGER UNSIGNED,
	department_id INTEGER UNSIGNED,
    PRIMARY KEY (employee_id, department_id),
    CONSTRAINT fk_department_id_2 FOREIGN KEY (department_id) REFERENCES department (department_id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_employee_id_1 FOREIGN KEY (employee_id) REFERENCES employee (employee_id) ON DELETE CASCADE ON UPDATE CASCADE
);



