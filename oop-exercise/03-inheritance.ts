class Vehicle {
    brand;

    constructor(brand: string) {
        this.brand = brand;
    }

    drive(): string {
        return `Driving a ${this.brand}`;
    }
}

class Car extends Vehicle {
    model;
    constructor(brand: string, model: string) {
        super(brand);
        this.model = model;
    }

    override drive(): string {
        return `Driving a ${this.brand} ${this.model}`;
    }
}
const car = new Vehicle("Toyota");
const car2 = new Car("Toyota", "Corolla");
console.log(car2.drive());
