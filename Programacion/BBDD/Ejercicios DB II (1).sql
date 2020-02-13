use business;

select * from employee;
select * from departament;

INSERT INTO employee (codigo_id, last_name, name, age, job, dir, start_date,salary,commission,departament_no)
VALUES("081-220678-0008U", "Pérez Luis", "Carlos", 32, "Analista", "Matagalpa", "2001-06-22", 15600, 0 , 20);

INSERT INTO departament(departament_no,name,location) VALUES
(50,"General","Laborio");

INSERT INTO departament(departament_no,name,location)
VALUES(60,"General","Laborio");

CREATE TABLE prueba (
	SELECT * FROM
		employee
	WHERE
		departament_no = 30
);
    
CREATE TABLE prueba (
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
	CONSTRAINT fk_prueba_1 FOREIGN KEY (departament_no)
		REFERENCES departament(departament_no)
		ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO prueba (codigo_id, last_name, name, age, job, dir, start_date,salary,commission,departament_no)
SELECT codigo_id, last_name, name, age, job, dir, start_date,salary,commission,departament_no
FROM employee
WHERE departament_no="30";

select * from prueba;

CREATE TABLE prueba2 (
	codigo_id VARCHAR(20) PRIMARY KEY UNIQUE,
    salary NUMERIC (6, 0) NOT NULL,
	departament_no INT NOT NULL,
	CONSTRAINT fk_prueba2_1 FOREIGN KEY (departament_no)
		REFERENCES departament(departament_no)
		ON DELETE CASCADE ON UPDATE CASCADE
);

insert into prueba2 (select codigo_id, salary, departament_no from employee where departament_no = 20);

select * from prueba2;

update employee set salary = salary * 2 where departament_no = 30;

select * from employee;

update employee set departament_no = 20 where departament_no = 30;

UPDATE employee SET salary = salary + (salary * 0.1) WHERE departament_no = 10;
UPDATE employee SET salary = (salary * 1.1) WHERE departament_no = 10;


UPDATE departament
SET location = "Zaragoza"
WHERE departament_no = 10;

select * from departament;

UPDATE prueba
SET  salary = (SELECT salary FROM employee WHERE last_name = 'Esquivel Leonel') 
WHERE last_name = 'Esquivel';

SET SQL_SAFE_UPDATES = 0;


DELETE FROM departament WHERE departament_no = 40;

select * from employee;

delete from employee where departament_no = 20 and job = "Analista";

delete from employee where commission is null;
delete from employee where commission = 0;




