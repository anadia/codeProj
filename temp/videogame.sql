create database videogame;
use videogame;
CREATE TABLE videogame (
   videogame_id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(100) NOT NULL,
   lang VARCHAR(5) NOT NULL,
   description BLOB NULL,
   rating DECIMAL (3,1),
   number_of_players INT DEFAULT 0
);
CREATE TABLE player(
   player_id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   videogame_id INT NOT NULL,
   name VARCHAR(80) NOT NULL,
   age INT NOT NULL,
   is_famous INT NOT NULL DEFAULT 0,
   registration_date DATE NULL,
   FOREIGN KEY(videogame_id) REFERENCES videogame(videogame_id)
);
insert into videogame(title, lang, description, rating, number_of_players) values ("Castelvania", "EN", "Dracula y cosas así", 5, 22);
insert into videogame(title, lang, description, rating, number_of_players) values ("Resident Evil", "EN", "Zombies y tal", 4, 60);
insert into videogame(title, lang, description, rating, number_of_players) values ("Left 4 Dead", "EN", "Más zombies y bosses", 5, 11);
insert into videogame(title, lang, description, rating, number_of_players) values ("Silent Hill", "ES", "Estás muerto y tal", 3, 55);
insert into videogame(title, lang, description, rating, number_of_players) values ("Forbidden Siren", "JP", "Más fantasmas y cosas así", 2, 14);
insert into player(videogame_id, name, age) values (3, "Joaquin Lucas",22);
insert into player(videogame_id, name, age) values (1, "Carlos Perez",18);
insert into player(videogame_id, name, age) values (1, "Pepe Peleteiro",25);
insert into player(videogame_id, name, age) values (2, "Jaun Landín",35);
insert into player(videogame_id, name, age) values (2, "Luisa Montero", 60);
insert into player(videogame_id, name, age) values (5, "Perry Mason", 19);
insert into player(videogame_id, name, age, is_famous) values (1, "Castle House",33, 1);
insert into player(videogame_id, name, age) values (1, "Rick Fernandez",33);
insert into player(videogame_id, name, age, is_famous) values (5, "Frank Castle",33, 1);
insert into player(videogame_id, name, age) values (2, "Alejandro Gonzalez",33);
select * from player, videogame
where videogame.videogame_id = player.videogame_id
and videogame.title = "Castelvania";
select videogame_id from player;
-- listado de juegos que tienen al menos un jugador (juegos a los que juega alguien)
select * from videogame where videogame_id IN (select videogame_id from player);
-- listado de juegos a los que no juega nadie
select * from videogame where videogame_id NOT IN (select videogame_id from player);
-- listado de juegos que tienen al menos un jugador (juegos a los que juega alguien)
select * from videogame where videogame_id = ANY (select videogame_id from player);
select * from videogame where videogame_id = SOME (select videogame_id from player);
-- seleccionar todos los jugadores que juegan a un juego en ingles
select name from player where videogame_id in (select videogame_id from videogame where lang = "EN");
-- el jugador mayor
select name from player where age = (select min(age) from player);
-- jugadores por debajo de la media de edad
select name from player where age < (select avg(age) from player);
-- jugadores por encima de la media de edad
select name from player where age > (select avg(age) from player);
-- toda la info de los videojuegos que están en un idioma al que juegan jugadores famosos
select * from videogame where lang in
(select lang from videogame where videogame_id = SOME (select videogame_id from player where is_famous = 1));
