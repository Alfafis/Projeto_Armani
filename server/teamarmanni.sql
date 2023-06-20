-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21/06/2023 às 00:18
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
-- Estrutura para tabela `aluno`
--

CREATE TABLE `aluno` (
  `id` int(11) NOT NULL,
  `nome_aluno` varchar(50) DEFAULT NULL,
  `modalidade` varchar(50) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `telefone` varchar(50) DEFAULT NULL,
  `faixa` varchar(50) DEFAULT NULL,
  `status_aluno` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `aluno`
--

INSERT INTO `aluno` (`id`, `nome_aluno`, `modalidade`, `data_nascimento`, `telefone`, `faixa`, `status_aluno`) VALUES
(3, 'pedro santos', 'jiujitsu', '1992-03-10', '977777777', 'preta', 'ativo'),
(4, 'ana carla', 'jiujitsu', '1985-04-12', '977777777', 'amarela', 'ativo'),
(5, 'rafael custodio', 'Kickboxing', '1999-05-01', '989874589', 'azul', 'ativo'),
(6, 'sheldon cooper', 'Kickboxing', '2000-06-18', '998563256', 'laranja', 'ativo'),
(7, 'Albert Einstein', 'jiujitsu', '2003-07-03', '989565878', 'Marrom', 'ativo'),
(8, 'ana fernanda', 'jiujitsu', '2004-08-10', '985478956', 'Marrom', 'ativo'),
(9, 'charles francis xavier', 'jiujitsu', '1987-09-06', '989658745', 'preta', 'ativo'),
(10, 'Luffy', 'jiujitsu', '1998-10-03', '968547856', 'verde', 'ativo'),
(11, 'son goku', 'jiujitsu', '1985-11-05', '989658965', 'amarela', 'ativo'),
(12, 'light yagami', 'Kickboxing', '2004-12-15', '985698745', 'verde', 'ativo'),
(13, 'otavio', 'Kickboxing', '1993-01-17', '999999999', 'branca', 'inativo'),
(14, 'jessica', 'jiujitsu', '1995-02-20', '888888888', 'roxa', 'inativo'),
(15, 'Luan Santana', 'jiujitsu', '1992-03-10', '977777777', 'preta', 'inativo'),
(16, 'ana Julia', 'jiujitsu', '1985-04-12', '977777777', 'amarela', 'inativo'),
(17, 'ana Nobrega', 'Kickboxing', '1999-05-01', '989874589', 'azul', 'inativo'),
(18, 'lineu', 'Kickboxing', '2000-06-18', '998563256', 'laranja', 'inativo'),
(19, 'jose', 'jiujitsu', '2003-07-03', '989565878', 'Marrom', 'inativo'),
(20, 'ana luiza mendes', 'jiujitsu', '2004-08-10', '985478956', 'Marrom', 'inativo'),
(21, 'xico nunes', 'jiujitsu', '1987-09-06', '989658745', 'preta', 'inativo'),
(22, 'teste para  cadastro', 'jiujitsu', '1995-02-20', '888888888', 'roxa', 'ativo'),
(23, 'teste para  cadastro', 'jiujitsu', '1995-02-20', '888888888', 'roxa', 'ativo'),
(24, 'testar mensagem', 'jiujitsu', '1995-02-20', '888888888', 'roxa', 'ativo'),
(25, 'testar mensagem', 'jiujitsu', '1995-02-20', '888888888', 'roxa', 'ativo'),
(26, 'funcionaa.. que merda', 'jiujitsu', '1995-02-20', '888888888', 'roxa', 'ativo'),
(27, 'validar mensagem', 'jiujitsu', '1995-02-20', '888888888', 'roxa', 'ativo'),
(28, 'validar mensagem', 'jiujitsu', '1995-02-20', '331989656', 'roxa', 'ativo'),
(29, 'validar mensagem', 'jiujitsu', '1995-02-20', '331989656', 'roxa', 'ativo'),
(30, 'validar mensagem', 'jiujitsu', '1995-02-20', '331989656', 'roxa', 'ativo'),
(31, 'ingrifd', 'jiujitsu', '1995-02-20', '331989656', 'roxa', 'ativo'),
(40, 'teste 02', 'jiujitsu', '1995-02-20', '331989656', 'roxa', 'ativo');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aluno`
--
ALTER TABLE `aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
