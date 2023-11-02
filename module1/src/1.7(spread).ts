//spread operator
//rest operator

const freinds1 : string[] = ['sakib', 'sohan', 'rahul'];
const freinds2 : string[] = ['anupam', 'shagor', 'surat'];

//freinds1.push(freinds2) wrong
freinds1.push(...freinds2) // write --> spread operator use

//object spread
const mentors1 = {
    typescript : 'mezba',
    redux : 'mir',
    dbms : 'mizan',
}

const mentors2 = {
    prisma : 'firoz',
    next : 'tanmoy',
    cloud : 'nahid' 
}

const mentorList = {
    ...mentors1,
    ...mentors2
}

//learn rest operator
const greetFriends = (freind1: string, freind2: string, freind3: string) => {
    console.log(`welcome my all friends: ${freind1} ${freind2} ${freind3}`)
}
greetFriends('sakib', 'sohan', 'sorat')


//but when freind list large its difficult so we can use rest operators
const allFriends = (...freind: string[]) => {
    freind.forEach((freind: string) => console.log(freind))
}
allFriends('sakib', 'sohan', 'surat', 'rahul', 'anupam');
