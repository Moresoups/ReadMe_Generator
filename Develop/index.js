// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
function promptUser() {

    return inquirer.prompt([
        {
            type: "input",
            name: "project_title",
            message: "What is the name of your project (required)?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("please enter the name of your project (REQUIRED)");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "Motivation",
            message: "What was your motivation?",
            default: ""
        },
        {
            type: "input",
            name: "disc",
            message: "Please describe your project",
            default: ""
        },
        {
            type: "input",
            name: "credits",
            message: "please list everyone that worked on this project",
            default: ""
        },
        {
            type: "input",
            name: "cont",
            message: "please list instuctions for how to contribute to this project",
            default: ""
        },
        {
            type: "input",
            name: "test",
            message: "Please provide test instructions if applicable",
            default: ""
        },
        {
            type: "checkbox",
            message: "License?",
            name: "license",
            choices: [
                "[MIT License](LICENSE.txt)",
                "[GNU GPLv3 License](COPYING.txt)",
            ]
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email account"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your github username"
        },
        {
            type: "input",
            name: "repo",
            message: "add a repo link to your readme",
            default: ""
        }
        ,
        {
            type: "input",
            name: "other",
            message: "you may add any aditional notes here",
            default: ""
        }
    ]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log('SOMETHING FUCKED UP');
        }

        console.log("README.md file succesfully generated")
    });
}


// Function call to initialize app

promptUser();
