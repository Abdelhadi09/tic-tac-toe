let gameBord = [1,2,3,4,5,6,7,8,9];
let solution = false;
function firstPlayer(){
   let validMove = false;
    while (!validMove) {
        let index = prompt("Enter your number from 1 to 9");
        index = parseInt(index) - 1; 
        if (gameBord[index] === 'X' || gameBord[index] === 'O') {
            alert("This spot is already full. Enter another number.");
        } else {
            gameBord[index] = 'X';
            validMove = true;
        }
    }
}
function secondPlayer(){
  let validMove = false;
    while (!validMove) {
        let index = prompt("Enter your number from 1 to 9");
        index = parseInt(index) - 1; 
        if (gameBord[index] === 'X' || gameBord[index] === 'O') {
            alert("This spot is already full. Enter another number.");
        } else {
            gameBord[index] = 'O';
            validMove = true;
        }
    }
}
function computerChoice () {
  let compIndex;
    do {
        compIndex = Math.floor(Math.random() * 9);
    } while (gameBord[compIndex] === 'X' || gameBord[compIndex] === 'O');
    gameBord[compIndex] = 'O';
}
function display() {
  console.log(gameBord[0] + "    /     " +gameBord[1]+"  /     " +gameBord[2] )
console.log("-------------------")
console.log(gameBord[3] + "    /     " +gameBord[4]+"  /     " +gameBord[5] )
console.log("-------------------")
console.log(gameBord[6] + "    /     " +gameBord[7]+"  /     " +gameBord[8] )
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
        return solution = true;
    } else if ((gameBord[0] == gameBord[1] && gameBord[1] == gameBord[2] && gameBord[1] == "O") ||
               (gameBord[3] == gameBord[4] && gameBord[4] == gameBord[5] && gameBord[4] == "O") ||
               (gameBord[6] == gameBord[7] && gameBord[7] == gameBord[8] && gameBord[7] == "O") ||
               (gameBord[0] == gameBord[3] && gameBord[3] == gameBord[6] && gameBord[3] == "O") ||
               (gameBord[1] == gameBord[4] && gameBord[4] == gameBord[7] && gameBord[4] == "O") ||
               (gameBord[2] == gameBord[5] && gameBord[5] == gameBord[8] && gameBord[5] == "O") ||
               (gameBord[0] == gameBord[4] && gameBord[4] == gameBord[8] && gameBord[4] == "O") ||
               (gameBord[2] == gameBord[4] && gameBord[4] == gameBord[6] && gameBord[4] == "O")) {
        alert("Player 2 is the winner");
        return solution = true;
    } else if (!gameBord.includes(1) && !gameBord.includes(2) && !gameBord.includes(3) &&
               !gameBord.includes(4) && !gameBord.includes(5) && !gameBord.includes(6) &&
               !gameBord.includes(7) && !gameBord.includes(8) && !gameBord.includes(9)) {
        alert("It's a draw");
        return solution = true;
    }
}
function main (){
  console.log("WELCOM TO TIC TAC TOE");
  let oponent = prompt("do you want to play with another personne(yes/no)");
  if(oponent == "yes"){
    do {
       firstPlayer();
    display();
    secondPlayer();
    display();
    Solution();
    } while (!solution)
  }else{
    do {
       firstPlayer();
    display();
    computerChoice();
    display();
    Solution();
    } while (!solution)
  }
}
main();