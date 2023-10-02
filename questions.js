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
        type: "list", name: "liscense", message: "select your liscence", choices: ["MIT", "Apache 2.0", "GPL"]
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
];
module.exports= questions