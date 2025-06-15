import { AirconditionedRoom } from "./contracts/airconditionedRoom";
import { Motel } from "./contracts/motel";
import { PartialMonthlyMotel } from "./contracts/partialMonthlyMotel";
import { Room } from "./contracts/room";
import { SummerMonth, WinterMonth } from "./contracts/util";
import { ValidRoomNumbers } from "./types";


function isRoom(value: unknown): value is Room {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const hasAllKeys =
    "roomNumber" in value &&
    "totalPrice" in value &&
    "cancellationPrice" in value;

  if (!hasAllKeys) {
    return false;
  }
  const room = value as any;

  const hasCorrectTypes =
    typeof room.totalPrice === "number" &&
    typeof room.cancellationPrice === "number" &&
    typeof room.roomNumber === "string";

  if (!hasCorrectTypes) {
    return false;
  }

  const isRoomNumberValid = ['A01', 'A02', 'A03', 'B01', 'B02', 'B03'].includes(room.roomNumber);

  return isRoomNumberValid;
}


export class MonthlyMotel<TMonth extends SummerMonth | WinterMonth>
    extends PartialMonthlyMotel
    implements Motel
{
    private _totalBudget = 0;
    private _rooms: Map<ValidRoomNumbers, Room> = new Map();
    private _bookings: Map<string, Set<SummerMonth | WinterMonth>> = new Map();

    constructor() {
        super();
    }

    override getTotalBudget(): string {
        return `Motel: ${PartialMonthlyMotel.MotelName}
Total budget: $${this._totalBudget.toFixed(2)}`;
    }

    addRoom(newRoom: unknown): string {
        if (!isRoom(newRoom)) {
            return "Value was not a Room.";
        }

        if (this._rooms.has(newRoom.roomNumber)) {
            return `Room '${newRoom.roomNumber}' already exists.`;
        }

        this._rooms.set(newRoom.roomNumber, newRoom);
        return `Room '${newRoom.roomNumber}' added.`;
    }

    bookRoom(roomNumber: ValidRoomNumbers, bookedMonth: TMonth): string {
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
        } else {
            this._bookings.set(roomNumber, new Set([bookedMonth]));
        }

        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }

    cancelBooking(roomNumber: ValidRoomNumbers, bookedMonth: TMonth): string {

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
