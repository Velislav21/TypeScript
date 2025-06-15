"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyMotel = void 0;
const partialMonthlyMotel_1 = require("./contracts/partialMonthlyMotel");
function isRoom(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const hasAllKeys = "roomNumber" in value &&
        "totalPrice" in value &&
        "cancellationPrice" in value;
    if (!hasAllKeys) {
        return false;
    }
    const room = value;
    const hasCorrectTypes = typeof room.totalPrice === "number" &&
        typeof room.cancellationPrice === "number" &&
        typeof room.roomNumber === "string";
    if (!hasCorrectTypes) {
        return false;
    }
    const isRoomNumberValid = ['A01', 'A02', 'A03', 'B01', 'B02', 'B03'].includes(room.roomNumber);
    return isRoomNumberValid;
}
class MonthlyMotel extends partialMonthlyMotel_1.PartialMonthlyMotel {
    _totalBudget = 0;
    _rooms = new Map();
    _bookings = new Map();
    constructor() {
        super();
    }
    getTotalBudget() {
        return `Motel: ${partialMonthlyMotel_1.PartialMonthlyMotel.MotelName}
Total budget: $${this._totalBudget.toFixed(2)}`;
    }
    addRoom(newRoom) {
        if (!isRoom(newRoom)) {
            return "Value was not a Room.";
        }
        if (this._rooms.has(newRoom.roomNumber)) {
            return `Room '${newRoom.roomNumber}' already exists.`;
        }
        this._rooms.set(newRoom.roomNumber, newRoom);
        return `Room '${newRoom.roomNumber}' added.`;
    }
    bookRoom(roomNumber, bookedMonth) {
        const room = this._rooms.get(roomNumber);
        if (!room) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const existingBookings = this._bookings.get(roomNumber);
        if (existingBookings && existingBookings.has(bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }
        this._totalBudget += room.totalPrice;
        if (existingBookings) {
            existingBookings.add(bookedMonth);
        }
        else {
            this._bookings.set(roomNumber, new Set([bookedMonth]));
        }
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }
    cancelBooking(roomNumber, bookedMonth) {
        const room = this._rooms.get(roomNumber);
        if (!room) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const existingBookings = this._bookings.get(roomNumber);
        if (existingBookings && !existingBookings.has(bookedMonth)) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }
        this._totalBudget -= room.cancellationPrice;
        if (existingBookings) {
            existingBookings.delete(bookedMonth);
        }
        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }
}
exports.MonthlyMotel = MonthlyMotel;
//# sourceMappingURL=monthlyMotel.js.map