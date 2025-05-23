function operator(
    param: string | string[] | number,
    operation: "Index" | "Length" | "Add",
    operand: number
){

    if (operation === 'Index' && typeof param !== "number") {
        return param[operand];
    }
    if (operation === "Length" && typeof param !== "number") {
        return param.length % operand
    }
    if (operation === "Add" && !Array.isArray(param)) {
        return Number(param) + operand;
    }
}
