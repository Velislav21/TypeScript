function required(target: any, propertyKey: string | symbol, parameterIndex: number) {
  console.log(`Parameter ${parameterIndex.toString()} of ${propertyKey.toString()} is required.`);
}

class Greeter3 {
  greet(name: string, @required punctuation: string) {
    return "Hello, " + name + punctuation;
  }
}