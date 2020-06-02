/* local */
-- USE burger;

/* remote */
USE su7v5yqosqri4xi9;

/* local & remote */
TRUNCATE TABLE burgers;

INSERT burgers (burger_name) VALUES ("The Trotter");
INSERT burgers (burger_name,devoured) VALUES ("New Mexican",true);
INSERT burgers (burger_name) VALUES ("Smoked Out");
-- INSERT burgers (burger_name, devoured) VALUES ("Pendleton",false);

SELECT * FROM burgers;