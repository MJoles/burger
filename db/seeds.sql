-- Creating new rows containing initial burger data
INSERT INTO burgers (burger_name, devoured)
VALUES ("Angus Burger",true);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Hamburger",false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Chili Burger",false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Bacon Cheeseburger",true);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Butter Burger",false);

-- Verifying that the data was inserted in the table by pulling everything from it
SELECT * FROM burgers;
