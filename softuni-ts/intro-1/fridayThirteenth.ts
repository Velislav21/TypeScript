function friday(datesArr: unknown[]): unknown {
    return datesArr
        .reduce((resultArr: string[], date) => {
            if (date instanceof Date) {
                
                const dateAsString = date.toString();

                if (
                    dateAsString.includes("Fri") &&
                    dateAsString.includes("13")
                ) {
                    const formatedDate = new Intl.DateTimeFormat("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    }).format(date);

                    resultArr.push(formatedDate.split(" ").join("-"));
                }
            }
            return resultArr;
        }, []) // <-> initial resultArr value
        .join("\n");
}
console.log(
    friday([
        {},

        new Date(2025, 4, 13),

        null,

        new Date(2025, 5, 13),

        "13-09-2023",

        new Date(2025, 6, 13),
    ])
);
console.log(
    friday([
        new Date(2024, 0, 13),

        new Date(2024, 1, 13),

        new Date(2024, 2, 13),

        new Date(2024, 3, 13),

        new Date(2024, 4, 13),

        new Date(2024, 5, 13),

        new Date(2024, 6, 13),

        new Date(2024, 7, 13),

        new Date(2024, 8, 13),

        new Date(2024, 9, 13),

        new Date(2024, 10, 13),

        new Date(2024, 11, 13),
    ])
);
