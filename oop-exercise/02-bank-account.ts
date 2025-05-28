class BankAccount2 {

    #balance;

    constructor(balance: number) {
        this.#balance = balance;
    }

    deposit(amount: number): void {
        this.#balance += amount;
    }
    withdraw(amount: number): void {

        if (amount > this.#balance) return; 
        
        this.#balance -= amount;
    }
    getBalance(): number {
        return this.#balance;
    }
}
const account = new BankAccount2(20);

account.withdraw(30);

console.log(account.getBalance());