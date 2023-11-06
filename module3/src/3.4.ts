//type guard ---> instanceof
{
class Parent {
    name: string;
    species: string;
    constructor(name: string, species: string){
        this.name = name;
        this.species = species
    }
    meSound(){
        console.log('make sound my own');
    }
}

class Dog extends Parent {
    constructor(name:string, species:string){
        super(name, species)
    }
    dogBark() {
        console.log('Dog barking');
    }
}

class Cat extends Parent {
    constructor(name:string, species:string){
        super(name, species)
    }
    catMeaw() {
        console.log('cat meawoing');
    }
}

//smartly handle korar jonno 
const isDog = (animal: Parent): animal is Dog => {
    return animal instanceof Dog;
}
const isCat = (animal: Parent): animal is Cat => {
    return animal instanceof Cat;
}

const getAnimal = (animal: Parent) => {
    if(isDog(animal)){
       animal.dogBark()
    }
    else if(isCat(animal)){
        animal.catMeaw();
    }
    else{
        animal.meSound();
    }
}

const dog= new Dog('bangali dog', "dog" )
// dogResult.dogBark();
const cat = new Cat('bangali dog', "dog" )
// catResult.catMeaw();
const getDog = getAnimal(dog);
console.log(getDog)












}