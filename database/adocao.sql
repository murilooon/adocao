// Criar uma base de dados
CREATE DATABASE adocao;

//Criar pelo menos uma tabela com pelo menos 3 campos
CREATE TABLE caes(
cod int(4) AUTO_INCREMENT,
nome varchar(30),
idade varchar(50),
tamanho varchar(1),
sexo varchar(1),
castrado boolean,
vacinado boolean,
vermifugado boolean,
cuidados_especiais boolean,
extra varchar(100),
nomeDoador varchar(30),
emailDoador varchar(50),
telefoneDoador varchar(11),
PRIMARY KEY (codc)
);