
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


----------------------------------------------------------------------
------------------------------- TABLES -------------------------------


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "genre" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar (100)
);

CREATE TABLE "dream" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (50),
	"date" date,
  	"image"  VARCHAR(1000),
	"details" TEXT,
	"user_id" INT REFERENCES "user",
	"genre_id" INT REFERENCES "genre" ON DELETE CASCADE
);


CREATE TABLE "dream_genre" (
	"id" SERIAL PRIMARY KEY,
	"dream_id" INT REFERENCES "dream" ON DELETE CASCADE,
	"genre_id" INT REFERENCES "genre" ON DELETE CASCADE	
);




----------------------------------------------------------------------
------------------------------- INSERTS -------------------------------

-- user
INSERT INTO "public"."user"("username", "password") 
VALUES('winston', '$2a$10$iUtHAJ9xfQEUHatMeZJrHuCoZ7t8hQ/sN67YcnqCtcRaP1z93TvpS');


-- genre
INSERT INTO "genre" ("id", "name") VALUES ('1', 'Happy');
INSERT INTO "genre" ("id", "name") VALUES ('2', 'Sad');
INSERT INTO "genre" ("id", "name") VALUES ('3', 'Scary');
INSERT INTO "genre" ("id", "name") VALUES ('4', 'Funny');
INSERT INTO "genre" ("id", "name") VALUES ('5', 'Weird');
INSERT INTO "genre" ("id", "name") VALUES ('6', 'Adventure');
INSERT INTO "genre" ("id", "name") VALUES ('7', 'Defied Gravity');
INSERT INTO "genre" ("id", "name") VALUES ('8', 'Time travel');
INSERT INTO "genre" ("id", "name") VALUES ('9', 'Late to high school');
INSERT INTO "genre" ("id", "name") VALUES ('10', 'Regular late');


-- dream
INSERT INTO "dream" (title, date, image, details, user_id, genre_id)
VALUES ('Unicorns', '12-02-2020', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT367-RJK8CMvmREppNaFoggIDQf8Zuaj3pLkX1db8YzQvbvFWxclBK9ufuN140a1mkVxS2-Is-&usqp=CAc', 'I dreamt the myaksdhfaiuwehfkjabdskfjhakjsfhsdf', 1, 1); 

INSERT INTO "dream" (title, date, image, details, user_id, genre_id)
VALUES ('Ghost that bit me', '04-06-2020', 'https://www.ama.org/wp-content/uploads/2019/01/ghost-ads-image.jpg?fit=1360%2C550', 'After watching The Grudge last night, I dreamt about a dog in a white bed sheet.', 1, 3); 

INSERT INTO "dream" (title, date, image, details, user_id, genre_id)
VALUES ('Babies', '08-29-2020', 'https://media.phillyvoice.com/media/images/The_reason_babies_hiccup_so_mu.2e16d0ba.fill-1200x630-c0.jpg', 'I dreamt about having babies again but holy moly, no more kids for this mama.', 1, 1); 


INSERT INTO "dream" (title, date, image, details, user_id, genre_id)
VALUES ('Scary Stories', '04-09-2018', 'https://pyxis.nymag.com/v1/imgs/ec9/989/f972cf762131d519bc0b10676a1e5ac964-05-scary-stories-to-tell-in-the-dark-led.rsocial.w1200.jpg', 'Dreamt about my favorite series of scary stories growing up and I was actually in one of them. I ran from the ghost but I was not able to move anywhere at all.', 1, 3);



-- dream_genre
INSERT INTO "dream_genre" ("dream_id", "genre_id") VALUES (2, 1);


----------------------------------------------------------------------
------------------------------- SELECTS ------------------------------


SELECT * FROM "user";
SELECT * FROM "genre";
SELECT * FROM "dream";
SELECT * FROM "dream_genre";


-- Works to retrieve dreams from specific user
SELECT TO_CHAR(date, 'mm-dd-yyyy') AS date, dream.title, dream.image, dream.details, genre.name, dream.id FROM "user"
	JOIN dream ON dream.user_id = "user".id
	JOIN genre ON genre.id = dream.genre_id
	WHERE "user".id = 1;
	
	
	

-- Works to retrieve specific dream by dream ID
SELECT TO_CHAR(date, 'mm-dd-yyyy'), dream.title, dream.image, dream.details, genre.name, dream.id FROM dream_genre
    JOIN dream ON dream.id = dream_genre.dream_id
    JOIN genre ON dream_genre.genre_id = genre.id
    WHERE dream.id = 3;
    
    
    
    SELECT TO_CHAR(date, 'mm-dd-yyyy'), dream.title, dream.image, dream.details, genre.name, dream.id FROM dream
    JOIN genre on dream.genre_id = genre.id
    WHERE dream.id = 20;
    

----------------------------------------------------------------------
------------------------------- UPDATES ------------------------------

UPDATE "dream_genre" SET 
      "genre_id" = 8
      WHERE dream_id = 20; -- id is the id of the dream_genre table id ... 
      
SELECT * FROM "dream_genre"; 




