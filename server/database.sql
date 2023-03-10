CREATE TABLE koalas (
	"id" serial PRIMARY KEY,
	"name" varchar(18) NOT NULL,
	"gender" varchar(6),
	"age" integer,
	"ready_to_transfer" varchar(100),
	"notes" varchar(50)
); 

INSERT INTO "koalas" ("id", "name", "gender", "age", "ready_to_transfer", "notes")
VALUES (1, 'Scotty', 'M', 4, 'TRUE',  'Born in Guatamala'),
	   (2, 'Jean', 'F', 5, 'TRUE', 'Allergic to lots of lava'), 
	   (3, 'Ororo', 'F', 7, 'FALSE', 'Loves listening to Paula (Abdul)'),
	   (4, 'Logan', 'M', 15, 'FALSE', 'Loves the sauna'),
	   (5, 'Charlie', 'M', 9, 'TRUE', 'Favorite band is Nirvana'),
	   (6, 'Bets', 'F', 4, 'TRUE', 'Has a pet iguana'); 


UPDATE "koalas" SET ready_to_transfer = true WHERE id = 