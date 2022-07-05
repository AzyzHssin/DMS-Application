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
-- user 1:

INSERT INTO users (id,username,password,avatar,wallet,tel) values (1,"oussama","12345","https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/279821323_4528401350594374_454581373161697365_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SpYK_Cv3HhEAX-oghsU&_nc_ht=scontent.ftun10-1.fna&oh=00_AT-WoNfJQrvlI6Q9A67bDzW7ls5RFEWehrvJI1W07VZ9jA&oe=62C84636",0,"25144182");

-- user 2:

INSERT INTO users (id,username,password,avatar,wallet,tel) values (2,"azyz","0000","https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-1/134697923_486862972279760_4002742007612350545_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SSmJBJG7NVwAX-KmUji&_nc_ht=scontent.ftun1-2.fna&oh=00_AT9oj5TdBwDWi1yLUaXyuWijYTlWcLkdsZqsttqQCyMETA&oe=62E9E392",0,"25144182");


CREATE TABLE sell(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(40) NOT NULL,
    image_url varchar(500) NOT NULL,
    price varchar(30) NOT NULL,
    description VARCHAR(500) NOT NULL,
    categorie VARCHAR(500) NOT NULL,
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
CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT,
    title_p VARCHAR(40) NOT NULL,
    image_p VARCHAR(500) NOT NULL,
    price_p VARCHAR(20) NOT NULL,
    description_p VARCHAR(500) NOT NULL,
    categorie_p VARCHAR(500) NOT NULL,
    quantite INT NOT NULL,
    tel VARCHAR(10) NOT NULL,
    users_id INT NOT NULL, 
    PRIMARY KEY (id),
    CONSTRAINT users_id
    FOREIGN KEY (users_id)
    REFERENCES market.users (id)
    ON DELETE CASCADE
);
-- user1 data:

INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("Samsung TV", "https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg","3196 DT","SAMSUNG 65-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65TU8000FXZA, 2020 Model)","Crystal processor 4K", 3,"22 222 222",1 );
INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("Midual Motor", "https://thepack.news/wp-content/uploads/2021/04/verge_motorcycles_blog-768x768.jpg","5.600 DT","Newsflash | Verge Motorcycles won the 2021 Red Dot Design Award for Product Design","OX Motorcycles ", 8,"22 222 222",1 );
INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("Original Sherpa Trucker Jacket", "https://lsco.scene7.com/is/image/lsco/levis/clothing/361360003-alt1-pdp.jpg","128 DT","The cozier counterpart to our Original Trucker Jacket. Levis® iconic, instantly recognizable jean jacket has been a symbol of individual self-expression for decades. This classic is lined with fuzzy sherpa for warmth and comfort, all while keeping it authentic."," Levis", 18,"22 222 222",1 );
INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("iphone 13 pro", "https://www.apple.com/v/iphone-13-pro/f/images/overview/design/finishes_1_alpine_green__bxgqurawflau_large.jpg","3.250 DT","A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The worlds fastest smartphone chip. Exceptional durability. And a huge leap in battery life."," ProMotion technology with adaptive refresh rates up to 120Hz · HDR display · True Tone · Wide color (P3)", 6,"22 222 222",1 );
INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("TOYOTA C-SEGMENT MPV", "https://www.indiacarnews.com/wp-content/uploads/2020/05/Toyota-Avanza-MPV-1.jpg","72.500DT","Wide selection of Cars at affordable price with unbeatable services and value for money."," 1.5L petrol turbo engine", 2,"22 222 222",1 );
INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("PC Gamer","https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/0/7/9/079e9d41a8_50178680_boitier-pc-gamer.jpg","3.500 DT","PC GAMER THEGREAT 71054-4."," Processeur Intel core i7-7700 (up to 4.2 GHz) Carte mère : MSI H110M PRO VD", 10,"22 222 222",1 );
INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("PC Gamer","https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/0/7/9/079e9d41a8_50178680_boitier-pc-gamer.jpg","3.500 DT","PC GAMER THEGREAT 71054-4","Processeur Intel core i7-7700 (up to 4.2 GHz) Carte mère : MSI H110M PRO VD",10,"22 222 222",1);
INSERT INTO sell(title, image_url, price, description, categorie, quantite, tel,users_id) VALUES ("511™ Slim Fit Men's Jeans","https://lsco.scene7.com/is/image/lsco/levis/clothing/361360003-alt1-pdp.jpg","68 DT","The cozier counterpart to our Original Trucker Jacket. Levi's® iconic, instantly recognizable jean jacket has been a symbol of individual self-expression for decades. This classic is lined with fuzzy sherpa for warmth and comfort, all while keeping it authentic.","Levis",26,"22 222 222",1);

-- user2 data:



