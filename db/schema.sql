DROP DATABASE IF EXISTS employees;
CREATE database employees;

USE employees;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);



-- CREATE TABLE department (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     title VARCHAR(30) NOT NULL,
--     department_id INT,
--     salary DECIMAL,
--     manager_id INT
-- );