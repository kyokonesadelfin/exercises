

// In a nested object, this refers to the current object scope of the method. In the following example
// this symbol within the details object refers to details.symbol


const india = {
    name: 'The Country India',
    independenceOn: 1947,

    details: {
        flag: 'Tricolored',
        currency: 'INR',
        printDetails() {
            console.log(`The flag is ${this.flag} and the currency is ${this.currency}.`)
        },
    },
}


india.details.printDetails()