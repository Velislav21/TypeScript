function guard(input: unknown): boolean {
    
    let isValid = true;

    if (Array.isArray(input)) {
        if (input.length > 0) {
            
            input.forEach((el) => {
                if (typeof el !== 'string') {
                    isValid = false;
                }
            })
        } else {
            isValid = false;
        }
    } else {
        isValid = false;
    }

    return isValid;
}
console.log(guard({}))
console.log(guard({test: "one"}))
console.log(guard([]))
console.log(guard(['a', 'b', 'c']))
console.log(guard(['a', 'b', 1]))