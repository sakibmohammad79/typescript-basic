"use strict";
var _a, _b;
{
    // ? ==> ternary operater || optional Chaining || nulish coalescing type
    //ternary operstor
    const age = 10;
    // if(age>18){
    //     console.log("Adult")
    // }
    // else{
    //     console.log('Not Adult');
    // }
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    //console.log(isAdult);
    //nullish coalescing operator
    //null || undefined ---> decition making
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'guest';
    const person = {
        name: 'sakib',
        id: 3,
        address: {
            city: 'ctg',
            road: 'boalkhlai',
            presentAddress: 'ctg town'
        }
    };
    const permanentAddress = (_b = (_a = person === null || person === void 0 ? void 0 : person.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No permanentAddress';
    console.log({ permanentAddress });
}
