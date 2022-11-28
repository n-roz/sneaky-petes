<!-- Set up the Node.js application with MySQL. Connect to the MySQL database in the Node.js application.
Build the database calls. Use mysql2 to make calls to the database to execute the SQL queries.
Create the GET routes. Use Express.js to build the GET routes to perform the read operations.
Create the DELETE route. Use Express.js to build the DELETE routes to perform the delete operations.
Create the POST route. Use Express.js to build the POST routes to perform the create operations.
Save your progress with Git. Finally, we’ll need to close the corresponding GitHub issue. -->

<!-- CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    department_id INT,
    salary DECIMAL,
    manager_id INT
); -->
<!-- line 9 in package.json
// "test": "echo \"Error: no test specified\" && exit 1" -->

<!-- Sales, engineering, finance, legal -->

INSERT INTO employees (first_name, last_name, title, department_id, salary, manager_id)
VALUES 
('Ronald', 'Firbank', Sales Lead, Sales, 60000, null),
('Virginia', 'Woolf', Salesperson, Sales, 75000, null);
;

<!--  "test": "jest",
    "start": "node server.js" -->