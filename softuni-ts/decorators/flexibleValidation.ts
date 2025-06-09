export {};

function minLength(minLength: number) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalSetter = descriptor.set;

        descriptor.set = function (name: string) {
            if (name.length <= minLength)
                throw new Error(
                    `${propertyKey} must have a min length of ${minLength} characters`
                );

            originalSetter?.call(this, name);
        };
        return descriptor;
    };
}

function checkAge(min: number, max: number) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalSetter = descriptor.set;

        descriptor.set = function (age: number) {
            if (age < min || age > max)
                throw new Error(
                    `${propertyKey} must be between ${min} and ${max}`
                );

            originalSetter?.call(this, age);
        };
        return descriptor;
    };
}
function validatePassword(regex: RegExp) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalSetter = descriptor.set;

        descriptor.set = function (password: string) {
            if (!password.match(regex))
                throw new Error(`${propertyKey} needs to match ${regex}`);

            originalSetter?.call(this, password);
        };
        return descriptor;
    };
}

class User {
    private _name!: string;

    private _age!: number;

    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;

        this.age = age;

        this.password = password;
    }

    @minLength(1)
    set name(val: string) {
        this._name = val;
    }

    @checkAge(1, 100)
    set age(val: number) {
        this._age = val;
    }

    @validatePassword(/^[a-zA-Z0-9!@]+$/g)
    set password(val: string) {
        this._password = val;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}

// minLength = 1

// min = 1, max = 150

// regex = /^[a-zA-Z0-9!@]+$/g

// let user = new User(
//     "John",
//     130,
//     "hardPassword12"
// );

let user2 = new User("John", 30, "!test");

let user3 = new User("John", 25, "@werty");

let user4 = new User("Joh", 20, "password123");
