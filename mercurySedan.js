const {Vehicle} = require("./vehicleBaseClass")

//this includes the vehicle class as a module
//const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...



//After you write the derived Car class, you should test it out.


//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...


class Car extends Vehicle {
    constructor(make, model, year, color, mileage, numberOfWheels) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = numberOfWheels;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }




//TO DO: Creating Instances and Testing Them

checkService() {
    if (this.mileage > 30000) {            
        this.scheduleService = true
        return this.scheduleService;                       
    }
}

start() {
    if (this.fuel > 0) {            
        console.log("engine has started.");
        return this.started = true
    } else {
        console.log("no fuel");
        return this.started = false;
    }
}

loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

        }
    } else {
        console.log(this.model + " " + this.make + " is full");
    }
}


}
//You can use the same instance "v" of the Vehicle class above for the base class.

let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v)

let mercurySedan = new Car('mercury', 'rad_sedan', '2002', 'white', '50000', '4')

mercurySedan.start()
mercurySedan.loadPassenger(5)
mercurySedan.stop()
mercurySedan.checkService()

console.log(mercurySedan)

let bmwE30 = new Car ('bmw', '325i', '1989','red','180000','4')
console.log(bmwE30)


//Create at least two new instances of the Car class and test them here:
