

//call() and apply() method

// This time there is a car object without the displayDetails function, which is located in the global context.


var car = {
    registrationNumber: "FT1234",
    brand: "Benz"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " +this.brand)
}


// We can use the apply() function

displayDetails.apply(car, ["Kyokonesa"]); // Kyokonesa, this is your car: FT1234 Benz 


// Or

displayDetails.call(car, "Kyokonesa") // Kyokonesa, this is your car: FT1234 Benz 

// Note that when using the apply() function: the parameter must be placed in an array. 
///