
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

-- selecting all data from table user, just ensuring our table is there
SELECT * FROM "user";



CREATE TABLE "dream" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (50) NOT NULL,
	"date" date,
  	"image"  VARCHAR(1000) NOT NULL,
	"details" TEXT NOT NULL,
	"genre_id" INT 
);


CREATE TABLE "genre" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar (100)
);



CREATE TABLE "dream_genre" (
	"id" SERIAL PRIMARY KEY,
	"dream_id" INT REFERENCES "dream",
	"genre_id" INT REFERENCES "genre"
);


----------------------------------------------------------------------
------------------------------- INSERTS -------------------------------

-- dream
INSERT INTO "dream" ("title", "date", "image", "details")
VALUES ('Unicorns', '12-02-2020', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT367-RJK8CMvmREppNaFoggIDQf8Zuaj3pLkX1db8YzQvbvFWxclBK9ufuN140a1mkVxS2-Is-&usqp=CAc', '1'); 
INSERT INTO "dream" ("title", "date", "image", "details")
VALUES ('Babies', '08-29-2020', 'https://media.phillyvoice.com/media/images/The_reason_babies_hiccup_so_mu.2e16d0ba.fill-1200x630-c0.jpg', 'I dreamt about having babies again but holy moly, no more kids for this mama.'); 
INSERT INTO "dream" ("title", "date", "image", "details")
VALUES ('Ghost that bit me', '04-06-2020', 'https://www.ama.org/wp-content/uploads/2019/01/ghost-ads-image.jpg?fit=1360%2C550', 'After watching The Grudge last night, I dreamt about a dog in a white bed sheet.'); 


-- genre
INSERT INTO "genre" ("id", "name") VALUES ('1', 'happy');
INSERT INTO "genre" ("id", "name") VALUES ('2', 'sad');
INSERT INTO "genre" ("id", "name") VALUES ('3', 'scary');
INSERT INTO "genre" ("id", "name") VALUES ('4', 'funny');
INSERT INTO "genre" ("id", "name") VALUES ('5', 'weird');
INSERT INTO "genre" ("id", "name") VALUES ('6', 'superpower');
INSERT INTO "genre" ("id", "name") VALUES ('7', 'space');
INSERT INTO "genre" ("id", "name") VALUES ('8', 'time travel');
INSERT INTO "genre" ("id", "name") VALUES ('9', 'late to high school class even though you graduated a decade ago');
INSERT INTO "genre" ("id", "name") VALUES ('10', 'regular late');


-- dream_genre
INSERT INTO "dream_genre" ("dream", "genre_id")
VALUES (1, 11), (2, 8), (3, 13);

-- dream_genre
INSERT INTO "dream_genre" ("dream_id", "genre_id") VALUES (1, 1);
INSERT INTO "dream_genre" ("dream_id", "genre_id") VALUES (4, 2);
INSERT INTO "dream_genre" ("dream_id", "genre_id") VALUES (5, 3);

----------------------------------------------------------------------
------------------------------- SELECTS ------------------------------


SELECT * FROM "user";
SELECT * FROM "genre";
SELECT * FROM "dream";
SELECT * FROM "dream_genre";


SELECT "title", "date", "image", "details", "genre_id", "genre.name" FROM "dream_genre"
      JOIN dream ON dream.id = "dream_genre".dream_id
      JOIN genre ON genre.id = "dream_genre".genre_id
      WHERE movies.id = 1;   

----------------------------------------------------------------------
----------------------------- TESTS ----------------------------------