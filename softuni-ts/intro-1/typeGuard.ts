function guard(input: unknown): boolean {
    
    return Array.isArray(input) && input.length > 0 && input.every(el => typeof el === 'string');
}
console.log(guard({}))
console.log(guard({test: "one"}))
console.log(guard([]))
console.log(guard(['a', 'b', 'c']))
console.log(guard(['a', 'b', 1]))