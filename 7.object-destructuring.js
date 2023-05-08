

//When destructuring objects, you should use the same name for the variable
//as the corresponding object key.

//let {name1, age, gender} = person;
//console.log(name1); // undefined


const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'
}


// destructuring assignment
// using different variable names
let { name: name1, age: age1, gender: gender1 } = person;

console.log(name1); // Sara
console.log(age1); // 25
console.log(gender1); // female