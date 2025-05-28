class Personn {
    firstName;
    lastName;
    age

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };
    
    introduce(): string {
        return `My name is ${this.firstName} and I am ${this.age} years old.`;
    };
};