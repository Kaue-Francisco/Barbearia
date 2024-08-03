DROP DATABASE IF EXISTS `barbearia_db`;
CREATE DATABASE IF NOT EXISTS `barbearia_db`;
USE `barbearia_db`;

CREATE TABLE `client`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone_number` CHAR(11) NOT NULL
);
ALTER TABLE
    `client` ADD UNIQUE `client_email_unique`(`email`);
ALTER TABLE
    `client` ADD UNIQUE `client_phone_number_unique`(`phone_number`);

CREATE TABLE `services`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `service_name` VARCHAR(50) NOT NULL,
    `duration` INT NOT NULL
);

CREATE TABLE `schedullings`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `data` DATE NOT NULL,
    `start_time` DATETIME NOT NULL,
    `end_time` DATETIME NOT NULL,
    `client_id` BIGINT UNSIGNED NOT NULL
);

CREATE TABLE `services_schedulling`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_services` BIGINT UNSIGNED NOT NULL,
    `id_schedullings` BIGINT UNSIGNED NOT NULL
);

ALTER TABLE
    `schedullings` ADD CONSTRAINT `schedullings_client_id_foreign` FOREIGN KEY(`client_id`) REFERENCES `client`(`id`);
ALTER TABLE
    `services_schedulling` ADD CONSTRAINT `services_schedulling_id_services_foreign` FOREIGN KEY(`id_services`) REFERENCES `services`(`id`);
ALTER TABLE
    `services_schedulling` ADD CONSTRAINT `services_schedulling_id_schedullings_foreign` FOREIGN KEY(`id_schedullings`) REFERENCES `schedullings`(`id`);