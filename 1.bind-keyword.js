var car = {
    registrationNumber: "FT1234",
    brand: "Benz",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

car.displayDetails(); // FT1234 Benz

//But what if we want to borrow a method?
//var myCarDetails = car.displayDetails;
//myCarDetails();


//Well, this wont work as the "this" will now be assigned to the global context which doesn't have neither the registrationnumber nor the brand

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();