function convertArr(input: string[]): [string, number] {

    return [input.join(''), input.join('').length]
}
console.log(convertArr(['How', 'are', 'you?']))