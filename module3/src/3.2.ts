{
    //Inheritance

    class Person {
        name: string;
        age: number;
        address: string
        constructor(name: string, age: number, address: string){
            //initialize
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(hour: number){
            console.log(`${this.name} Will sleep for ${hour} hour.`);
        }
    }

    class Student extends Person {
        // name: string;
        // age: number;
        // address: string
        constructor(name: string, age: number, address: string){
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name, age, address)
        }
        // getSleep(hour: number){
        //     console.log(`${this.name} Will sleep for ${hour} hour.`);
        // }
    }

   const student1 = new Student('sakib', 23, 'ctg');
    student1.getSleep(4);

    class Teacher extends Person {
        // name: string;
        // age: number;
        // address: string;
        designation: string;
        constructor(name:string, age:number, address:string, designation:string){
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name, age, address)
            this.designation = designation
        }
        // getSleep(hour: number){
        //     console.log(`${this.name} Will sleep for ${hour} hour.`);
        // }
        takeClass(takeClass: number){
            console.log(`${this.name} will taking class ${takeClass}`)
        }
    }
    const teacher1 = new Teacher('rahim', 23, 'ctg', 'professor');
    teacher1.getSleep(2);
    teacher1.takeClass(8)










}