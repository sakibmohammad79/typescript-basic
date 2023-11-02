{
//destructuring

const person = {
    id: 76,
    company: 'programming hero',
    name: {
        firstName: 'Md.',
        lastName: 'sakib',
    },
    contuct: "01800000000",
    address: 'Bangladesh',
}

const { company, name: {firstName}, contuct: contuctNo } = person;
 //name change contuct --> contuctNo
//do no use ---> company: string

//array destructuring
const friends: string[] = ['sakib', 'sorat', 'shagor', 'sohan', 'rahul', 'anupam'];
const [, , , bestfriend, ...restFreind] = friends;
 //output => ['sohan', 'rahul', 'anupam' ]

}