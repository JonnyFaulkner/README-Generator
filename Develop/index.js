const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require('fs')
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project: ',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter project title.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project: ',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide instrunctions for installation:',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for installation.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for use:',
            validate: instructions => {
                if (instructions) {
                    return true;
                } else {
                    console.log('Please provide instructions for use');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter GitHub username:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter Email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter Email address.')
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter testing instructions if there are no tests enter "No tests."',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter testing instructions if there are no tests enter"No tests."')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'licenseConfirm',
            message: 'Would you like to add licenses',
            default: false
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which licenses apply',
            choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Eclipse Public License', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0', 'ISC License', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License', 'Open Database license', 'Public Domain Dedication and License', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The zlib/libpng License'],
            when: ({ licenseConfirm }) => {
                if (licenseConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(readmeData => {
        return writeToFile(readmeData);
    })
};
// TODO: Create a function to write README file
function writeToFile(readmeData) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', generateMarkdown(readmeData), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();