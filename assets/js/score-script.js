var highScoreTable = [];
var newScoreObj = {};
var playerName = "";
var saveButton = document.querySelector("#save");
var playerScore = localStorage.getItem("playerScore");

//Pull items from localStorage and populate array
function getHighScores(){
   var savedHighScores = localStorage.getItem("scores");
   if (!savedHighScores){
      return false;
   }
   highScoreTable = JSON.parse(savedHighScores);
};

//Display array on page in order of descending score
function displayHighScores(){
   highScoreTable.sort(function(a, b) {return (b.score - a.score)})
   for(i = 0; i < highScoreTable.length; i++){
   var scoreRank = document.createElement("li")
   scoreRank.className = ("high-score-item");
   scoreRank.innerHTML = "Player: "  + highScoreTable.player[i] + " -  Score: " + highScoreTable.score[i];
   };
};

//Ask for name to associate with score
//Push name/score object into array
function scorePrompt(){
  playerName = prompt("Add your name to the wall of high scores!");
  newScoreObj = {name: playerName, score: playerScore};
  highScoreTable.push(newScoreObj);
};

//Sort array by high score
//Repopulate list with 10 highest scores
  //displayHighScores();

//Delete any items lower than 10th place from array  
function arrayClip(){
   highScoreTable.length = 10;
};
//Save button pushes array to localStorage
function saveScores(){
   localStorage.setItem("savedHighScores", JSON.stringify(highScoreTable));
};

//event listener to fire when save button is clicked
saveButton.addEventListener("click", saveScores);

getHighScores();
displayHighScores();
scorePrompt();
displayHighScores();
arrayClip();
