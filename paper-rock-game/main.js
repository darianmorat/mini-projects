const computerSelection = document.querySelector('.computer-selection');
const userSelection = document.querySelector('.user-selection');
const result = document.querySelector('.result');
const userChoice = document.querySelectorAll('.button');
const resetGame = document.querySelector('.reset');

let playUser;
let playComputer;
let getResult;

userChoice.forEach((choice) =>
   choice.addEventListener('click', (e) => {
      playUser = e.target.textContent;
      userSelection.innerHTML = playUser;
      computerChoice();
      finalResult();
   })
);

function computerChoice() {
   const randomNumber = Math.floor(Math.random() * userChoice.length);

   if (randomNumber === 0) {
      playComputer = 'Rock';
   } else if (randomNumber === 1) {
      playComputer = 'Paper';
   } else if (randomNumber === 2) {
      playComputer = 'Scissors';
   }
   computerSelection.innerHTML = playComputer;
}

function finalResult() {
   if (playUser === playComputer) {
      getResult = 'This is a tie';
   } else if (playUser === 'Rock' && playComputer === 'Paper') {
      getResult = 'You lose';
   } else if (playUser === 'Rock' && playComputer === 'Scissors') {
      getResult = 'You win';
   } else if (playUser === 'Paper' && playComputer === 'Rock') {
      getResult = 'You win';
   } else if (playUser === 'Paper' && playComputer === 'Scissors') {
      getResult = 'You lose';
   } else if (playUser === 'Scissors' && playComputer === 'Rock') {
      getResult = 'You lose';
   } else if (playUser === 'Scissors' && playComputer === 'Paper') {
      getResult = 'You win';
   }
   result.innerHTML = getResult;
}

resetGame.addEventListener('click', (e) => {
   computerSelection.innerHTML = ' ';
   userSelection.innerHTML = ' ';
   result.innerHTML = ' ';
});
