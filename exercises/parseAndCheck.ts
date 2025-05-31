function parseAndCheck(values: []) {
    return Array.from(values, (value) => {
        if (isNaN(parseFloat(value))) {
            throw new Error("Invalid Number");
        }
        return parseFloat(value);
    });
}
