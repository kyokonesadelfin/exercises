

// Assign Remaining Elements to a Single Variable

const arrValue = ['one', 'two', 'three', 'four'];

//destructuring assignment in arrays
//assigning remaining elements to y
const [x, ...y] = arrValue;

console.log(x); // one
console.log(y); // ["two", "three", "four"]