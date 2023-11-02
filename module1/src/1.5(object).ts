let user : {
    readonly company : 'Programming Hero'; //types --> literal types
    firstName : string;
    middleName? : string; //types --> optional types --> string | undefined
    lastName : string;
    isAdmin : boolean;
} = {
    company : 'Programming Hero',
    firstName : 'md',
    lastName : 'sakib',
    isAdmin : true,
}

user.firstName='mohammad';
// user.company='ustad' --> error because its literal types