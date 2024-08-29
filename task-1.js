/*
        Task-1
        You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

        Input:
        The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

        Output:
        Print the result.
*/

let money = prompt("Enter the Amount you have: ");

let applePrice = 300;
let orangePrice = 400;

let total = applePrice + orangePrice;

let result = money - total;

console.log("1kg apple price is", applePrice , "Tk");
console.log("1kg orange price is", orangePrice , "Tk");
console.log("You have", money , "Tk");
console.log("The shopkeeper will return", result , "Tk");
