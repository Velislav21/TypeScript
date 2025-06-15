"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
class Apartment {
    price;
    roomNumber;
    numberOfGuests;
    constructor(price, roomNumber, numberOfGuests) {
        this.price = price;
        this.roomNumber = roomNumber;
        this.numberOfGuests = numberOfGuests;
    }
    get totalPrice() {
        return this.numberOfGuests * this.price;
    }
    get cancellationPrice() {
        return this.totalPrice * 0.80;
    }
}
exports.Apartment = Apartment;
//# sourceMappingURL=apartment.js.map