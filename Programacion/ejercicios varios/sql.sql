create database music;

use music;

CREATE TABLE band (
    id INT NOT NULL,
    name VARCHAR(32) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE album (
    id INT NOT NULL PRIMARY KEY,
    band_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    FOREIGN KEY (band_id)
        REFERENCES band (id)
);

CREATE TABLE song (
    id INT NOT NULL PRIMARY KEY,
    album_id INT NOT NULL,
    name VARCHAR(32) NOT NULL,
    duration VARCHAR(10) NOT NULL,
    FOREIGN KEY (album_id)
        REFERENCES album (id)
);

insert into band values (1, "Queen");
insert into band values (2, "Guns'n'Roses");
insert into band values (3, "Joy Division");

insert into album values (1, 1, "A Kind of Magic");
insert into album values (2, 1, "The Works");
insert into album values (3, 2, "Use Your Illusion I");

SELECT 
    song.name
FROM
    song;

insert into song  values (1, 1, "One Vision"							 	,"5:12");
insert into song  values (2, 1, "A Kind Of Magic" 						,"4:25");
insert into song  values (3, 1, "One Year of Love"						,"4:30");
insert into song  values (4, 1, "Pain Is So Close To Pleasure" 			,"4:40");
insert into song  values (5, 1, "Friends Will Be Friends" 				,"4:10");
insert into song  values (6, 1, "Who Wants To Live Forever" 				,"5:20");
insert into song  values (7, 1, "Gimme The Prize (Kurgan's Theme)" 		,"4:35");
insert into song  values (8, 1, "Don't Lose Your Head" 					,"4:40");
insert into song  values (9, 1, "Princes Of The Universe" 				,"3:34");


insert into song values  (10, 2,"Radio Ga Ga"									,"5:50");
insert into song values  (11, 2,"Tear It Up"										,"3:24");
insert into song values  (12, 2,"It's a Hard Life"								,"4:10");
insert into song values  (13, 2,"Man On The Prowl"								,"3:26");
insert into song values  (14, 2,"Machines (Or 'Back to Humans')"					,"5:11");
insert into song values  (15, 2,"I Want to Break Free"							,"4:19");
insert into song values  (16, 2,"Keep Passing the Open Windows"					,"5:22");
insert into song values  (17, 2,"Hammer to Fall"									,"4:25");
insert into song values  (18, 2,"Is This the world we created...?"				,"2:11");


SELECT 
    *
FROM
    song;
SELECT song.name, album.name
FROM song, album
WHERE song.album_id = album_id;

SELECT song.name, album.name, band.name
FROM song, album, band
WHERE song.album_id = album_id and album.band_id = band.id;

DELETE FROM song 
WHERE
    id = 1;






