{
//utility type

//Pick
type Person = {
    name: string,
    age: number,
    email? : string,
    contactNo: string
}
type NameAge = Pick<Person, 'name'|"age">
type Name = Pick<Person, keyof Person>

//omit (bad dewa)
type contactInfo = Omit<Person, 'name'|"age">

//require
type RequiredPerson = Required<Person>

//partial(all type are optional)
type optionalPerson = Partial<Person>

//readonly
type ReadonlyPerson = Readonly<Person>
const person1 : ReadonlyPerson = {
    name: 'sakib',
    age: 23,
    contactNo: '234354545'
}

// person1.name='sohan' ---> error

//record

// type MyObj = {
//     name: string,
//     dev: string
// }
type MyObj = Record<string, string>

const obj1: MyObj = {
    name: 'sakib',
    dev: 'MERN',
    location: 'ctg'
    // age: 234 ---> error
}

//no error
const emptyObject: Record<string, unknown> = {
    name: 'sakib',
    age: 34
}



}