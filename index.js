// importing packages
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const mySql = require('mysql2');

// access to .env var
require('dotenv').config();

const connectDb = mySql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: process.env.password,
    database: process.env.database,
    }   
);

// add console log connection err 

// add console log connection picture when successful

// initial inquirer prompt

const initialPrompt = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View All Employees', 
                'Add Employee',
                'Update Employee Role',
                'View All Roles', 
                'Add Role', 
                'View All Departments', 
                'Add Department', 
                'Quit',
            ],
        },
    ])
    .then((answers) => {
        const { choices } = answers;

        switch (choices) {
            case 'View All Employees':
                console.log('')
                break;
            case 'Add Employee':
                console.log('')
                    break;
            case 'Update Employee Role':
                console.log('')
                    break;
            case 'View All Roles':
                console.log('')
                    break;
            case 'Add Role':
                console.log('')
                    break;
            case 'View All Departments':
                console.log('')
                    break;   
            case 'Add Department':
                console.log('')
                    break; 
            case 'Quit':
                connectDb.end()
                break; 
            default:
                console.log('')
                break;     
        };
    });
};

