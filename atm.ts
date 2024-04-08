#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 50000
let myPin = 98989


let operation = await inquirer.prompt([{
name : "input",
type :"number",
message : "Enter Your ATM Pin:"

}]);

if( operation.input === myPin ) {
console.log("Pin Varifiyed!")


let furtherOperation = await inquirer.prompt([{
    name : "operators",
    type : "list",
    message : "Choose Further Operation to Proceed",
    choices : ["Withdraw", "Current Balance", "Fast cash"]

}]);

if(furtherOperation.operators === "Withdraw") {
let inputAmount = await inquirer.prompt([{
    name : "amount",
    type : "number",
    message : "Enter Withdraw Amount:"
}]) 
if(inputAmount.amount <= myBalance) {

let remainingBal = myBalance - inputAmount.amount 
console.log(`Your remaining balance is : ${remainingBal}`)
}

else { console.log("Insufficient Balance")
}

}

else if (furtherOperation.operators === "Current Balance"){
    console.log (myBalance);
}

else if (furtherOperation.operators === "Fast cash") {

    let makeChoice = await inquirer.prompt([{
        name : "userChoice",
        type : "list",
        message : "Select given Amount:",
        choices : [5000, 10000, 20000] 
    }]);
    
  
    if(makeChoice.userChoice === 5000) {
       let deduction = myBalance - makeChoice.userChoice 
       console.log(`Your remainig balance is : ${deduction}`)
    } 

    if(makeChoice.userChoice === 10000) {
        let deduction = makeChoice.userChoice -= myBalance
        console.log(`Your remainig balance is : ${deduction}`)
     } 
 

     if(makeChoice.userChoice === 20000) {
        let deduction = makeChoice.userChoice -= myBalance
        console.log(`Your remainig balance is : ${deduction}`)
     } 
 

    else {
        console.log("Offer not valid here. Try another way!")
    }
}


}

else {
    console.log("Wrong Pincode!!")
}


























