"use strict";
//spread operator
//rest operator
const freinds1 = ['sakib', 'sohan', 'rahul'];
const freinds2 = ['anupam', 'shagor', 'surat'];
//freinds1.push(freinds2) wrong
freinds1.push(...freinds2); // write --> spread operator use
//object spread
const mentors1 = {
    typescript: 'mezba',
    redux: 'mir',
    dbms: 'mizan',
};
const mentors2 = {
    prisma: 'firoz',
    next: 'tanmoy',
    cloud: 'nahid'
};
const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
//learn rest operator
const greetFriends = (freind1, freind2, freind3) => {
    console.log(`welcome my all friends: ${freind1} ${freind2} ${freind3}`);
};
greetFriends('sakib', 'sohan', 'sorat');
//but when freind list large its difficult so we can use rest operators
const allFriends = (...freind) => {
    freind.forEach((freind) => console.log(freind));
};
allFriends('sakib', 'sohan', 'surat', 'rahul', 'anupam');
