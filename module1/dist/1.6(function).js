"use strict";
//learning function
//normal function
//Arrow function
//normal function
function add(num1, num2) {
    return num1 + num2;
}
//add(2,boolean) //error => Two number are number types
add(3, 3);
//assing default value
function addDefault(num1 = 12, num2 = 20) {
    return num1 + num2;
}
addDefault();
//Arrow function
const addArrow = (num1 = 10, num2 = 20) => num1 + num2;
// addArrow(10,20)
const poorUser = {
    name: 'sakib',
    balance: 0,
    addBalance(balance) {
        const myNewBalance = this.balance + balance;
        return `my new balance is ${myNewBalance}`;
    }
};
//square every element
const arr = [1, 2, 3, 4];
const newArray = arr.map((element) => element * element);
