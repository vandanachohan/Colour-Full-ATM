#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance = 5000000; // Dollar
let mypin = 123890;

// print welcome message

console.log(chalk.bold.bgMagenta("*****Welcome to code with vandana -ATM Machine*****"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if (pinAnswer.pin === mypin){
    console.log(chalk.italic.red("pin is correct, login Sucessfully"));
   // console.log(`current account balance is ${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: "Select an operator",
            choices: ["Withdrow Amount", "Check Balance"]
        }
    ])

    if(operationAns.operator === "Withdrow Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdrow",
          }
     ])
       if(amountAns.amount > myBalance){
           console.log("Insufficient Balance");
       }
       else{
           myBalance -= amountAns.amount;
           console.log(`${amountAns.amount} Withdrw Successfully`);
           console.log(`your Remaining Balance is: ${myBalance}`);
       }
  }
  else if(operationAns.operator === "Check Balance"){
    console.log(`Your Account Balance is:${myBalance}`);
  }

 }
  else{
    console.log("Pin is Incorrect, Try Again!");
  }
     
 
