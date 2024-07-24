CREATE DATABASE IF NOT EXISTS databaseApi;

USE databaseApi;

DROP TABLE IF EXISTS Task;

CREATE TABLE Members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL CHECK (CHAR_LENGTH(nome) >= 5),
    email VARCHAR(255) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS Task;

CREATE TABLE Task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL CHECK (CHAR_LENGTH(nome) >= 5 AND CHAR_LENGTH(nome) <= 50),
    descricao VARCHAR(140),
    finalizada BOOLEAN NOT NULL DEFAULT FALSE,
    data_termino DATETIME DEFAULT NULL,
    prioridade ENUM('Baixa', 'Média', 'Alta') NOT NULL DEFAULT 'Baixa',
    id_membro INT,
    FOREIGN KEY (id_membro) REFERENCES Members(id)
);

INSERT INTO Members (nome, email) VALUES ("Breno Gabriel", "bgml@cin.ufpe.br");

SELECT * FROM Task WHERE id = 2;

INSERT INTO Task (nome, descricao, prioridade, id_membro) VALUES ("Estudar", "bla bla bla", "Alta", 1);

-- Corrigindo o comando UPDATE
UPDATE Task
SET nome = "Estudar mais", 
    descricao = "ble ble ble", 
    prioridade = "Baixa",
    id_membro = 1
WHERE id = 1;

UPDATE Task
SET nome = "Estudar para a prova de PLC", 
    descricao = "Estudar Haskell", 
    prioridade = "Baixa",
    id_membro = 1
WHERE id = 1;

-- Inserção correta na tabela Task
INSERT INTO Task (nome, descricao, prioridade, id_membro) VALUES ("Estudar para a prova de PLC", "Estudar haskell", "Baixa", 1);

SELECT * FROM Members;
SELECT * FROM Task;
