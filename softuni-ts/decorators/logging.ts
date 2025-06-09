function log2(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;

    descriptor.value = function(...args: string[]) {
        console.log(`Function '${methodName}' called with arguments: ${args.join(', ')}`);
        return originalFn(args);
    }
    return descriptor;
}


class Person {
    fName: string;
    lName: string;

    @log2
    static getFullName(fName: string, lName: string): string {
        return `${fName} ${lName}`;
    }

    constructor(fName: string, lName: string) {
        this.fName = fName;
        this.lName = lName;
    }
}
let person2 = new Person('John', 'Does');

Person.getFullName(person2.fName, person2.lName)

Person.getFullName('Benny', 'Tres');