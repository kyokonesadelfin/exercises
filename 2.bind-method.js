

// Let me rewrite the car object
var car = {
    registrationNumber: "FT1234",
    brand: "Benz",

    displayDetails: function(ownerName) {
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}


//Example of passing arguments with bind()

var myCarDetails = car.displayDetails.bind(car, "Kyokonesa"); // Kyokonesa
myCarDetails();