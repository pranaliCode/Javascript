const prompt = require("prompt-sync")();

let marks = Number(prompt("Enter marks: "));

if (marks >= 35)
    console.log("Pass");
else
    console.log("Fail");