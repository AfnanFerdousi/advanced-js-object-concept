// 1
const student = {name: 'Afnan', age: 16}
// 2
const person = new Object(); 
// 3
const human = Object.create(student);


// CLASS
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('ami', 16);
// console.log(peop);


// function
function Human(name) {
    this.name = name; 
}

const man = new Human('afnan');
// console.log(man);