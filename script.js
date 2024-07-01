function getComputerChoices() {
    let num = Math.floor(Math.random() * 3)
    return num < 1 ? "rock" : num == 1 ? "scissors" : "paper"
}

function getHumanChoice() {
    let answer = prompt("Enter your choice lowerCased: rock, paper or scissors")
    return answer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(bits, human) {
    let computerChoice = getComputerChoices();
    let humanChoice = getHumanChoice();


    if ((computerChoice == "rock" && humanChoice == "scissors") ||
        (computerChoice == "scissors" && humanChoice == "paper") ||
        (computerChoice == "paper" && humanChoice == "rock")) {
        console.log(`You lose ${computerChoice} beats ${humanChoice}`)
        computerScore++
        console.log(`Your score: ${humanScore}, Computer Score: ${computerScore}`)
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore++
        console.log(`Your score: ${humanScore}, Computer Score: ${computerScore}`)

    } else {
        console.log(`Draw! ${humanChoice} does not beat ${computerChoice}`)
        console.log(`Your score: ${humanScore}, Computer Score: ${computerScore}`)

    }

}


let button = document.querySelector("button");

button.addEventListener("click", playRound)

