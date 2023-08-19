CREATE TABLE `escola` (
  `n_escola_escola` int PRIMARY KEY AUTO_INCREMENT,
  `s_nome_escola` varchar(255),
  `n_status_escola` int
);

CREATE TABLE `pessoa` (
  `n_pessoa_pessoa` int PRIMARY KEY AUTO_INCREMENT,
  `n_escola_escola` int,
  `s_nome_pessoa` varchar(255),
  `n_tipo_pessoa` int,
  `s_status_pessoa` int
);

CREATE TABLE `laboratorio` (
  `n_laboratorio_laboratorio` int PRIMARY KEY AUTO_INCREMENT,
  `n_escola_escola` int,
  `s_nome_laboratorio` varchar(255),
  `n_status_laboratorio` int
);

CREATE TABLE `estacao` (
  `n_estacao_estacao` int PRIMARY KEY AUTO_INCREMENT,
  `n_laboratorio_laboratorio` int,
  `s_nome_estacao` varchar(255),
  `n_status_estacao` int
);

CREATE TABLE `procedimento` (
  `n_procedimento_procedimento` int PRIMARY KEY AUTO_INCREMENT,
  `n_estacao_estacao` int,
  `s_operacao_procedimento` varchar(255),
  `s_maquina_procedimento` varchar(255),
  `s_tempoCiclo_procedimento` varchar(255),
  `n_verificadoPor_procecimento` int,
  `n_autorizadoPor_procedimento` int,
  `d_data_procedimento` datetime,
  `n_pagina_procedimento` int,
  `s_revisao_procedimento` varchar(255),
  `s_numeroProposta_procedimento` varchar(255)
);

CREATE TABLE `itemProcedimento` (
  `n_itemProcedimento_itemProcedimento` int PRIMARY KEY AUTO_INCREMENT,
  `n_procedimento_procedimento` int,
  `n_passo_itemProcedimento` int,
  `s_imagem_itemProcedimento` varchar(255),
  `s_animacao_itemProcedimento` varchar(255),
  `s_instrucao_itemProcedimento` varchar(255),
  `n_status_itemProcedimento` int
);

CREATE TABLE `token` (
  `n_token_token` int PRIMARY KEY AUTO_INCREMENT,
  `n_pessoa_pessoa` int,
  `s_token_token` varchar(255),
  `s_validade_token` varchar(255)
);

ALTER TABLE `pessoa` ADD FOREIGN KEY (`n_escola_escola`) REFERENCES `escola` (`n_escola_escola`);

ALTER TABLE `laboratorio` ADD FOREIGN KEY (`n_escola_escola`) REFERENCES `escola` (`n_escola_escola`);

ALTER TABLE `estacao` ADD FOREIGN KEY (`n_laboratorio_laboratorio`) REFERENCES `laboratorio` (`n_laboratorio_laboratorio`);

ALTER TABLE `procedimento` ADD FOREIGN KEY (`n_estacao_estacao`) REFERENCES `estacao` (`n_estacao_estacao`);

ALTER TABLE `procedimento` ADD FOREIGN KEY (`n_verificadoPor_procecimento`) REFERENCES `pessoa` (`n_pessoa_pessoa`);

ALTER TABLE `procedimento` ADD FOREIGN KEY (`n_autorizadoPor_procedimento`) REFERENCES `pessoa` (`n_pessoa_pessoa`);

ALTER TABLE `itemProcedimento` ADD FOREIGN KEY (`n_procedimento_procedimento`) REFERENCES `procedimento` (`n_procedimento_procedimento`);

ALTER TABLE `token` ADD FOREIGN KEY (`n_pessoa_pessoa`) REFERENCES `pessoa` (`n_pessoa_pessoa`);
