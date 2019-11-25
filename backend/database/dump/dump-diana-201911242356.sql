-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: diana
-- ------------------------------------------------------
-- Server version	5.7.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `companys`
--

DROP TABLE IF EXISTS `companys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `cnpj` varchar(20) DEFAULT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `description` text,
  `personal_link` varchar(50) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cnpj` (`cnpj`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `companys_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companys`
--

LOCK TABLES `companys` WRITE;
/*!40000 ALTER TABLE `companys` DISABLE KEYS */;
/*!40000 ALTER TABLE `companys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `educations`
--

DROP TABLE IF EXISTS `educations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `educations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `entity_name` varchar(25) DEFAULT NULL,
  `entity_location` varchar(255) DEFAULT NULL,
  `course_name` varchar(25) DEFAULT NULL,
  `course_init` datetime DEFAULT NULL,
  `course_final` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `educations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educations`
--

LOCK TABLES `educations` WRITE;
/*!40000 ALTER TABLE `educations` DISABLE KEYS */;
/*!40000 ALTER TABLE `educations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fieldname` varchar(255) DEFAULT NULL,
  `originalname` varchar(255) DEFAULT NULL,
  `mimetype` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `post_id` (`post_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `files_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `files_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow_people`
--

DROP TABLE IF EXISTS `follow_people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `follow_people` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `follow_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `follow_id` (`follow_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `follow_people_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow_people`
--

LOCK TABLES `follow_people` WRITE;
/*!40000 ALTER TABLE `follow_people` DISABLE KEYS */;
INSERT INTO `follow_people` VALUES (1,3,'2019-11-25 02:53:11','2019-11-25 02:53:11',5);
/*!40000 ALTER TABLE `follow_people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagens`
--

DROP TABLE IF EXISTS `imagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fieldname` varchar(255) DEFAULT NULL,
  `mimetype` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `small_image_path` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `post_id` (`post_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `imagens_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `imagens_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagens`
--

LOCK TABLES `imagens` WRITE;
/*!40000 ALTER TABLE `imagens` DISABLE KEYS */;
INSERT INTO `imagens` VALUES (1,'','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/avatar','1574634322749.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\avatar\\1574634322749.jpeg',NULL,'http://localhost:3333/media/1574634322749.jpeg',134534,'2019-11-24 22:25:22','2019-11-24 22:25:22',NULL,1),(2,'','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574637513195.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574637513195.jpeg',NULL,'http://localhost:3333/media/1574637513195.jpeg',155311,'2019-11-24 23:18:33','2019-11-24 23:18:33',1,1),(3,'','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574637514719.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574637514719.jpeg',NULL,'http://localhost:3333/media/1574637514719.jpeg',155311,'2019-11-24 23:18:34','2019-11-24 23:18:34',2,1),(4,'file','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/avatar','1574640847218.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\avatar\\1574640847218.jpeg',NULL,'http://localhost:3333/media/1574640847218.jpeg',534622,'2019-11-25 00:14:07','2019-11-25 00:14:07',NULL,2),(5,'file','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/avatar','1574641362561.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\avatar\\1574641362561.jpeg',NULL,'http://localhost:3333/media/1574641362561.jpeg',219583,'2019-11-25 00:22:42','2019-11-25 00:22:42',NULL,3),(6,'image','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574641384998.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574641384998.jpeg',NULL,'http://localhost:3333/media/1574641384998.jpeg',244301,'2019-11-25 00:23:05','2019-11-25 00:23:05',3,1),(7,'','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/avatar','1574641670060.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\avatar\\1574641670060.jpeg',NULL,'http://localhost:3333/media/1574641670060.jpeg',134534,'2019-11-25 00:27:50','2019-11-25 00:27:50',NULL,5),(8,'','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574641707714.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574641707714.jpeg',NULL,'http://localhost:3333/media/1574641707714.jpeg',155311,'2019-11-25 00:28:27','2019-11-25 00:28:27',4,5),(9,'file','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/avatar','1574641854584.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\avatar\\1574641854584.jpeg',NULL,'http://localhost:3333/media/1574641854584.jpeg',1493600,'2019-11-25 00:30:54','2019-11-25 00:30:54',NULL,6),(10,'image','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574641868131.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574641868131.jpeg',NULL,'http://localhost:3333/media/1574641868131.jpeg',511962,'2019-11-25 00:31:08','2019-11-25 00:31:08',5,1),(11,'image','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574642058247.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574642058247.jpeg',NULL,'http://localhost:3333/media/1574642058247.jpeg',987326,'2019-11-25 00:34:18','2019-11-25 00:34:18',6,6),(12,'image','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574642102083.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574642102083.jpeg',NULL,'http://localhost:3333/media/1574642102083.jpeg',155311,'2019-11-25 00:35:02','2019-11-25 00:35:02',7,1),(13,'image','image/png','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574642130222.png','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574642130222.png',NULL,'http://localhost:3333/media/1574642130222.png',3357328,'2019-11-25 00:35:30','2019-11-25 00:35:30',8,1),(14,'image','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574642183865.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574642183865.jpeg',NULL,'http://localhost:3333/media/1574642183865.jpeg',97527,'2019-11-25 00:36:24','2019-11-25 00:36:24',9,1),(15,'image','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574642208158.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574642208158.jpeg',NULL,'http://localhost:3333/media/1574642208158.jpeg',292268,'2019-11-25 00:36:48','2019-11-25 00:36:48',10,6),(16,'image','image/png','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574642260127.png','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574642260127.png',NULL,'http://localhost:3333/media/1574642260127.png',189696,'2019-11-25 00:37:40','2019-11-25 00:37:40',11,6),(17,'image','image/jpeg','F:\\Projetos\\social-woman\\backend/src/uploads/posts','1574642451638.jpeg','F:\\Projetos\\social-woman\\backend\\src\\uploads\\posts\\1574642451638.jpeg',NULL,'http://localhost:3333/media/1574642451638.jpeg',597167,'2019-11-25 00:40:51','2019-11-25 00:40:51',12,6);
/*!40000 ALTER TABLE `imagens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `job_type` varchar(50) DEFAULT NULL,
  `industry` varchar(25) DEFAULT NULL,
  `function` varchar(25) DEFAULT NULL,
  `categorie` varchar(25) DEFAULT NULL,
  `qnty` int(11) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (17,'Desenvolvedor j','Desenvolver funcionalidades front e back end Desenvolver funcionalidades front e back endDesenvolver funcionalidades front e back end','Desenvolvedor','Tecnologia da informação','Analista','carregador',1,1,'2019-11-25 01:39:15','2019-11-25 01:39:15',5),(18,'Desenvolvedor java','Desenvolver funcionalidades front e back end Desenvolver funcionalidades front e back endDesenvolver funcionalidades front e back end','Desenvolvedor','Tecnologia da informação','Analista','carregador',1,1,'2019-11-25 01:39:18','2019-11-25 01:39:18',5),(19,'Desenvolvedor React','Desenvolver funcionalidades front e back end Desenvolver funcionalidades front e back endDesenvolver funcionalidades front e back end','Desenvolvedor','Tecnologia da informação','Analista','carregador',1,1,'2019-11-25 01:39:20','2019-11-25 01:39:20',5),(20,'Desenvolvedor Node','Desenvolver funcionalidades front e back end Desenvolver funcionalidades front e back endDesenvolver funcionalidades front e back end','Desenvolvedor','Tecnologia da informação','Analista','carregador',1,1,'2019-11-25 01:39:23','2019-11-25 01:39:23',5),(21,'Desenvolvedor C#','Desenvolver funcionalidades front e back end Desenvolver funcionalidades front e back endDesenvolver funcionalidades front e back end','Desenvolvedor','Tecnologia da informação','Analista','carregador',1,1,'2019-11-25 01:39:28','2019-11-25 01:39:28',5),(22,'Desenvolvedor Phyton','Desenvolver funcionalidades front e back end Desenvolver funcionalidades front e back endDesenvolver funcionalidades front e back end','Desenvolvedor','Tecnologia da informação','Analista','carregador',1,1,'2019-11-25 01:39:37','2019-11-25 01:39:37',5),(23,'Analista de Procedure','Desenvolver funcionalidades front e back end Desenvolver funcionalidades front e back endDesenvolver funcionalidades front e back end','Desenvolvedor','Tecnologia da informação','Analista','carregador',1,1,'2019-11-25 01:39:43','2019-11-25 01:39:43',5);
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs_subs`
--

DROP TABLE IF EXISTS `jobs_subs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs_subs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `job_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `job_id` (`job_id`),
  CONSTRAINT `jobs_subs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `jobs_subs_ibfk_2` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs_subs`
--

LOCK TABLES `jobs_subs` WRITE;
/*!40000 ALTER TABLE `jobs_subs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs_subs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) DEFAULT NULL,
  `category` varchar(150) DEFAULT NULL,
  `content` text,
  `likes` int(11) DEFAULT NULL,
  `shares` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Teste Christian',NULL,'Outro Conteudo de uma postagem legal',13,4,'2019-11-24 23:18:33','2019-11-24 23:18:33',1),(2,'Teste Christian',NULL,'Outro Conteudo de uma postagem legal',13,4,'2019-11-24 23:18:34','2019-11-24 23:18:34',1),(3,'peter parker',NULL,'Mais um post legal',NULL,NULL,'2019-11-25 00:23:05','2019-11-25 00:23:05',3),(4,'Teste Christian',NULL,'Outro Conteudo de uma postagem legal',13,4,'2019-11-25 00:28:27','2019-11-25 00:28:27',5),(5,'nome sobrenome',NULL,'narutoooo',NULL,NULL,'2019-11-25 00:31:08','2019-11-25 00:31:08',1),(6,'nome sobrenome',NULL,'asdasdad',NULL,NULL,'2019-11-25 00:34:18','2019-11-25 00:34:18',6),(7,'Christian Alexsander',NULL,'asdasd',NULL,NULL,'2019-11-25 00:35:02','2019-11-25 00:35:02',1),(8,'nome sobrenome',NULL,'testeas',NULL,NULL,'2019-11-25 00:35:30','2019-11-25 00:35:30',1),(9,'nome sobrenome',NULL,'ovo',NULL,NULL,'2019-11-25 00:36:23','2019-11-25 00:36:23',1),(10,'nome sobrenome',NULL,'asdddd',NULL,NULL,'2019-11-25 00:36:48','2019-11-25 00:36:48',6),(11,'Christian Alexsander',NULL,'verde',NULL,NULL,'2019-11-25 00:37:40','2019-11-25 00:37:40',6),(12,'nome sobrenome',NULL,'asdasd',NULL,NULL,'2019-11-25 00:40:51','2019-11-25 00:40:51',6);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  `expertize` varchar(25) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) DEFAULT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `cpf` varchar(15) DEFAULT NULL,
  `current_company` varchar(50) DEFAULT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `description` text,
  `personal_link` varchar(255) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Christian','Alexsander','admin@leaf.com','777cdffb8fc2936b90b2dac9b9b80abdabd6a0c208e8421e678ca8bfed7b9b30','1999-06-13 03:00:00','99919999','O mundo','loren;','loren alo;','https://github.com/1ChristianAlex/;','31999999','2019-11-24 22:25:22','2019-11-24 22:25:22'),(2,'sssssss','sssssssssss','adminss@leaf.com','c9c4bd86fa00442dac492cd92ed9ca93c9e71273d01e174be9af20353ebe4652','2019-11-19 02:00:00','021.023.706-90',NULL,NULL,NULL,NULL,NULL,'2019-11-25 00:14:07','2019-11-25 00:14:07'),(3,'peter','parker','aaadmin@leaf.com','fd7939a547e22c4e745d5c6d9223394c32e05034b080e8c37380eb0389b1f930','2019-11-13 02:00:00','021.062.706-93',NULL,NULL,NULL,NULL,NULL,'2019-11-25 00:22:42','2019-11-25 00:22:42'),(5,'Christian','Alexsander','adssmin@leaf.com','777cdffb8fc2936b90b2dac9b9b80abdabd6a0c208e8421e678ca8bfed7b9b30','1999-06-13 03:00:00','993919999','O mundo','loren;','loren alo;','https://github.com/1ChristianAlex/;','31999999','2019-11-25 00:27:50','2019-11-25 00:27:50'),(6,'nome','sobrenome','teste@leaf.com','8533518f4d1a1fe202c8fe36ead463b62bca7e97b9d4a1d2e66a391ce566bc4f','2019-11-27 02:00:00','021.062.706-99',NULL,NULL,NULL,NULL,NULL,'2019-11-25 00:30:54','2019-11-25 00:30:54');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'diana'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-24 23:56:23
