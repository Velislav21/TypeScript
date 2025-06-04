type Result = {
    checkBalance: (_pin: string) => string | number;
    deposit: (_pin: string, ammount: number) => string;
    withdraw: (_pin: string, ammount: number) => string;
    changePin: (oldPin: string, newPin: string) => string;
};

function createAccount(pin: string, deposit: number): Result {
    let currBalance = deposit;
    return {
        checkBalance(_pin) {
            return pin !== _pin ? "Invalid PIN." : currBalance;
        },
        deposit(_pin, ammount) {
            if (pin !== _pin) {
                return "Invalid PIN.";
            }
            currBalance += ammount;
            return `Successfully deposited ${ammount}. Current balance: $${currBalance}.`;
        },
        withdraw(_pin, ammount) {
            if (pin !== _pin) {
                return "Invalid PIN.";
            }
            if (ammount <= currBalance) {
                currBalance -= ammount;
                return `Successfully withdrew ${ammount}. Current balance: $${currBalance}.`;
            } else {
                return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
            }
        },
        changePin(oldPin, newPin) {
            if (oldPin !== pin) {
                return "Invalid PIN.";
            }
            pin = newPin;
            return "PIN successfully changed!";
        },
    };
}
let acc = createAccount("1234", 100);

console.log(acc.checkBalance("oops"));
// "Invalid PIN."

console.log(acc.checkBalance("1234"));
// 100

console.log(acc.deposit("1234", 250));
// "Successfully deposited $250. Current balance: $350."

console.log(acc.withdraw("1234", 300));
// "Successfully withdrew $300. Current balance: $50."

console.log(acc.withdraw("1234", 100));
// "Withdrawal amount exceeds account balance. Transaction cancelled."

console.log(acc.changePin("1234", "5678"));
// "PIN successfully changed!"
