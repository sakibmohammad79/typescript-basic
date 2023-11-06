{
//learn polymorphisom
class Person {
    getSleep(){
        console.log('Person sleep 8 hours')
    }
}
class Student extends Person {
    getSleep(){
        console.log('Student sleep 7 hours');
    }
}
class Developer extends Person {
    getSleep(){
        console.log('developer sleep 6 hours')
    }
}
const getSleepingHours = (param: Person) => {
    param.getSleep();
}
const person1 = new Person();
const person2 = new Person();
const person3 = new Person();
console.log(getSleepingHours(person3));


//another example of polimorpism
class Shap {
    getArea(){
        return 0;
    }
}

class Circle extends Shap {
    redius: number
    constructor(redius: number){
        super();
        this.redius = redius
    }
    getArea(){
        return Math.PI * this.redius * this.redius
    }
}

class Rentangle extends Shap{
    hight: number;
    width: number;
    constructor(hight: number, width: number){
        super()
        this.hight = hight;
        this.width = hight;
    }
    getArea(): number {
        return this.hight*this.width;
    }
}

const getSahpArea = (param: Shap) => {
    console.log(param.getArea())
}

const getShap = new Shap();
const getCircleArea = new Circle(20);
const getRectangleArea = new Rentangle(10,10);
getSahpArea(getRectangleArea);











}