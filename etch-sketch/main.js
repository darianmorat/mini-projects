function populateBoard(size) {
   let board = document.querySelector('.board');
   board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

   let amount = size * size;
   for (let i = 0; i < amount; i++) {
      let square = document.createElement('div');
      square.style.backgroundColor = 'blue';
      board.insertAdjacentElement('beforeend', square);
   }
}
populateBoard(16); // default value

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
}
