
//In this context, this is now bound to the instance of Country, which is contained in the india constant.


function Country(name, independenceOn) {
    this.name = name 
    this.independenceOn = independenceOn

    this.describe = function() {
        console.log(`${this.name} got its independence on ${this.independenceOn}.`)
    }
}


const india = new Country('The Country India', 1947)

const japan = new Country('The Country Japan', 1897)

india.describe()
japan.describe()