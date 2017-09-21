CREATE TABLE pessoa (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    ativo BIT(1) NOT NULL,
    logradouro VARCHAR(100),
    numero VARCHAR(10),
	complemento VARCHAR(50),
	bairro VARCHAR(50),
	cep VARCHAR(10),
	cidade VARCHAR(50),
	estado VARCHAR(2)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO pessoa(nome, ativo, logradouro, numero, complemento, bairro, cep, cidade, estado) values ('Jose Silva', 1, 'Av. Getulio Vargas', '311', 'Proximo ao Carrefour', 'Centro', '31270-300', 'Belo Horizonte', 'MG');
INSERT INTO pessoa(nome, ativo, logradouro, numero, complemento, bairro, cep, cidade, estado) values ('Joao Souza', 1, 'Rua Marques de Sapucai', '200', 'Proximo ao Sambodromo', 'Marquês', '21070-511', 'Rio de Janeiro', 'RJ');
INSERT INTO pessoa(nome, ativo, logradouro, numero, complemento, bairro, cep, cidade, estado) values ('Maria Chaves', 1, 'Av Brasil', '1530', '', 'São Paulo', '11104-124', 'São Paulo', 'SP');
INSERT INTO pessoa(nome, ativo, logradouro, numero, complemento, bairro, cep, cidade, estado) values ('Manuel Portuga', 0, 'Rua Vasco da Gama', '122', 'Proximo a Concessionaria Fiat', 'Lusitano', '21454-325', 'Rio de Janeiro', 'RJ');
INSERT INTO pessoa(nome, ativo, logradouro, numero, complemento, bairro, cep, cidade, estado) values ('Luiz Carlos', 1, 'Rua Prof. Magalhaes Penido', '444', 'Proximo ao Aeroporto', 'São Luiz', '31270-700', 'Belo Horizonte', 'MG');
INSERT INTO pessoa(nome, ativo) values ('Carla Dias', 0);
INSERT INTO pessoa(nome, ativo) values ('Leticia Marques', 1);
INSERT INTO pessoa(nome, ativo) values ('Joana Maldonado', 1);
INSERT INTO pessoa(nome, ativo) values ('Jair Rodrigues', 0);
INSERT INTO pessoa(nome, ativo) values ('Samuel Rosa', 1);