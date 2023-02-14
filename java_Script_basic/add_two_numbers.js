
const prompt=require("prompt-sync")();
//ading two numbers 

let number_1=parseInt(prompt("Enter 1st number "));
let number_2=parseInt(prompt("Enter 2nd number "));
let sum=number_1+number_2;
console.log("Sum of Two Numbers "+sum);

// how to use prompt in our ja folder
// 1 ) npm init
// 2)  npm install prompt-sync
// 3) for user input write it ==== const prompt=require("prompt-sync")();