CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP
);