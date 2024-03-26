/** Type of vehicle*/ 

class Vehicle{
    constructor(make, model, year){
        this.make = make
        this.model = model;
        this.year = year;
    }
    honk () {
        return "Beep.";
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;

    }
    }

/** Cars are a type of vehicle with 4 wheeels. */

class Car extends Vehicle {
    construtor(make, model,year){
        super(make, model, year);
        this.numWheels = 4
    }
}

/**Car are a type of vehicle with 2 whells. */

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "Vroom!!!";
    }
}
class Garage {
    constuctor(capacity) {
        this.vehicle = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)){
            return "Only vehicle are allowed in here!";
        }
        if(this.vehicle.length >= this.capacity){
            return "Sorry, we're full.";
        }
        this.vehicle.push(newVehicle);
        return "Vehicle added!";
    }
}