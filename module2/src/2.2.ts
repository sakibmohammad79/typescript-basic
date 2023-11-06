{
//
//Interface


//using type
type User1 = {
    name: string,
    age: number,
}
const userInType : User1 = {
    name: 'sakib',
    age: 23
}
//new value add in type
type UserWithRoll = User1 & {roll : number}
const userWithRoll : UserWithRoll = {
    name: 'sakib',
    age: 23,
    roll: 1
}

//using interface
interface User2 {
    name : string,
    age: number
}

const userInInterface : User2 = {
    name: 'sakib', 
    age: 32
}

//new Value add in interface
interface UserWithRollNo  extends User2 {
     roll: number,
}

const user1 : UserWithRollNo = {
    name: 'sakib',
    age: 23,
    roll: 23
}
//type in number 
type Role = number;
const Roll: Role = 2

//type alias in array
type arrayNumber = number[];
const number : arrayNumber = [1,2,3,4,5]

//interface use in array;
interface Roll2 {
    [index: number] : number;
}
const number1: Roll2 = [1,3,3,4,5]

//type alias use in function
type Add1 = (num1: number, num2: number) => number;
const adding1: Add1 = (num1, num2) => num1 + num2;

//interface use in function
interface Add2 {
    (nums: number, num2: number): number
} 
const adding2 : Add2 = (num1, num2) => num1 + num2;




//
}