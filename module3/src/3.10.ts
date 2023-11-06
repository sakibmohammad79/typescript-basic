{//encaptulate
    //kono ekta property ke private protected emon type diye nij elakar baire hide kore pela
    class Person {
        public readonly name: string;
        public readonly id: number;
        //private use korle shudu matro nij classe eccess kora jabe
        //protected use korle nij class and child classe o access kora jabe
        private _balance: number;
        constructor(name:string,id:number, balance:number){
            this.name = name;
            this.id = id;
            this._balance = balance
        }
        addBanlance(balance: number){
            this._balance = this._balance + balance;
        }
        getBalance(){
            return this._balance;
        }
    }

    class StudentAccount extends Person {
        test(){
            this._balance = 0;
        }
    }
    
    const poorUser = new Person('sakib', 2, 20);
    poorUser.addBanlance(20);
    const amount = poorUser.getBalance();
    console.log(amount)












}