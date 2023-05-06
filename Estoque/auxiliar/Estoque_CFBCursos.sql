CREATE TABLE `usuario` (
  `n_usuario_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `s_nome_usuario` varchar(255),
  `n_tipousuario_tipousuario` int,
  `c_status_usuario` char
);

CREATE TABLE `telefone` (
  `n_telefone_telefone` int PRIMARY KEY AUTO_INCREMENT,
  `n_usuario_usuario` int,
  `s_ddd_telefone` varchar(255),
  `s_numero_telefone` varchar(255)
);

CREATE TABLE `tipousuario` (
  `n_tipousuario_tipousuario` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_tipousuario` varchar(255),
  `n_nivel_tipousuario` int
);

ALTER TABLE `usuario` ADD FOREIGN KEY (`n_tipousuario_tipousuario`) REFERENCES `tipousuario` (`n_tipousuario_tipousuario`);

ALTER TABLE `telefone` ADD FOREIGN KEY (`n_usuario_usuario`) REFERENCES `usuario` (`n_usuario_usuario`);
