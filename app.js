const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const DEFAULT_USER_CHHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`).toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHHOICE} for you...`);
        return DEFAULT_USER_CHHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else return SCISSORS;

};

const getWinner = (cChoice, pChoice) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK) {
        return RESULT_PLAYER_WINS;
    } else return RESULT_COMPUTER_WINS;
};

const startGame = () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you`

    if (winner === RESULT_DRAW) {
        message += ` had a draw.`
    } else if (winner === RESULT_PLAYER_WINS) {
        message += ` won.`
    } else message += ` lost.`;
    alert(message);
    gameIsRunning = false;
};

startGameBtn.addEventListener('click', startGame);