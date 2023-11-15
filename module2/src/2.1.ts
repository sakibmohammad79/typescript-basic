{
    //type assertion
    let anything: any;

    anything = 'sakib';
    anything = 234;

    // (anything as string).
    // (anything as number).

    const kmToGm = (value: string | number) : string | number | undefined => {
        if(typeof value === 'string') {
            const result = parseFloat(value) * 1000
            return `The result is : ${result}`
        }
        else if(typeof value === 'number'){
            return value * 1000;
        }
        else {
            return 'not a valid input'
        }
    }

    const resultPrint = kmToGm(100) as number
    // const resultPrint = kmToGm('1000') as string
    console.log(resultPrint);

    type CustomError = {
        message : string;
    }

    try{

    }
    catch(error){
        console.log((error as CustomError).message)
    }


}