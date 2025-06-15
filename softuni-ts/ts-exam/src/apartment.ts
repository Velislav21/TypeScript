import { Room } from "./contracts/room";
import { ValidRoomNumbers } from "./types";

export class Apartment implements Room {
    price: number;
    roomNumber: ValidRoomNumbers;
    numberOfGuests: number;

    constructor(
        price: number,
        roomNumber: ValidRoomNumbers,
        numberOfGuests: number
    ) {
        this.price = price;
        this.roomNumber = roomNumber;
        this.numberOfGuests = numberOfGuests;
    }

    get totalPrice(): number {
        return this.numberOfGuests * this.price;
    }

    get cancellationPrice(): number {
        return this.totalPrice * 0.80;
    }
}
