################################################################################
# Database

DROP DATABASE IF EXISTS `barbearia_db`;
CREATE DATABASE IF NOT EXISTS `barbearia_db`;
USE `barbearia_db`;

################################################################################
# Tables

-- table 1 -> client
CREATE TABLE `client`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `phone_number` CHAR(11) NOT NULL
);
ALTER TABLE
    `client` ADD UNIQUE `client_phone_number_unique`(`phone_number`);

-- table 2 -> services
CREATE TABLE `services`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `service_name` VARCHAR(50) NOT NULL,
    `duration` INT NOT NULL
);

-- table 3 -> schedullings
CREATE TABLE `schedullings`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `date` DATE NOT NULL,
    `start_time` DATETIME NOT NULL,
    `end_time` DATETIME NOT NULL,
    `client_id` BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY(`client_id`) REFERENCES `client`(`id`)
);

-- table 4 -> services_schedulling
CREATE TABLE `services_schedulling`(
    `id_services` BIGINT UNSIGNED NOT NULL,
    `id_schedullings` BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_services`, `id_schedullings`),
    FOREIGN KEY (`id_services`) REFERENCES `services`(`id`),
    FOREIGN KEY (`id_schedullings`) REFERENCES `schedullings`(`id`)
);

################################################################################
# Insert Data

-- Exemplo de inserção de dados
INSERT INTO `services`(`service_name`, `duration`) VALUES ("Cabelo", 30);
INSERT INTO `services`(`service_name`, `duration`) VALUES ("Barba", 30);
INSERT INTO `services`(`service_name`, `duration`) VALUES ("Sobrancelha", 0);