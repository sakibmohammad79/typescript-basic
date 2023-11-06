{
    //
    //mapped type
    const numberOfArray: Array<number> = [1,2,3,4]

    // const numberOfArrayString : Array<string> = ['1', '2', '3', '4']
    const numberOfArrayString : Array<string> = numberOfArray.map(number => number.toString());
    console.log(numberOfArrayString)

    type AreaNumber = {
        hight: number,
        width: number;
    }
    type  hight = AreaNumber['hight'] //look up type
    // type AreaString = {
    //     hight: string,
    //     width: string
    // }

    type AreaSting<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AreaSting<{hight: string, width: number}> = {
        hight: '100',
        width: 150
    }









    //
}