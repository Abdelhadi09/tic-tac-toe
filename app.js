let gameBord = [1,2,3,4,5,6,7,8,9];
let solution = false;
let Box = document.querySelectorAll(".box");
let currentPlayer = "X"; // Track the current player

function handleClick(event) {
  if (solution) return; // Stop if the game is already won or drawn

  let index = parseInt(event.target.getAttribute("id"));
  console.log(index);
  if (gameBord[index] === "X" || gameBord[index] === "O") {
    alert("This spot is already full. Enter another number.");
  } else {
    gameBord[index] = currentPlayer;
    event.target.innerHTML = currentPlayer; // Update the UI
    Solution(); // Check for a solution after the move
    if (!solution) {
      currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player
      if (onePlayerMode && currentPlayer === "O") {
        computerChoice(); // Let the computer make a move if the game is not over
      }
    }
  }
}

function firstPlayer() {
  Box.forEach((element) => {
    element.addEventListener("click", handleClick);
  });
}

function computerChoice() {
  let compIndex;
  do {
    compIndex = Math.floor(Math.random() * 9);
  } while (gameBord[compIndex] === 'X' || gameBord[compIndex] === 'O');
  gameBord[compIndex] = 'O';

  // Update the UI
  document.getElementById(compIndex).innerHTML = 'O';
  Solution(); // Check for a solution after the computer's move
  currentPlayer = "X"; // Switch back to player
}

function display() {
  console.log(gameBord[0] + "    /     " +gameBord[1]+"  /     " +gameBord[2] );
  console.log("-------------------");
  console.log(gameBord[3] + "    /     " +gameBord[4]+"  /     " +gameBord[5] );
  console.log("-------------------");
  console.log(gameBord[6] + "    /     " +gameBord[7]+"  /     " +gameBord[8] );
}

function Solution() {
    if ((gameBord[0] == gameBord[1] && gameBord[1] == gameBord[2] && gameBord[1] == "X") ||
        (gameBord[3] == gameBord[4] && gameBord[4] == gameBord[5] && gameBord[4] == "X") ||
        (gameBord[6] == gameBord[7] && gameBord[7] == gameBord[8] && gameBord[7] == "X") ||
        (gameBord[0] == gameBord[3] && gameBord[3] == gameBord[6] && gameBord[3] == "X") ||
        (gameBord[1] == gameBord[4] && gameBord[4] == gameBord[7] && gameBord[4] == "X") ||
        (gameBord[2] == gameBord[5] && gameBord[5] == gameBord[8] && gameBord[5] == "X") ||
        (gameBord[0] == gameBord[4] && gameBord[4] == gameBord[8] && gameBord[4] == "X") ||
        (gameBord[2] == gameBord[4] && gameBord[4] == gameBord[6] && gameBord[4] == "X")) {
        alert("Player 1 is the winner");
        solution = true;
    } else if ((gameBord[0] == gameBord[1] && gameBord[1] == gameBord[2] && gameBord[1] == "O") ||
               (gameBord[3] == gameBord[4] && gameBord[4] == gameBord[5] && gameBord[4] == "O") ||
               (gameBord[6] == gameBord[7] && gameBord[7] == gameBord[8] && gameBord[7] == "O") ||
               (gameBord[0] == gameBord[3] && gameBord[3] == gameBord[6] && gameBord[3] == "O") ||
               (gameBord[1] == gameBord[4] && gameBord[4] == gameBord[7] && gameBord[4] == "O") ||
               (gameBord[2] == gameBord[5] && gameBord[5] == gameBord[8] && gameBord[5] == "O") ||
               (gameBord[0] == gameBord[4] && gameBord[4] == gameBord[8] && gameBord[4] == "O") ||
               (gameBord[2] == gameBord[4] && gameBord[4] == gameBord[6] && gameBord[4] == "O")) {
        alert("Player 2 is the winner");
        solution = true;
    } else if (!gameBord.includes(1) && !gameBord.includes(2) && !gameBord.includes(3) &&
               !gameBord.includes(4) && !gameBord.includes(5) && !gameBord.includes(6) &&
               !gameBord.includes(7) && !gameBord.includes(8) && !gameBord.includes(9)) {
        alert("It's a draw");
        solution = true;
    }
}

function twoPlayers() {
  Box.forEach((element) => {
    element.addEventListener("click", handleClick);
  });
}

let onePlayerMode = false;

let onePlayerr = document.getElementById("1p");
onePlayerr.addEventListener("click", function(){
  console.log("clicked");
  onePlayerMode = true;
  firstPlayer();
});

let twoPlayer = document.getElementById("2p");
twoPlayer.addEventListener("click", function(){
  onePlayerMode = false;
  twoPlayers();
});

gameBord.forEach(element => {
  let box = document.createElement("div");
  box.classList.add("box");
  box.id = element;
  box.innerHTML = element;
  document.getElementById("board").appendChild(box);
});

// Update the Box variable after creating the elements
Box = document.querySelectorAll(".box");
