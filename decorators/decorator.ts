function logger<T extends new (...args: any[]) => any>(
    target: T,
    ctx: ClassDecoratorContext
) {
    console.log("logger decorator");
    console.log(target);
    console.log(ctx);

    return class extends target {
        constructor(...args: any[]) {
            super(...args);

            console.log("class construcor");
            console.log(this);
        }
    };
}

function autobind(
    target: (...args: any[]) => any,
    ctx: ClassMethodDecoratorContext
) {
    console.log('works')
    ctx.addInitializer(function(this: any) {
        this[ctx.name] = this[ctx.name].bind(this);
    });
}

@logger
class Person {
    name = "Max";

    @autobind
    greet() {
        console.log(`I am ${this.name}`);
    }
}

const max = new Person();
const greet = max.greet;
greet();