CREATE DATABASE copa_mundo;

USE copa_mundo;

CREATE TABLE selecoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    selecao VARCHAR(100) NOT NULL,
    grupo VARCHAR(5) NOT NULL
);

INSERT INTO selecoes (selecao, grupo) VALUES
('Brasil', 'G'),
('Suíça', 'G'),
('Camarões', 'G'),
('Sérvia', 'G');