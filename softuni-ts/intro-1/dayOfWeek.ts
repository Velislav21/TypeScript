enum DayOfWeek {
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturdayday",
    "Sunday",
}

function dayOfWeek(num: number): string {
    return DayOfWeek[num] || "error";
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(9));
