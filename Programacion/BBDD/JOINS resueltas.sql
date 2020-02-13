use books;

-- JOIN 
select * from book JOIN rating on book.book_code = rating.book_code order by title asc;
select * from book LEFT JOIN rating on book.book_code = rating.book_code order by title asc;

select * from editor JOIN rating on editor.editor_id = rating.editor_id;
select * from editor LEFT JOIN rating on editor.editor_id = rating.editor_id;

select * from book JOIN rating on book.book_code = rating.book_code and book.book_code = 101;
select * from book LEFT JOIN rating on book.book_code = rating.book_code and book.book_code = 101;
select * from book RIGHT JOIN rating on book.book_code = rating.book_code and book.book_code = 101;

select * from book 
	JOIN rating on book.book_code = rating.book_code
	JOIN editor on book.book_code = rating.book_code and rating.editor_id = editor.editor_id;
    
select * from book 
	LEFT JOIN rating on book.book_code = rating.book_code
	LEFT JOIN editor on book.book_code = rating.book_code and rating.editor_id = editor.editor_id;    
    


-- 1- Obtener el apellido, nombre y rating_date, ordenado por fecha de rating 
-- para un editorcon editor_id que sea 203
select editor.first_name,editor.last_name,rating.rating_date
FROM editor
	JOIN rating on rating.editor_id = editor.editor_id AND editor.editor_id = 203
ORDER BY rating.rating_date ASC ;

select editor.first_name,editor.last_name,rating.rating_date
FROM editor
	JOIN rating on rating.editor_id = editor.editor_id 
WHERE editor.editor_id = 203
ORDER BY rating.rating_date ASC ;


-- 2-   Obtener   titulo,   fecha   de   puntuación   y   el   id   de   los   
-- editores   para   todas   las   reviews anteriores al año 2000
select  book.title,rating.rating_date,rating.editor_id
FROM rating
	JOIN book on rating.book_code = book.book_code 
where rating_date < '2001-01-01';

select  book.title,rating.rating_date,rating.editor_id
FROM rating
	JOIN book on rating.book_code = book.book_code and rating_date < '2001-01-01';

select book.title, rating_date, rating.editor_id
from book
	join rating on  book.book_code = rating.book_code and rating_date < '2000-01-01';

-- 3- Obtener titulo, rating_date y starrating de todos los libros, 
-- ordenados por rating date.
select book.title, rating.rating_date, rating.starrating 
from book
	join rating on book.book_code = rating.book_code
order by rating.rating_date;

-- 4- Obtener el titulo, nombre y apellidos del autor (todo junto en un campo), 
-- precio y año en el que se escribió de cada libro para los editores que el 
-- affiliate esté en NY, ordenados por año de publicación. 
select title, book.last_name as Libro, price, year_written 
from book
	join rating on book.book_code = rating.book_code
	join editor on book.book_code = rating.book_code and editor.editor_id = rating.editor_id
 and affiliation like "NY%" order by year_written asc;

select  book.title, concat(book.last_name, ",", book.first_name) as author, book.price, book.year_written
from book
	JOIN rating on book.book_code = rating.book_code
	JOIN editor on book.book_code = rating.book_code AND editor.editor_id = rating.editor_id
where editor.affiliation like 'NY%'
order by year_written;


CREATE VIEW libro AS select  book.title, concat(book.last_name, ",", book.first_name) as author, book.price, book.year_written
from book
	JOIN rating on book.book_code = rating.book_code
	JOIN editor on book.book_code = rating.book_code AND editor.editor_id = rating.editor_id
where editor.affiliation like 'NY%'
order by year_written;

select * from libro where year_written = 1895;
insert into libro values ("Eat, pray, love", "Pava", 50, 1999);
delete from libro where year_written = 1895;

-- 5- Calcular el precio medio de los libros que tienen el affiliate en NY 
SELECT AVG(book.price)
FROM book
JOIN rating ON book.book_code = rating.book_code
JOIN editor ON book.book_code = rating.book_code AND editor.editor_id = rating.editor_id
where editor.affiliation like "NY%";


select avg(book.price) from book
	join rating on book.book_code = rating.book_code
    join editor on book.book_code = rating.book_code and editor.editor_id = rating.editor_id
where affiliation like 'NY%';


-- 6- Obtener el titulo de cada libro y cuantas puntuaciones de starrating ha 
-- recibido (group bytitle)
select title, count(starrating) from book
	join rating on book.book_code = rating.book_code
group by title;



-- 7-   De   cuántos   libros   distintos   se   han   hecho   reviews   que  
--  sean   de   editores   que   tienen   elaffiliate en NY? (distinct)
select count(distinct rating.book_code) as number_of_books_reviewed from rating
	join editor on editor.editor_id = rating.editor_id
where editor.affiliation like 'NY%';

-- LEFT JOINS
-- 8-   Para   cada   libro   listar   su   título,   nombre   y   apellidos   del   
-- autor   en   un   solo   campo   y   su starrating (aparecerá varias veces un mismo libro, 
-- una vez por cada rating que tenga)
select title, concat(book.first_name, " ", book.last_name) as autor, starrating
from book
	left join rating on book.book_code = rating.book_code;


-- 9- Para cada libro listar su título, nombre y apellidos del autor en un solo campo 
-- y su rating yel nombre y apellidos  (en uno solo campo) del editor que le dio ese rating
SELECT title, CONCAT(book.first_name,', ', book.last_name) AS nombre_autor, rating.starrating,
 CONCAT(editor.first_name,', ', editor.last_name) AS nombre_editor
FROM Book 
	LEFT JOIN rating on book.book_code = rating.book_code
	LEFT JOIN editor on editor.editor_id = rating.editor_id;


-- 10- Para cada libro que hay en la BD queremos listar su título y el mayor 
-- rating que se le ha dado. Se querrán ver los libros que no tengan ninguna puntuación 
-- (será null)
select title, max(starrating) from book
	left join rating on book.book_code = rating.book_code
group by title;


    
