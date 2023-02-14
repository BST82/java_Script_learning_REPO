const prompt=require("prompt-sync")();

let enter_your_age= prompt("Enter Your Age");
if (enter_your_age>=18) {
  console.log("You are eligible");
} else {
    console.log("You are not eligible");
}
