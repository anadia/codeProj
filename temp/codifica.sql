-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: codifica
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercise` (
  `exercise_id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  PRIMARY KEY (`exercise_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES (1,'JavaScript básico: declarar variables de JavaScript'),(2,'JavaScript básico: almacenamiento de valores con el operador de asignación'),(3,'JavaScript básico: inicializar variables con el operador de asignación'),(4,'JavaScript básico: comprensión de las variables no inicializadas'),(5,'JavaScript básico: comprensión de la sensibilidad a mayúsculas y minúsculas en variables');
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(70) NOT NULL,
  `email` varchar(70) NOT NULL,
  `user` varchar(50) NOT NULL,
  `password` varchar(45) NOT NULL,
  `avatar` varchar(150) DEFAULT 'noAvatar.png',
  `is_admin` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_UNIQUE` (`user`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (7,'Juan Carrión','carri@gmail.com','carrion22','12122','Carri.jpg',_binary '\0'),(8,'Claudia Narducci','claudia@gmail.com','claudia','1223','Claudia.jpg',_binary '\0'),(9,'Adrián Malagamba','adrian@gmail.com','adrian','12343','Adrian.jpg',_binary '\0'),(10,'Laura','laura@gmail.com','laura','1233','Laura.jpg',_binary '\0'),(11,'Fernando Llamas','fer@gmail.com','fernando','121333','pokemonespadaescudo-sobble-glow-rgb-300dpi_pche.png',_binary '\0'),(14,'Rafael Hermoso','rafael@gmail.com','rafael','323232','Rafa.jpg',_binary '\0'),(15,'Juan Carlos','jc@gmail.com','juan','12344','noAvatar.png',_binary '\0'),(18,'conchita','conchi@gmail.com','conchi','12345','noAvatar.png',_binary '\0'),(20,'Rose Mary','rose@gmail.com','rose','12345','noAvatar.png',_binary '\0'),(22,'Manolo Bolo','bolo@gmail.com','bolo','12345','noAvatar.png',_binary '\0'),(23,'Rosa rosae','rosae@gmail.com','rosae','1234','noAvatar.png',_binary '\0'),(31,'Oscar Terres','oterres@gmail.com','oterres','12345','oscar.jpeg',_binary ''),(34,'Ruben','ruben@gmail.com','ruben','12345','noAvatar.png',_binary '\0'),(35,'ruben2','ruben2@gmail.com','ruben2','1233','Grace Hooper.jpg',_binary '\0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_exercise`
--

DROP TABLE IF EXISTS `user_exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_exercise` (
  `user_id` int NOT NULL,
  `exercise_id` int NOT NULL,
  `date` timestamp NOT NULL,
  `basic_score` int DEFAULT NULL,
  `quality_score` int DEFAULT NULL,
  PRIMARY KEY (`user_id`,`exercise_id`),
  KEY `fk_exercise_id_idx` (`exercise_id`),
  CONSTRAINT `fk_exercise_id` FOREIGN KEY (`exercise_id`) REFERENCES `exercise` (`exercise_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_exercise`
--

LOCK TABLES `user_exercise` WRITE;
/*!40000 ALTER TABLE `user_exercise` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_exercise` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-05  8:12:49
