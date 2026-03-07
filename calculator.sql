CREATE DATABASE calculator_db;

USE calculator_db;

CREATE TABLE calculations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    expression VARCHAR(100) NOT NULL,
    result VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO calculations (expression, result)
VALUES 
('5 + 3', '8'),
('10 - 2', '8'),
('6 * 7', '42'),
('20 / 4', '5');

SELECT * FROM calculations;

SELECT * FROM calculations
WHERE expression LIKE '%+%';

UPDATE calculations
SET result = '9'
WHERE id = 1;

DELETE FROM calculations
WHERE id = 2;

DELETE FROM calculations;