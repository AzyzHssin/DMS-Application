DROP DATABASE IF EXISTS market;
CREATE DATABASE market;
USE market;


CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    username varchar(40) NOT NULL,
    password varchar(255) NOT NULL,
    avatar VARCHAR(500) NOT NULL,
    wallet INT NOT NULL,
    tel VARCHAR(10) NOT NULL,
    PRIMARY KEY (ID)
);
INSERT INTO users (id,username,password,avatar,wallet,tel) values (1,"oussama","12345","https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/279821323_4528401350594374_454581373161697365_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SpYK_Cv3HhEAX-oghsU&_nc_ht=scontent.ftun10-1.fna&oh=00_AT-WoNfJQrvlI6Q9A67bDzW7ls5RFEWehrvJI1W07VZ9jA&oe=62C84636",0,"25144182");
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
INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("TOYOTA C-SEGMENT MPV", "https://www.indiacarnews.com/wp-content/uploads/2020/05/Toyota-Avanza-MPV-1.jpg","72.500DT","Wide selection of Cars at affordable price with unbeatable services and value for money."," 1.5L petrol turbo engine", 2,"22 222 222",1 );
INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("Samsung TV", "https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg","3196 DT","SAMSUNG 65-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65TU8000FXZA, 2020 Model)","Crystal processor 4K", 3,"22 222 222",1 );
INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("Midual Motor", "https://thepack.news/wp-content/uploads/2021/04/verge_motorcycles_blog-768x768.jpg","5.600 DT","Newsflash | Verge Motorcycles won the 2021 Red Dot Design Award for Product Design","OX Motorcycles ", 8,"22 222 222",1 );