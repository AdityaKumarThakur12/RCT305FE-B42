type Vehicle = {
    make: string;
    model: string;
    year: number;
    getDetails: () => string;
};

function createVehicle(make: string, model: string, year: number): Vehicle {
    return {
        make,
        model,
        year,
        getDetails: function (): string {
            return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
        },
    };
}

type Car = Vehicle & {
    fuelType: string;
};

function createCar(make: string, model: string, year: number, fuelType: string): Car {
    return {
        ...createVehicle(make, model, year),
        fuelType,
        getDetails: function (): string {
            return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Fuel Type: ${this.fuelType}`;
        },
    };
}

const myCar = createCar("Toyota", "Corolla", 2021, "Petrol");
console.log(myCar.getDetails()); 

