#!/usr/bin/env node

import inquirer from "inquirer"


const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("welcome to my Guessing Game ")
 const answers = await inquirer.prompt([
 {

 name: "userGuessedNumber",
 type: "number",
 message: "Please guess a number between 6-1:",


 },

]);
  console.log(answers)
  
 if(answers.userGuessedNumber === randomNumber){
console.log("Congratulations! You guessed right number.");

  } else {
     console.log("You guessed wrong number");
  }