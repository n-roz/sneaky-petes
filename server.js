// dependencies
const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const util = require('util');

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const con = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'ZB0sdHf6',
      database: 'employee_DB'
    },
    console.log('Connected to the employee database.')
  );

  con.query = util.promisify(con.query);

  con.connect(function (err) {
      if (err) throw err;
      initialAction();
  })
  
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// initial question menu
const initialAction = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'Choices',
            choices: [
                'View Employees',
                'View Departments',
                'View Roles',
                'Add Employees',
                'Add Departments',
                'Add Roles',
                'Update Employee Role',
                'Exit'
            ]
        });

        switch (answer.action) {
            case 'View Employees':
                employeeView();
                break;

            case 'View Departments':
                departmentView();
                break;

            case 'View Roles':
                roleView();
                break;

            case 'Add Employees':
                employeeAdd();
                break

            case 'Add Departments':
                departmentAdd();
                break

            case 'Add Roles':
                roleAdd();
                break

            case 'Update Employee Role':
                employeeUpdate();
                break

            case 'Exit':
                con.end(); //connection.end();
                break;
        };
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// view all employees 
const employeeView = async () => {
    console.log('Employee View');
    try {
        let query = 'SELECT * FROM employee';
        con.query(query, function (err, res) {
            if (err) throw err;
            let employeeArray = [];
            res.forEach(employee => employeeArray.push(employee));
            console.table(employeeArray);
            initialAction();
        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// view all departments
const departmentView = async () => {
    console.log('Department View');
    try {
        let query = 'SELECT * FROM department';
        con.query(query, function (err, res) {
            if (err) throw err;
            let departmentArray = [];
            res.forEach(department => departmentArray.push(department));
            console.table(departmentArray);
            initialAction();
        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// viw all roles
const roleView = async () => {
    console.log('Role View');
    try {
        let query = 'SELECT * FROM role';
        con.query(query, function (err, res) {
            if (err) throw err;
            let roleArray = [];
            res.forEach(role => roleArray.push(role));
            console.table(roleArray);
            initialAction();
        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// add a new employee
const employeeAdd = async () => {
    try {
        console.log('Employee Add');

        let roles = await con.query("SELECT * FROM role");

        let managers = await con.query("SELECT * FROM employee");

        let answer = await inquirer.prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'What is the first name of this employee?'
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'What is the last name of this employee?'
            },
            {
                name: 'employeeRoleId',
                type: 'input',
                message: "What is this employee's role ID?"
            },
            {
                name: 'employeeManagerId',
                type: 'input',
                message: "What is this employee's manager's ID?"
            }
        ])

        let result = await con.query("INSERT INTO employee SET ?", {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: (answer.employeeRoleId),
            manager_id: (answer.employeeManagerId)
        });

        console.log(`${answer.firstName} ${answer.lastName} added successfully.\n`);
        initialAction();

    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// add a new department
const departmentAdd = async () => {
    try {
        console.log('Department Add');

        let answer = await inquirer.prompt([
            {
                name: 'deptName',
                type: 'input',
                message: 'What is the name of the new department?'
            }
        ]);

        let result = await con.query("INSERT INTO department SET ?", {
            department_name: answer.deptName
        });

        console.log(`${answer.deptName} added successfully to departments.\n`)
        initialAction();

    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// add a new role
const roleAdd = async () => {
    try {
        console.log('Role Add');

        let departments = await con.query("SELECT * FROM department")

        let answer = await inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the name of the new role?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary?'
            },
            {
                name: 'departmentId',
                type: 'list',
                choices: departments.map((departmentId) => {
                    return {
                        name: departmentId.department_name,
                        value: departmentId.id
                    }
                }),
                message: 'What is the department ID?',
            }
        ]);
        
        let chosenDepartment;
        for (i = 0; i < departments.length; i++) {
            if(departments[i].department_id === answer.choice) {
                chosenDepartment = departments[i];
            };
        }
        let result = await con.query("INSERT INTO role SET ?", {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.departmentId
        })

        console.log(`${answer.title} role added successfully.\n`)
        initialAction();

    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// update roll for specific employee
const employeeUpdate = async () => {
    try {
        console.log('Employee Update');
        
        let employees = await con.query("SELECT * FROM employee");

        let employeeSelection = await inquirer.prompt([
            {
                name: 'employee',
                type: 'list',
                choices: employees.map((employeeName) => {
                    return {
                        name: employeeName.first_name + " " + employeeName.last_name,
                        value: employeeName.id
                    }
                }),
                message: 'Please choose an employee to update.'
            }
        ]);

        let roles = await con.query("SELECT * FROM role");

        let roleSelection = await inquirer.prompt([
            {
                name: 'role',
                type: 'list',
                choices: roles.map((roleName) => {
                    return {
                        name: roleName.title,
                        value: roleName.id
                    }
                }),
                message: 'Please select the new role.'
            }
        ]);

        let result = await con.query("UPDATE employee SET ? WHERE ?", [{ role_id: roleSelection.role }, { id: employeeSelection.employee }]);

        console.log(`The role was successfully updated.\n`);
        initialAction();

    } catch (err) {
        console.log(err);
        initialAction();
    };
}