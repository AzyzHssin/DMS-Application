DROP DATABASE IF EXISTS market;
CREATE DATABASE market;
USE market;


CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    username varchar(40) NOT NULL,
    password varchar(255) NOT NULL,
    avatar VARCHAR(255) NOT NULL,
    wallet INT NOT NULL,
    tel VARCHAR(10) NOT NULL,
    PRIMARY KEY (ID)
);
CREATE TABLE sell(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(40) NOT NULL,
    image_url varchar(220) NOT NULL,
    price varchar(30) NOT NULL,
    description VARCHAR(255) NOT NULL,
    categorie VARCHAR(255) NOT NULL,
    quantite INT NOT NULL,
    tel VARCHAR(10) NOT NULL,
    users_id INT NOT NULL,
    PRIMARY KEY (ID),
    INDEX userId (users_id) ,
     CONSTRAINT userId
    FOREIGN KEY (users_id)
    REFERENCES market.users (id)
    ON DELETE CASCADE 
);
-- CREATE TABLE product(
--     id int NOT NULL AUTO_INCREMENT,
--     title varchar(40) NOT NULL,
--     image_url varchar(220) NOT NULL,
--     price varchar(30) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     categorie VARCHAR(255) NOT NULL,
--     quantite INT NOT NULL,
--     tel VARCHAR(10) NOT NULL,
--     users_id INT NOT NULL,
--     PRIMARY KEY (ID),
--     INDEX userId (users_id) ,
--      CONSTRAINT userId
--     FOREIGN KEY (users_id)
--     REFERENCES market.users (id)
--     ON DELETE CASCADE 
-- );

