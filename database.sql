
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
------------------------------------------------------ TABLES ------------------------------------------------------
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "dream" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (50) NOT NULL,
	"date" date,
  	"image"  VARCHAR(120) NOT NULL,
	"details" VARCHAR(1000),
	"genre_id" INT
);

CREATE TABLE "genre" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar (20)
);
-----------------------------------------------------------------------------------------------------------------------

-- Inserting 5 different genre types into genre table
-- will be utilizing these to map out onto Add Dream View
INSERT INTO "genre" (name) VALUES ('happy');
INSERT INTO "genre" (name) VALUES ('sad');
INSERT INTO "genre" (name) VALUES ('scary');
INSERT INTO "genre" (name) VALUES ('weird');
INSERT INTO "genre" (name) VALUES ('wonky');
-----------------------------------------------------------------------------------------------------------------------