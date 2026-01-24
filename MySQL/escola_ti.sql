CREATE DATABASE escola_ti;
USE escola_ti;


CREATE TABLE Aluno (
    RA INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    nascimento DATE
) AUTO_INCREMENT = 123456;

CREATE TABLE Curso (
    codigo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    carga_horaria INT,   
    data_inicio DATE,    
    data_termino DATE   
);

CREATE TABLE Matricula (
    fk_curso INT NOT NULL,      
    fk_aluno INT NOT NULL,      
    data_matricula DATE,        
    valor DECIMAL(10, 2),      
    
    PRIMARY KEY (fk_curso, fk_aluno),
    FOREIGN KEY (fk_curso) REFERENCES Curso(codigo),
    FOREIGN KEY (fk_aluno) REFERENCES Aluno(RA)
);


INSERT INTO Aluno (nome, nascimento) VALUES
('Ana', '1972-01-10'),
('Bianca', '1973-02-11'),
('Carla', '1987-12-12'),
('Danilo', '1990-10-02'),
('Eliana', '1987-01-01');

INSERT INTO Curso (nome, carga_horaria, data_inicio, data_termino) VALUES
('java', 360, '2007-12-01', '2008-10-10'),
('auto cad', 60, '2008-01-10', '2008-05-10'),
('php', 90, '2008-02-15', '2008-07-10'),
('redes', 60, '2008-01-20', '2008-03-20');

INSERT INTO Matricula (fk_curso, fk_aluno, data_matricula, valor) VALUES
(1, 123456, '2007-09-10', 100.00),
(3, 123456, '2007-10-01', 60.00),
(1, 123457, '2007-09-01', 100.00),
(2, 123458, '2008-01-11', 50.00),
(2, 123459, '2007-07-20', 50.00),
(1, 123460, '2007-08-10', 80.00);

-- 1. Listar RA, nome do aluno e nome do curso em que o aluno está matriculado.
SELECT a.RA, a.nome AS Aluno, c.nome AS Curso
FROM Aluno a
JOIN Matricula m ON a.RA = m.fk_aluno
JOIN Curso c ON m.fk_curso = c.codigo;

-- 2. Listar RA, nome e curso, ordenado por nome do curso.
SELECT a.RA, a.nome AS Aluno, c.nome AS Curso
FROM Aluno a
JOIN Matricula m ON a.RA = m.fk_aluno
JOIN Curso c ON m.fk_curso = c.codigo
ORDER BY c.nome;

-- 3. Nome do curso e quantidade de alunos (apelido para campo).
SELECT c.nome AS Curso, COUNT(m.fk_aluno) AS Qtd_Alunos
FROM Curso c
JOIN Matricula m ON c.codigo = m.fk_curso
GROUP BY c.nome;

-- 4. Nome de TODOS os cursos e qtd alunos (mesmo se for 0). 
-- Utilizando LEFT JOIN pra garantir que cursos sem matrícula apareçam
SELECT c.nome AS Curso, COUNT(m.fk_aluno) AS Qtd_Alunos
FROM Curso c
LEFT JOIN Matricula m ON c.codigo = m.fk_curso
GROUP BY c.nome;

-- 5. Nome do curso e valor total recebido das matrículas. 
SELECT c.nome AS Curso, SUM(m.valor) AS Valor_Total
FROM Curso c
JOIN Matricula m ON c.codigo = m.fk_curso
GROUP BY c.nome;

-- 6. Nome do curso, valor total por curso e total geral arrecadado (WITH ROLLUP).
SELECT COALESCE(c.nome, 'TOTAL GERAL') AS Curso, SUM(m.valor) AS Valor_Arrecadado
FROM Curso c
JOIN Matricula m ON c.codigo = m.fk_curso
GROUP BY c.nome WITH ROLLUP;

-- 7. Valor médio pago em matrícula na escola (2 casas decimais). 
SELECT CAST(AVG(valor) AS DECIMAL(10,2)) AS 'Valor Médio'
FROM Matricula;

-- 8. Nome e valor médio de matrícula de cada curso (2 casas decimais).
SELECT c.nome AS Curso, CAST(AVG(m.valor) AS DECIMAL(10,2)) AS 'Valor Médio'
FROM Curso c
JOIN Matricula m ON c.codigo = m.fk_curso
GROUP BY c.nome;

-- 9. Cursos que não são VIP (pelo menos 2 alunos) e quantidade.
SELECT c.nome, COUNT(m.fk_aluno) AS Qtd_Alunos
FROM Curso c
JOIN Matricula m ON c.codigo = m.fk_curso
GROUP BY c.nome
HAVING COUNT(m.fk_aluno) >= 2;

-- 10. Cursos com mesma carga horária do curso de auto cad.
SELECT nome, carga_horaria
FROM Curso
WHERE carga_horaria = (SELECT carga_horaria FROM Curso WHERE nome = 'auto cad');

-- 11. Alunos que fazem aniversário no mesmo mês que Ana.
SELECT nome
FROM Aluno
WHERE MONTH(nascimento) = (SELECT MONTH(nascimento) FROM Aluno WHERE nome = 'Ana');

-- 12. Cursos com início em janeiro de 2008 que tenham alunos matriculados.
SELECT DISTINCT c.nome
FROM Curso c
JOIN Matricula m ON c.codigo = m.fk_curso
WHERE YEAR(c.data_inicio) = 2008 AND MONTH(c.data_inicio) = 1;

-- 13. Todos os cursos com início em janeiro de 2008 (tendo alunos ou não).
SELECT nome
FROM Curso
WHERE YEAR(data_inicio) = 2008 AND MONTH(data_inicio) = 1;

-- 14. Alunos que fizeram matrícula antes da data de início do curso (Brinde).
SELECT a.nome AS Aluno, c.nome AS Curso
FROM Matricula m
JOIN Aluno a ON m.fk_aluno = a.RA
JOIN Curso c ON m.fk_curso = c.codigo
WHERE m.data_matricula < c.data_inicio;

-- 15. Listar os cursos que ainda não iniciaram.
-- Comparando com a data atual do sistema (função CURDATE)
SELECT nome, data_inicio
FROM Curso
WHERE data_inicio > CURDATE();

-- 16. Alunos que fizeram matrícula de Sábado (Brinde).
-- funçaõ DAYOFWEEK, no qual 1=Domingo até 7=Sábado
SELECT a.nome
FROM Matricula m
JOIN Aluno a ON m.fk_aluno = a.RA
WHERE DAYOFWEEK(m.data_matricula) = 7;

-- 17. Alunos de Sábado recebem 50% de restituição. Exibir nome e valor a restituir.
SELECT a.nome AS Aluno, 
       CAST((m.valor * 0.5) AS DECIMAL(10,2)) AS 'Valor a Restituir'
FROM Matricula m
JOIN Aluno a ON m.fk_aluno = a.RA
WHERE DAYOFWEEK(m.data_matricula) = 7;

-- 18. Exibir o nome e a idade dos alunos. 
-- lembrar função TIMESTAMPDIFF que calcula a diferença em anos considerando dia/mês
SELECT nome, TIMESTAMPDIFF(YEAR, nascimento, CURDATE()) AS Idade
FROM Aluno;

-- 19. Listar o nome dos cursos e a duração em meses de cada um.
-- mudando o formato da data pra usar o PERIOD_DIFF
SELECT nome, PERIOD_DIFF(DATE_FORMAT(data_termino, '%Y%m'), DATE_FORMAT(data_inicio, '%Y%m')) AS 'Duração em meses)'
FROM Curso;