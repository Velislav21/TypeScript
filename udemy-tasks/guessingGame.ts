function guessingGame() {

    const randomNumber = Math.floor(Math.random() * 100)
    let isOver = false;
    let guessCounter = 0;

    return function (guessedNumber: number) {
        if (isOver) {
            return "The game is over, you already won!"
        }
        guessCounter++;

        if (randomNumber > guessedNumber) {
            return `${guessedNumber} is too low!`
        } else if (randomNumber < guessedNumber) {
            return `${guessedNumber} is too high!`
        } else if (randomNumber === guessedNumber) {
            isOver = true;
            return guessCounter > 1 ?
                `You win! You found ${randomNumber} in ${guessCounter} guesses.`
                : `You win! You found ${randomNumber} in ${guessCounter} guess.`
        }
    }
}

let game = guessingGame();
game(50); // "50 is too low!"
game(90); // "90 is too high!"
game(70); // "You win! You found 70 in 3 guesses."
game(70); // "The game is over, you already won!"