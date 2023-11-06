{
//learn abstraction

interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Car1 implements Vehicle1 {
    startEngine(): void {
        console.log('I am start the car engine')
    }

    stopEngine(): void {
        console.log("I am stop the car engine")
    }

    move(): void {
        console.log('I am move the car')
    }
    test(): void {
        console.log('I am testing');
    }
}

const startEngine = new Car1();
startEngine.startEngine();
const stopEngine = new Car1();
stopEngine.stopEngine();
const test = new Car1();
test.test();

//abstract using abstract class
abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    test(): void {
        console.log('I am testing');
    }
}

class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log('I am start the car engine')
    }

    stopEngine(): void {
        console.log("I am stop the car engine")
    }

    move(): void {
        console.log('I am move the car')
    }
}

const instance = new ToyotaCar();
instance.test();










}