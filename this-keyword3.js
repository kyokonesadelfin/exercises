

//a method is a function on an object, or a task that an object can perform.
//a method uses this to refer to the properties of an object
// this is the same as india. 

const india = {
    name: 'The Country India',
    independenceOn: 1947,

    describe() {
        console.log(`${this.name} got its independence on ${this.independenceOn}.`) 
    }
}

india.describe()