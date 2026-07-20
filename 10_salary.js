const prompt = require("prompt-sync")();

let salary = Number(prompt("Enter salary: "));

if (salary >= 50000)
    console.log("Bonus = 10000");
else
    console.log("Bonus = 5000");