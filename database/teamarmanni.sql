-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/06/2023 às 16:10
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

CREATE TABLE `modalidade` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` varchar(300) DEFAULT NULL,
  `turno` varchar(20) NOT NULL,
  `dia_semana` enum('Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo') NOT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_fim` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `modalidade`
--

INSERT INTO `modalidade` (`id`, `nome`, `descricao`, `turno`, `dia_semana`, `hora_inicio`, `hora_fim`) VALUES
(1, 'kickboxing', '', 'manhã', 'Segunda', '06:00:00', '07:00:00'),
(2, 'kickboxing', '', 'manhã', 'Segunda', '07:00:00', '08:00:00'),
(3, 'kickboxing', '', 'manhã', 'Segunda', '08:00:00', '09:00:00'),
(4, 'kickboxing', '', 'tarde', 'Segunda', '17:00:00', '18:00:00'),
(5, 'kickboxing', '', 'tarde', 'Segunda', '18:00:00', '19:00:00'),
(6, 'kickboxing', '', 'noite', 'Segunda', '19:00:00', '20:00:00'),
(7, 'kickboxing', '', 'noite', 'Segunda', '20:00:00', '21:00:00'),
(8, 'kickboxing', '', 'noite', 'Terça', '19:00:00', '20:00:00'),
(9, 'jiu-jítsu', '', 'noite', 'Terça', '20:00:00', '21:00:00'),
(10, 'kickboxing', '', 'manhã', 'Quarta', '06:00:00', '07:00:00'),
(11, 'kickboxing', '', 'manhã', 'Quarta', '07:00:00', '08:00:00'),
(12, 'kickboxing', '', 'tarde', 'Quarta', '17:00:00', '18:00:00'),
(13, 'kickboxing', '', 'tarde', 'Quarta', '18:00:00', '19:00:00'),
(14, 'kickboxing', '', 'noite', 'Quarta', '19:00:00', '20:00:00'),
(15, 'kickboxing', '', 'noite', 'Quarta', '20:00:00', '21:00:00'),
(16, 'kickboxing', '', 'noite', 'Quinta', '19:00:00', '20:00:00'),
(17, 'jiu-jítsu', '', 'noite', 'Quinta', '20:00:00', '21:00:00'),
(18, 'kickboxing', '', 'manhã', 'Sexta', '06:00:00', '07:00:00'),
(19, 'kickboxing', '', 'manhã', 'Sexta', '07:00:00', '08:00:00'),
(20, 'kickboxing', '', 'tarde', 'Sexta', '17:00:00', '18:00:00'),
(21, 'kickboxing', '', 'tarde', 'Sexta', '18:00:00', '19:00:00'),
(22, 'kickboxing', '', 'noite', 'Sexta', '19:00:00', '20:00:00'),
(23, 'jiu-jítsu', '', 'noite', 'Sexta', '20:00:00', '21:00:00'),
(24, 'kickboxing', '', 'manhã', 'Sábado', '08:00:00', '09:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `modalidadeusuario`
--

CREATE TABLE `modalidadeusuario` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `modalidade_id` int(11) NOT NULL,
  `grau_faixa` varchar(30) DEFAULT NULL,
  `valor_modalidade` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tipousuarios`
--

CREATE TABLE `tipousuarios` (
  `id` int(11) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tipousuarios`
--

INSERT INTO `tipousuarios` (`id`, `type`) VALUES
(1, 'Professor'),
(2, 'Aluno');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome_aluno` varchar(50) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `telefone` varchar(50) DEFAULT NULL,
  `status_aluno` tinyint(1) NOT NULL DEFAULT 1,
  `email` varchar(35) NOT NULL,
  `tipousuarios_id` int(11) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome_aluno`, `data_nascimento`, `telefone`, `status_aluno`, `email`, `tipousuarios_id`, `senha`) VALUES
(42, 'Otávio', '1992-06-27', '31999856321', 1, 'otavio@email.com.br', 1, '123456'),
(43, 'Otávio', '1992-06-27', '31999856321', 1, 'otavio@email.com.br', 1, '123456');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `modalidade`
--
ALTER TABLE `modalidade`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `modalidadeusuario`
--
ALTER TABLE `modalidadeusuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`usuario_id`),
  ADD KEY `modalidade_id` (`modalidade_id`);

--
-- Índices de tabela `tipousuarios`
--
ALTER TABLE `tipousuarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipousuarios_id` (`tipousuarios_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `modalidade`
--
ALTER TABLE `modalidade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `modalidadeusuario`
--
ALTER TABLE `modalidadeusuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tipousuarios`
--
ALTER TABLE `tipousuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `modalidadeusuario`
--
ALTER TABLE `modalidadeusuario`
  ADD CONSTRAINT `modalidadeusuario_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `modalidadeusuario_ibfk_2` FOREIGN KEY (`modalidade_id`) REFERENCES `modalidade` (`id`);

--
-- Restrições para tabelas `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usertype` FOREIGN KEY (`tipousuarios_id`) REFERENCES `tipousuarios` (`id`),
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`tipousuarios_id`) REFERENCES `tipousuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
