<!-- CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    department_id INT,
    salary DECIMAL,
    manager_id INT
); -->

INSERT INTO employees (first_name, last_name, title, department_id, salary, manager_id)
VALUES 
('Ronald', 'Firbank', Sales Lead, Sales, 60000, null),
('Virginia', 'Woolf', Salesperson, Sales, 75000, null);
;