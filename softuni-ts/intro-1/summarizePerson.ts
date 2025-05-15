function person(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] {

    let result: [number, string, number, string, string] = [id, "str", age, "str", "str"];

    if (!middleName) {
        result[1] = `${firstName} ${lastName}`
    } else if (middleName !== undefined) {
        result[1] =  `${firstName} ${middleName} ${lastName}`
    }

    if (!hobbies) {
        result[3] = "-"
    } else if (hobbies.length > 0) {
        result[3] = hobbies.join(', ')
    }

    if (!workInfo) {
        result[4] =  "-"
    } else if (workInfo) {
        result[4] = workInfo.join(" -> ")
    }

    return result;
}
console.log(person(21, 'Kristine', 'Neva', 23, ''))
