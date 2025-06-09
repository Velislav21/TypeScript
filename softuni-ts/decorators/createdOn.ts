function createdOn(constructor: {new (...args: any[]): User3}) {
    return class extends constructor {
        createdOn = new Date()
    }
}


@createdOn
class User3 {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayUserInfo() {
        console.log(`${this.name}, Age: ${this.age} `)
    }
}

const user3 = new User3("John Doe", 30);

user3.displayUserInfo()

console.log(user3);

console.log((user3 as any).createdOn);