enum TravelVacation {
    Abroad = "Abroad",

    InCountry = "InCountry",
}

enum MountainVacation {
    Ski = "Ski",
    Hiking = "Hiking",
}

enum BeachVacation {
    Pool = "Pool",
    Sea = "Sea",
    ScubaDiving = "ScubaDiving",
}

interface Holiday {
    set start(val: Date);

    set end(val: Date);

    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday {
    private _start!: Date;
    private _end!: Date;

    constructor(startDate: Date, endDate: Date) {
        this.start = startDate;
        this.end = endDate;
    }

    set start(value: Date) {
        if (value > this._end) {
            throw new Error("Invalid date");
        }
        this._start = value;
    }
    set end(value: Date) {
        if (value < this._start) {
            throw new Error("Invalid date");
        }
        this._end = value;
    }

    getInfo(): string {
        return `Holiday: ${this._start.getDate()}/${this._start.getMonth() + 1}/${this._start.getFullYear()} - ${this._end.getDate()}/${this._end.getMonth() + 1}/${this._end.getFullYear()}`;
    }
}

class HolidayManager<
    T extends Holiday,
    V extends TravelVacation | MountainVacation | BeachVacation
> implements VacationManager<T, V>
{
    private holidays: Map<T, V> = new Map();

    reserveVacation(holiday: T, vacationType: V) {
        this.holidays.set(holiday, vacationType);
    }

    listReservations(): string {
        return Array.from(
            this.holidays.entries().reduce((resultArr: string[], currValue) => {
                resultArr.push(`${currValue[0].getInfo()} => ${currValue[1]}`)
                return resultArr;
            }, [])
        ).join("\n");
    }
}

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));

let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));

let holidayManager = new HolidayManager<Holiday, TravelVacation>();

holidayManager.reserveVacation(holiday, TravelVacation.Abroad);

holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);

console.log(holidayManager.listReservations());
