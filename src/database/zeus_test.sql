-- MySQL dump 10.13  Distrib 5.7.35, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: zeus
-- ------------------------------------------------------
-- Server version	5.7.35

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
-- Table structure for table `atividades`
--

DROP TABLE IF EXISTS `atividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `atividades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `recurso` varchar(45) DEFAULT NULL,
  `tipo_atividade` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `bairro` varchar(45) DEFAULT NULL,
  `cidade` varchar(45) DEFAULT NULL,
  `detalhe_atividade` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `armario` varchar(45) DEFAULT NULL,
  `data_agendada_execucao` date DEFAULT NULL,
  `segmento` varchar(45) DEFAULT NULL,
  `flag_recente` varchar(45) DEFAULT NULL,
  `contador_repetido` int(45) DEFAULT NULL,
  `completamento_1` varchar(45) DEFAULT NULL,
  `motivo_cancelamento` varchar(45) DEFAULT NULL,
  `data_venda` datetime DEFAULT NULL,
  `categoria_cliente` varchar(45) DEFAULT NULL,
  `designador` varchar(45) DEFAULT NULL,
  `pon` varchar(45) DEFAULT NULL,
  `flag_portabilidade` varchar(45) DEFAULT NULL,
  `fim_janela_portabilidade` varchar(45) DEFAULT NULL,
  `comeco_janela_portabilidade` varchar(45) DEFAULT NULL,
  `tipo_prioridade` varchar(45) DEFAULT NULL,
  `id_tecnico` int(11) DEFAULT NULL,
  `nome_tecnico_repetido` varchar(45) DEFAULT NULL,
  `contexto_pendencia` varchar(45) DEFAULT NULL,
  `motivo_pendencia` varchar(45) DEFAULT NULL,
  `longitude` varchar(45) DEFAULT NULL,
  `latitude` varchar(45) DEFAULT NULL,
  `tecnologia_acesso` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atividades`
--

LOCK TABLES `atividades` WRITE;
/*!40000 ALTER TABLE `atividades` DISABLE KEYS */;
/*!40000 ALTER TABLE `atividades` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-20 22:21:15
