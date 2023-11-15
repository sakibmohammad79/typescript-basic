const EventEmitter = require('events');

//listener
const birthday = new EventEmitter();

birthday.on('birthday', () => {
    console.log('Happy Birthday To You!')
})
birthday.on('birthday', (gift) => {
    console.log(`Your Gift is ${gift}!`)
})

console.log(birthday.emit('birthday', 'watch'))
