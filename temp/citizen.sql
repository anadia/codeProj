create table citizen (
	citizen_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    citizen_partner_id INT,
    CONSTRAINT fk_citizen_1 FOREIGN KEY (citizen_partner_id)
        REFERENCES citizen (citizen_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);
create table citizen_friend (
	citizen_id INT NOT NULL,
	citizen_friend_id  INT NOT NULL,
    PRIMARY KEY(citizen_id, citizen_friend_id),
    CONSTRAINT fk_citizen_friend_1 FOREIGN KEY (citizen_id)
        REFERENCES citizen (citizen_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_citizen_friend_2 FOREIGN KEY (citizen_friend_id)
        REFERENCES citizen (citizen_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);
insert into citizen (citizen_id, name) values (1, "Carri"), (2, "Fer");
insert into citizen (citizen_id, name) values (3, "Claudia"), (4, "Oscar"), (5, "Inma"), (6, "Juani"), (7, "Rafa");
select * from citizen;
update citizen set citizen_partner_id = 2 where citizen_id = 1;
update citizen set citizen_partner_id = 1 where citizen_id = 2;
update citizen set citizen_partner_id = 5 where citizen_id = 4;
update citizen set citizen_partner_id = 4 where citizen_id = 5;
insert into citizen_friend values (2, 4);
insert into citizen_friend values (2, 7);
select * from citizen_friend;
-- obtener los amigos dado un id de ciudadano, es decir quienes son sus amigos
select citizen.name from citizen, citizen_friend
where citizen_friend.citizen_friend_id = citizen.citizen_id
and citizen_friend.citizen_id = 2;
