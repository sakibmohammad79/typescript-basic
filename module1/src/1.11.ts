{
    // ? ==> ternary operater || optional Chaining || nulish coalescing type

    //ternary operstor
     const age: number = 10;
    // if(age>18){
    //     console.log("Adult")
    // }
    // else{
    //     console.log('Not Adult');
    // }
    const isAdult = age >=18 ? 'adult' : 'not adult';
    //console.log(isAdult);

    //nullish coalescing operator
    //null || undefined ---> decition making
    const isAuthenticated = null;

    const result1 = isAuthenticated ?? 'guest';
    //console.log({result1})

    //example-> optional chainning and nulish coalescing

    type User = {
        name: string,
        id: number,
        address : {
            city: string,
            road: string,
            presentAddress: string,
            permanentAddress?: string,
        }
    }

    const person : User = {
        name: 'sakib',
        id: 3,
        address: {
            city: 'ctg',
            road: 'boalkhlai',
            presentAddress: 'ctg town'
        }
    }

    const permanentAddress = person?.address?.permanentAddress ?? 'No permanentAddress';
    console.log({permanentAddress});

}