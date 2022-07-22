const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template.js');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Welcome to the Team Profile Generator!\nWhat is the name of your team manager?'
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the manager's employee id number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?"
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is this manager's office number?"
        }
    ])
    .then(managerDetails => {
        const { name, id, email, officeNumber } = managerDetails;
        return new Manager(name, id, email, officeNumber);
    });
};

const promptTeam = team => {
    if (!team.members) {
        team.members = [];
    };
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: "What would you like to do next?",
            choices: ['Add an engineer', 'Add an intern', 'Finish and build team page']
        }
    ])
    .then(response => {
        if (response.choice === 'Finish and build team page') {
            return team;
        }
        else if (response.choice === 'Add an engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the engineer?'
                },
                {
                    type: 'number',
                    name: 'id',
                    message: "What is the engineer's employee id number?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the engineer's email address?"
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "What is engineer's github username?"
                }
            ])
            .then(engineerDetails => {
                const { name, id, email, github } = engineerDetails;
                
                team.members.push(new Engineer(name, id, email, github))
                return promptTeam(team);
            });
        }
        else if (response.choice === 'Add an intern') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the intern?'
                },
                {
                    type: 'number',
                    name: 'id',
                    message: "What is the intern's employee id number?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the intern's email address?"
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is intern's school?"
                }
            ])
            .then(internDetails => {
                const { name, id, email, school } = internDetails;
                
                team.members.push(new Intern(name, id, email, school))
                return promptTeam(team);
            });
        }
    });
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

promptManager()
    .then(promptTeam)
    .then(team => generateHTML(team))
    .then(html => writeFile(html));
    
   
    