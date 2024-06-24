DROP DATABASE IF EXISTS `db_registro_users`;
CREATE DATABASE IF NOT EXISTS `db_registro_users`;

USE `db_registro_users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cpf` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `password_number` char(4),
  PRIMARY KEY (`id`)
);