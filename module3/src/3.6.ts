{//access modifier
    class Person {
        public readonly name: string;
        public readonly id: number;
        private _balance: number;
        constructor(name:string,id:number, balance:number){
            this.name = name;
            this.id = id;
            this._balance = balance
        }
        // addBanlance(balance: number){
        //     this._balance = this._balance + balance;
        // }
        //using setter
        set addBalance(amount: number){
            this._balance = this._balance + amount;
        }

        // getBalance(){
        //     return this._balance;
        //using gatter
        get balance (){
            return this._balance
        }
        
    }

    
     const poorUser = new Person('sakib', 2, 40);
    // poorUser.addBanlance(20);
    // const amount = poorUser.getBalance();
    // console.log(amount)
    poorUser.addBalance = 23;
    const myBanlance = poorUser.balance
    console.log(myBanlance);



}