
// You can also perform nested destructuring for object properties. For example,

const person = {
    name: 'Jack',
    age: 26,
    hobbies: {
        read: true,
        playGame: true
    }
}

// nested destructuring
const {name, hobbies: {read, playGame}} = person;

console.log(name); //Jack
console.log(read); // true
console.log(playGame); // true