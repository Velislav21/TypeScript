type Names = {
    fName: string;
    lName: string;
    age: number;
    getPersonInfo: () => {};
};

type Loc = {
    city: string;
    street: string;
    number: number;
    postalCode: number;
    getAddressInfo: () => {};
};

let names: Names = {
    fName: "John",
    lName: "Doe",
    age: 22,
    getPersonInfo() {
        return `${this.fName} ${this.lName}, age ${this.age}`;
    },
};

let locationObj: Loc = {
    city: "Boston",
    street: "Nowhere street",
    number: 13,
    postalCode: 51225,
    getAddressInfo() {
        return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
    },
}; 

function createCombinedFunction(names: Names, location: Loc): Function {

    return (combinedObject: Names & Loc) => `Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`;
}

const combinedFunction = createCombinedFunction(names, locationObj);
let combinedPerson = Object.assign({}, names, locationObj);
console.log(combinedFunction(combinedPerson));
