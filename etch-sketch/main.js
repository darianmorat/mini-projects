function populateBoard(size) {
   let board = document.querySelector('.board');
   let squares = board.querySelectorAll('div');
   squares.forEach((div) => div.remove());

   board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

   let amount = size * size;
   for (let i = 0; i < amount; i++) {
      let square = document.createElement('div');
      square.addEventListener('mouseover', colorSquare);
      square.style.backgroundColor = 'blue';
      board.insertAdjacentElement('beforeend', square);
   }
}

function colorSquare() {
   this.style.backgroundColor = 'black';
}

populateBoard(10); // default value (html value?)

function changeSize(userInput) {
   if (userInput >= 2 || userInput <= 50) {
      populateBoard(userInput);
   }
   if (userInput < 2) {
      alert('You need more to draw!');
      populateBoard(2);
   }
   if (userInput > 50) {
      alert('WAY TO MUCH!');
      populateBoard(50);
   }
   if (isNaN(userInput)) {
      alert('You should enter a number');
   }
}
