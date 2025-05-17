class ArrayUtils {

    constructor() {
        throw new Error('ArrayUtils cannot be instantiated.')
    }
    
    static average(arr: number[]) {
        if (arr.length === 0) {
            throw new Error('Array cannot be empty.')
        }
        return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
            
    }
    
    static max(arr: number[]) {
        return Math.max(...arr)    
    }
}