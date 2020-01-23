
CREATE DATABASE pruebas;

USE pruebas;
-- comentario
/*
varias lineas
linea2
*/
CREATE TABLE user (
	user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    dni VARCHAR(10) NOT NULL UNIQUE,
    name VARCHAR(75) NOT NULL,
    last_name VARCHAR(100) NOT NULL
    );

INSERT INTO user(username, password,email,dni,name, last_name)
Values ("jonnyPistolas", "1234", "jonnypist@gmail.com", "11111111-J", "Johnny", "Pistolas Rodriguez");
INSERT INTO user (username, password,email,dni,name, last_name)
Values ("merryJanes", "hola134", "meryjane@gmail.com", "21111111-J", "Merry", "Jane Jones");

SELECT * FROM user;

CREATE TABLE book(
	book_id INTEGER PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author VARCHAR(200)
);

INSERT INTO book(book_id, title, author)
VALUES (1, "Romeo y Julieta", "William Shakespeare");
INSERT INTO book(book_id, title, author)
VALUES (2, "Aleph", "Jorge Luis Borges");
INSERT INTO book(book_id, title, author)
VALUES (3, "El Principito", "Antoine de Saint Exuupery");
INSERT INTO book(book_id, title, author)
VALUES (4, "The Road", "Cormac mccarthy");
INSERT INTO book(book_id, title)
VALUES (5, "El Lazarillo de tormes");

SELECT * FROM book;
SELECT * FROM user;




CREATE TABLE prestamo(
	prestamo_id  INTEGER UNSIGNED PRIMARY KEY,
    user_id INTEGER NOT NULL,
    book_id INTEGER NOT NULL,
    borrowed_date DATETIME NOT NULL,
    CONSTRAINT fk_user_1 FOREIGN KEY (user_id)  REFERENCES user(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_book_1 FOREIGN KEY (book_id)  REFERENCES book(book_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);
SELECT * FROM book;

INSERT INTO prestamo VALUES (1,2,2,now());

SELECT * FROM user;
SELECT * FROM book;
SELECT * FROM prestamo;