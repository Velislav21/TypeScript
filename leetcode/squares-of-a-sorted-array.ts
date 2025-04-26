function sortedSquares(input: number[]) {

    const squaredArray = input.map((num) => Math.pow(num, 2)).sort((a, b) => a - b)
    return squaredArray
}
sortedSquares([-4,-1,0,3,10])