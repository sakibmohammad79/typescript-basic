const fs = require('fs');

//file read in asynchronus way
fs.readFile('./texts/read.txt', 'utf-8', (error, data) => {
    if(error){
        throw Error('Error Reading text')
    }
    else{
        console.log(data);
        //writting text in asyncrhonous way
        fs.writeFile('./texts/write2.txt', data, 'utf-8', (err) => {
            if(err){
                throw Error('error writing data');
            }
        })
    }
})
console.log('sakib');
