{
//conditional type
type a1 = number;
type b1 = undefined;

type x = a1 extends null ? true : false;

type y = a1 extends null ? true : b1 extends number ? undefined : any;


type sheikh = {
    bike: true;
    car: true;
    ship: true
}

type CheckVehicle<T> = T extends keyof sheikh ? true : false;

type hasBike = CheckVehicle<'ca'>


}