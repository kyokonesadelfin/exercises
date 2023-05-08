

//This in arrow function

const myNameIs = {
    name: 'Kyokonesa Delfin',

    regularFunction: function() {
        console.log(this.name)
    },

    arrowFunction: () => {
        console.log(this.name)
    },
}

myNameIs.regularFunction() //"Kyokonesa Delfin"
myNameIs.arrowFunction() // undefined