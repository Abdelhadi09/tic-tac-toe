let gameBord = [1,2,3,4,5,6,7,8,9];
let solution = false;
do{
const index = prompt("enter your number from 1 to 9")
gameBord =  gameBord.map ( item => item == index ? "X" : item)
console.log(gameBord)
function computerChoice () {
  let compIndex = Math.floor(Math.random() * 8)
  gameBord =  gameBord.map ( item => item == compIndex ? "O" : item)
}
computerChoice();
console.log(gameBord[0] + "    /     " +gameBord[1]+"  /     " +gameBord[2] )
console.log("-------------------")
console.log(gameBord[3] + "    /     " +gameBord[4]+"  /     " +gameBord[5] )
console.log("-------------------")
console.log(gameBord[6] + "    /     " +gameBord[7]+"  /     " +gameBord[8] )

Solution();
}while(!solution)

console.log(solution)
function Solution (){
  if((gameBord[0] == gameBord[1] && gameBord[1] == gameBord[2])
    || (gameBord[3] == gameBord[4] && gameBord[4] == gameBord[5])
    || (gameBord[6] == gameBord[7] && gameBord[7] == gameBord[8])
    || (gameBord[0] == gameBord[3] && gameBord[3] == gameBord[6])
     || (gameBord[1] == gameBord[4] && gameBord[4] == gameBord[7])
     || (gameBord[2] == gameBord[5] && gameBord[5] == gameBord[8])
     || (gameBord[0] == gameBord[4] && gameBord[4] == gameBord[8])
     || (gameBord[2] == gameBord[4] && gameBord[4] == gameBord[6])
    ){
    return solution = true ;
   console.log("there is a winner")
  }
}