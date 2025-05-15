function isEven(a: number, b: number, c: number): boolean {

    if ((a + b + c) % 2 === 0) return true;
    return false;
}
console.log(isEven(1,2,3))