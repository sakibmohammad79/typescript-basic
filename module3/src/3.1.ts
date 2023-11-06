{
//Object Oriented Programming

class Animal {
    // name: string;
    // species: string;
    // sound: string;

    //user parameter properties --> public
    constructor(public name: string, public species: string, public sound: string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    speciesSound(){
        console.log(`The ${this.name} sound is ${this.sound}!`)
    }
}
//instance
const dog = new Animal('bangali dog', 'dog', 'gew gew');
dog.speciesSound();
const cat = new Animal('bangali cat', 'cat', 'meaw meaw');
cat.speciesSound();









}