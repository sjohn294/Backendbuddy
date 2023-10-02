// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule()
const fs= require("fs")
const path= require("path")
// TODO: Create an array of questions for user input
const  questions = [
    {
        type: "input", name: "title", message: "enter your project title", validate: (answer) => {
            if (answer === "") {
                return "required"
            }
            else {
                return true
            }
        }
    },
    {
        type: "input", name: "description", message: "enter your project descriprtion", validate: (answer) => {
            if (answer === "") {
                return "required"
            }
            else {
                return true
            }
        }
    },
    {
        type: "list", name: "license", message: "select your license", choices: ["MIT", "Apache 2.0", "GPL"]
    },
    {
        type: "input", name: "installation", message: "enter your installation instructions", default: "clone the repository and run npm i"
    },
    {
        type: "input", name: "github", message: "enter your Github User Name", validate: (answer) => {
            if (answer === "") {
                return "required"
            }
            else {
                return true
            }
        }
    },
    {
        type: "input", name: "email", message: "enter your Email", validate: (answer) => {
            if (answer === "") {
                return "required"
            }
            else {
                return true
            }
        }
    },
    {
        type: "input", name: "usage", message: "What is your project used for", validate: (answer) => {
            if (answer === "") {
                return "required"
            }
            else {
                return true
            }
        }
    },
    {
        type: "input", name: "test", message: "How do you test it", validate: (answer) => {
            if (answer === "") {
                return "required"
            }
            else {
                return true
            }
        }
    },
    {
        type: "input", name: "contGuideL", message: "What are the contribution guidlines", validate: (answer) => {
            if (answer === "") {
                return "required"
            }
            else {
                return true
            }
        }
    },
];
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(__dirname,"/examples/",fileName), data, (err)=>{
        if (err) throw err
    })
 }

// TODO: Create a function to initialize app


function init() {
    prompt(questions)
        .then(answers => generateMarkdown(answers))
        .then(response => writeToFile("ExREADME.md", response))
        .catch(err => {
            console.error("An error occurred:", err);
        });
}


// Function call to initialize app
init();
