const {a, add} = require('./local-1');
const {a: a2, add: add2} = require('./local-2.js');
console.log(add(2,3));
console.log(a);
console.log(add2(2,3,3));
console.log(a2);

//built in module
const path = require('path');
console.log(path.join("/F:/typescript-technocrat/module6-node/",'local-1.js'))



