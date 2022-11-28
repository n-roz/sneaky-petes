INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('George', 'Washington', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Adams', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Thomas', 'Jefferson', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('James', 'Madison', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Abraham', 'Lincoln', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Andrew', 'Jackson', 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Woodrow', 'Wilson', 2, null);

INSERT INTO department (department_name)
VALUES ('Sales');
INSERT INTO department (department_name)
VALUES ('Engineering');
INSERT INTO department (department_name)
VALUES ('Finance');
INSERT INTO department (department_name)
VALUES ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Salesperson', 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Engineer', 80000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 85000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Lawyer', 90000, 4);