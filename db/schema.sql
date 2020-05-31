DROP TABLE IF EXISTS burgers;

DROP DATABASE IF EXISTS burger;

CREATE DATABASE burger;

USE burger;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50),
    devoured BOOLEAN,
	PRIMARY KEY (id)
);