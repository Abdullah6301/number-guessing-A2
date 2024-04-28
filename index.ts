#! usr/bin/ env node
import inquirer from "inquirer"
let condition : boolean = false;
const random = Math.floor(Math.random()* 50 +1);
while(condition!=true) {
const answer = await inquirer.prompt([
    {
        name: "usernumber",
        type: "number",
        message: "Guess the number between 1-50: ",
    }
])
if(answer.usernumber === random){
    console.log("Congraulation! you guessed right number");
    condition = true;
}
else if(answer.usernumber < random){
    console.log("Too low. Try again.")
}
else{
    console.log("Too high. Try again.")
}
}