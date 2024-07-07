function getComputerChoices() {
    let num = Math.floor(Math.random() * 3)
    return num < 1 ? "rock" : num == 1 ? "scissors" : "paper"
}

// function getHumanChoice() {
//     let answer = prompt("Enter your choice lowerCased: rock, paper or scissors")
//     return answer;
// }

let humanScore = 0;
let computerScore = 0;


let rockButton = document.querySelector(".rock")
let paperButton = document.querySelector(".paper")
let scissorsButton = document.querySelector('.scissors')

rockButton.addEventListener("click", () => {
    playRound("rock")
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors")
});

paperButton.addEventListener("click", () => {
    playRound("paper");
});

let roundResult = document.createElement("p")
let scores = document.createElement("p");
let resultDiv = document.querySelector(".result");



function playRound(human) {
    let computerChoice = getComputerChoices();

    if ((computerChoice == "rock" && human == "scissors") ||
        (computerChoice == "scissors" && human == "paper") ||
        (computerChoice == "paper" && human == "rock")) {
        roundResult.textContent = `You lose ${human} loses to ${computerChoice}`
        computerScore++
        scores.textContent = `Your score: ${humanScore}, Computer Score: ${computerScore}`
    } else if ((human == "rock" && computerChoice == "scissors") ||
        (human == "scissors" && computerChoice == "paper") ||
        (human == "paper" && computerChoice == "rock")) {
        roundResult.textContent = `You Win! ${human} beats ${computerChoice}`
        humanScore++
        scores.textContent = `Your score: ${humanScore}, Computer Score: ${computerScore}`
    } else {
        roundResult.textContent = `Draw! ${human} does not beat ${computerChoice}`
        scores.textContent = `Your score: ${humanScore}, Computer Score: ${computerScore}`
    }

    if (humanScore == 5) {
        scores.textContent = `Your score: ${humanScore}, Computer Score: ${computerScore}. YOU WON!`
    } else if (computerScore == 5) {
        scores.textContent = `Your score: ${humanScore}, Computer Score: ${computerScore}. You lost:(`
    }
    resultDiv.appendChild(roundResult)
    resultDiv.appendChild(scores)

}


let button = document.querySelector(".play");


