DROP DATABASE IF EXISTS market;
CREATE DATABASE market;
USE market;


CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    username varchar(40) NOT NULL,
    password varchar(255) NOT NULL,
    avatar VARCHAR(255) NOT NULL,
    wallet INT NOT NULL,
    tel VARCHAR(10) NOT NULL
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
CREATE TABLE product(
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

INSERT INTO product (title, image_url, price, description, categorie, quantite, tel) VALUE (TV REDDRAGEON, https://storage.googleapis.com/tayara-migration-yams-pro/55/557b6539-2fb8-43cc-97ec-906499dee648, 599 DT, Ecran REDRAGON EMERALD 27 pouces 165 Hz, Résolution (H x V) : 1920 x 1080 , Format d'image : 16 : 9 , Temps de réponse : 1 ms , Angle de vision LR, UD (CR> 10) : H 178 / V 178, 5, 22 222 222 )
