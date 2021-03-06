/* local */
-- DROP DATABASE IF EXISTS burger;

-- CREATE DATABASE burger;

-- USE burger;

/* remote */
USE su7v5yqosqri4xi9;

/* local & remote */
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);