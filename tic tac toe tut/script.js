// console.log("Welcome to Tic Tac Toe")
// let music = new Audio("music.mp3")
// let audioTurn = new Audio("ting.mp3")
// let gameover = new Audio("gameover.mp3")
// let turn = "X"
// let isgameover = false;

// // Function to change the turn
// const changeTurn = ()=>{
//     return turn === "X"? "0": "X"
// }

// // Function to check for a win
// const checkWin = ()=>{
//     let boxtext = document.getElementsByClassName('boxtext');
//     let wins = [
//         [0, 1, 2, 5, 5, 0],
//         [3, 4, 5, 5, 15, 0],
//         [6, 7, 8, 5, 25, 0],
//         [0, 3, 6, -5, 15, 90],
//         [1, 4, 7, 5, 15, 90],
//         [2, 5, 8, 15, 15, 90],
//         [0, 4, 8, 5, 15, 45],
//         [2, 4, 6, 5, 15, 135],
//     ]
//     wins.forEach(e =>{
//         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
//             document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
//             isgameover = true
//             document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
//             document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
//             document.querySelector(".line").style.width = "20vw";
//         }
//     })
// }

// // Game Logic
// // music.play()
// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(element =>{
//     let boxtext = element.querySelector('.boxtext');
//     element.addEventListener('click', ()=>{
//         if(boxtext.innerText === ''){
//             boxtext.innerText = turn;
//             turn = changeTurn();
//             audioTurn.play();
//             checkWin();
//             if (!isgameover){
//                 document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
//             } 
//         }
//     })
// })

// // Add onclick listener to reset button
// reset.addEventListener('click', ()=>{
//     let boxtexts = document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(element => {
//         element.innerText = ""
//     });
//     turn = "X"; 
//     isgameover = false
//     document.querySelector(".line").style.width = "0vw";
//     document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
//     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
// })

// Tic Tac Toe game
let currentPlayer = 'X';
let gameEnd = false;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Function to handle player's move
function makeMove(row, col) {
  if (!gameEnd && board[row][col] === '') {
    board[row][col] = currentPlayer;
    displayBoard();
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Function to check if there is a winner
function checkWinner() {
  const winningConditions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    const [rowA, colA] = a;
    const [rowB, colB] = b;
    const [rowC, colC] = c;

    if (
      board[rowA][colA] === board[rowB][colB] &&
      board[rowA][colA] === board[rowC][colC] &&
      board[rowA][colA] !== ''
    ) {
      gameEnd = true;
      document.getElementById('message').textContent = `Player ${board[rowA][colA]} wins!`;
      break;
    }
  }
  
  if (!gameEnd && board.flat().every(cell => cell !== '')) {
    gameEnd = true;
    document.getElementById('message').textContent = "It's a draw!";
  }
}

// Function to display the current board
function displayBoard() {
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    const row = Math.floor(i / 3);
    const col = i % 3;
    cells[i].textContent = board[row][col];
  }
}

// Clear the board and reset the game
function resetGame() {
  currentPlayer = 'X';
  gameEnd = false;
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  document.getElementById('message').textContent = '';
  displayBoard();
}

// Initialize the game
displayBoard();


