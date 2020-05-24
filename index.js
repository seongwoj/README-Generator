var inquirer = require("inquirer");
var fs = require("fs");

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "project-url",
        message: "The URL to your project?"
    },
    {
        type: "input",
        name: "project-name",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "project-description",
        message: "Please write a short description of your project."
    },
    {
        type: "checkbox",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
          "MIT",
          "APACHE 2.0",
          "GPL 3.0",
          "BSD 3",
          "None"
        ]
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "repo-information",
        message: "What does the user need to know about using the repository?"
    },
    {
        type: "input",
        name: "repo-contribute",
        message: "What does the user need to know about contributing to the repository?"
    }
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
