interface Animal {

    makeSound(): "Woof";
}

class Dog implements Animal {

    makeSound(): "Woof" {
        return "Woof"
    };
}
const dog = new Dog();

console.log(dog.makeSound());