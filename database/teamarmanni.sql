-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/06/2023 às 22:26
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `teamarmanni`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `modalidade`
--

CREATE TABLE `modality` (
  `id` int(11) UNIQUE NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `dia_semana` enum('Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo') NOT NULL,
  `horario` time DEFAULT NULL
);

--
-- Despejando dados para a tabela `modalidade`
--

INSERT INTO `modality` (`id`, `nome`, `dia_semana`, `horario`) VALUES
(1, 'kickboxing', 'Segunda', '06:00:00'),
(2, 'kickboxing', 'Segunda', '07:00:00'),
(3, 'kickboxing', 'Segunda', '08:00:00'),
(4, '', 'Segunda', '09:00:00'),
(5, 'kickboxing', 'Segunda', '17:00:00'),
(6, 'kickboxing', 'Segunda', '18:00:00'),
(7, 'kickboxing', 'Segunda', '19:00:00'),
(8, 'kickboxing', 'Segunda', '20:00:00'),
(9, '', 'Terça', '06:00:00'),
(10, '', 'Terça', '07:00:00'),
(11, '', 'Terça', '08:00:00'),
(12, '', 'Terça', '09:00:00'),
(13, '', 'Terça', '17:00:00'),
(14, '', 'Terça', '18:00:00'),
(15, 'jiu-jítsu', 'Terça', '19:00:00'),
(16, 'kickboxing', 'Terça', '20:00:00'),
(17, 'kickboxing', 'Quarta', '06:00:00'),
(18, 'kickboxing', 'Quarta', '07:00:00'),
(19, '', 'Quarta', '08:00:00'),
(20, '', 'Quarta', '09:00:00'),
(21, 'kickboxing', 'Quarta', '17:00:00'),
(22, 'kickboxing', 'Quarta', '18:00:00'),
(23, 'kickboxing', 'Quarta', '19:00:00'),
(24, 'kickboxing', 'Quarta', '20:00:00'),
(25, '', 'Quinta', '06:00:00'),
(26, '', 'Quinta', '07:00:00'),
(27, '', 'Quinta', '08:00:00'),
(28, '', 'Quinta', '09:00:00'),
(29, '', 'Quinta', '17:00:00'),
(30, '', 'Quinta', '18:00:00'),
(31, 'kickboxing', 'Quinta', '19:00:00'),
(32, 'jiu-jítsu', 'Quinta', '20:00:00'),
(33, 'kickboxing', 'Sexta', '06:00:00'),
(34, 'kickboxing', 'Sexta', '07:00:00'),
(35, '', 'Sexta', '08:00:00'),
(36, '', 'Sexta', '09:00:00'),
(37, 'kickboxing', 'Sexta', '17:00:00'),
(38, 'kickboxing', 'Sexta', '18:00:00'),
(39, 'kickboxing', 'Sexta', '19:00:00'),
(40, 'jiu-jítsu', 'Sexta', '20:00:00'),
(41, '', 'Sábado', '06:00:00'),
(42, '', 'Sábado', '07:00:00'),
(43, 'kickboxing', 'Sábado', '08:00:00'),
(44, '', 'Sábado', '09:00:00'),
(45, '', 'Sábado', '17:00:00'),
(46, '', 'Sábado', '18:00:00'),
(47, '', 'Sábado', '19:00:00'),
(48, '', 'Sábado', '20:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `modalidadeusuario`
--

CREATE TABLE `student` (
  `id` int(11) UNIQUE NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `modalidade` varchar(255) NOT NULL,
  `grau_faixa` varchar(255) NOT NULL,
  `situacao` varchar(255) NOT NULL,
  `dia_semana` varchar(255)  NOT NULL,
  `horario` varchar(255) NOT NULL
);

--
-- Despejando dados para a tabela `modalidadeusuario`
--

INSERT INTO `student` (`id`, `nome`, `modalidade`, `grau_faixa`, `situacao`,`dia_semana`,   `horario`) VALUES
(1, "mateus", "kickboxing", 'branco', "regular", "segunda, terca, quinta, sexta", "09:00:00, 18:00:00"),
(2, "pedro", "jiu-jítsu", 'branco', "irregular", "terca, quinta, sexta", "07:00:00, 08:00:00"),
(3, "ingrid", "jiu-jítsu", 'rosa', "regular", "terca, quarta, sabado", "07:00:00, 08:00:00, 17:00:00, 18:00:00"),
(4, "rafael", "kickboxing", 'branco', "irregular", "segunda, quinta", "07:00:00, 08:00:00"),
(5, "brener", "kickboxing", 'branco', "regular", "segunda, sexta", "07:00:00, 08:00:00");

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `users` (
  `id` int(11) UNIQUE NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `senha` int(11) NOT NULL
)

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `users` (`id`, `nome`, `email`, `senha`) VALUES
(1, "Rafael", "rafael@email.com.br", 123),
(2, "Otávio", "otavio@email.com.br", 321),
(3, "Ingrid", "ingrid@email.com.br", 000);