CREATE DATABASE hardware_store;
USE hardware_store;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(300) NOT NULL,
    especificacao VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INT NOT NULL
);

-- Inserindo os dados solicitados
INSERT INTO produtos (nome, especificacao, preco, quantidade) VALUES
('Gigabyte GeForce RTX 5060 WINDFORCE OC 8G', '8 GB GDDR7, PCIe x8 5.0', 2069.99, 10),
('MSI GeForce RTX 5070 12G SHADOW 2X OC', '12 GB GDDR7, PCIe x16 5.0', 4256.01, 12),
('GALAX GeForce RTX 5080 1-Click OC', '16 GB GDDR7, PCIe X16 5.0', 11997.22, 3),
('ASUS TUF Gaming GeForce RTX 5090 32GB GDDR7', '32 GB GDDR7, PCIe x16 5.0', 24299.99, 10),
('Gigabyte AORUS GeForce RTX 5090 MASTER 32G', '32 GB GDDR7, PCIe x16 5.0', 22499.99, 11);