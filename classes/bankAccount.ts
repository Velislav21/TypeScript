class BankAccount {

    accNumber: string;
    accHolder: string;
    balance: number;

    constructor(accNumber: string, accHolder: string, balance = 0) {
        this.accNumber = accNumber;
        this.accHolder = accHolder;
        this.balance = balance;
    }

    deposit(ammount: number) {
        if (ammount > 0) this.balance += ammount
    }
    withdraw(ammount: number) {
        if (ammount <= this.balance) this.balance -= ammount
    }
}