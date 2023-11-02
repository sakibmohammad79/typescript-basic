//learning function
//normal function
//Arrow function

//normal function
function add(num1:number, num2:number):number{
    return num1 + num2;
}
//add(2,boolean) //error => Two number are number types
add(3,3);

//assing default value
function addDefault(num1:number=12, num2:number=20):number{
    return num1 + num2;
}
addDefault();

//Arrow function
const addArrow = (num1:number=10 , num2:number=20):number => num1 + num2;
// addArrow(10,20)

const poorUser = {
    name: 'sakib',
    balance: 0,
    addBalance(balance: number) : string {
        const myNewBalance = this.balance + balance;
        return `my new balance is ${myNewBalance}`
    }
}

//square every element
const arr : number[] = [1, 2, 3, 4];
const newArray: number[] = arr.map((element:number):number => element*element);

