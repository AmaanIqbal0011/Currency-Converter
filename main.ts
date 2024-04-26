#! /usr/bin/env node

import inquirer from "inquirer";

const currency : any = {
        USD : 1,    // base country
        INR : 83.34,
        EUR : 0.93,
        SAR : 3.75,
        PKR : 280.05
        };


 let user_Answer = await inquirer.prompt(
    [
        {
            name : "from",
            type : "list",
            message : "Enter From Currency :",
            choices : ["PKR","USD","INR","EUR","SAR"]
        },
        {
            name : "to",
            type : "list",
            message : "Enter To Currency :",
            choices : ["PKR","USD","INR","EUR","SAR"]
        },
        {
            name : "amount",
            type : "number",
            message : "Enter Your Amount : ",
        },
    ],
);

let fromAmount = currency[user_Answer.from];
let toAmount = currency [user_Answer.to];
let amount = user_Answer.amount;
    // user amount converted to base amount
let amountConvertToDollar = amount / fromAmount;

let convertedAmount = (amountConvertToDollar * toAmount).toFixed(2);


console.log(convertedAmount);
