{
//learn static
class Counter {
    static count: number = 0;
    static increament() {
       return Counter.count = Counter.count + 1;
    }
    static decreament(){
        return Counter.count = Counter.count - 1;
    }
}

console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());

console.log(Counter.decreament());
console.log(Counter.decreament());
console.log(Counter.decreament());



// const instance3 = new Counter()
// console.log(instance3.decreament());
// console.log(instance3.decreament());

// const instance4 = new Counter()
// console.log(instance4.decreament())










}