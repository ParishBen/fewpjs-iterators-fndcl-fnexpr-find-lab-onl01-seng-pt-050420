const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(arrObj){
let winningTeam = arrObj.find( winner => winner.result === "W");
if (winningTeam){
   return winningTeam.year;
}
  return undefined
 
}
