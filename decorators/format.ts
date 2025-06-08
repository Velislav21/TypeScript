function format(formatString: string) {
  return function (target: any, propertyKey: string) {
    console.log(`Format for ${propertyKey}: ${formatString}`);
  };
}

class Greeter2 {
  @format("Hello, %s")
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }
}