{
    //
    //generic constraints with keyof operator
    type Vehicle = {
        bike: string,
        car: string,
        bmw: string,
    }

    type Owner = 'bike' | 'car' | 'bmw'; //manually

    type Owner2 = keyof Vehicle

    const person1 : Owner = 'bike';
    const person2 : Owner2 = 'bmw';

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'sakib',
        id: 234,
        email: 'sakib@gmail.com'
    }
    const getValue = getPropertyValue(user, 'name')










    //
}