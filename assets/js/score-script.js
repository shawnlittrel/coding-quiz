var highScoreTable = [];
var newScoreObj = {};
var saveButton = document.querySelector("#save");
var playerScore = localStorage.getItem("playerScore");
var scoreList = document.querySelector("#score-list");

//Pull items from localStorage and populate array
function getHighScores(){
     highScoreTable = localStorage.getItem("highScoreTable");
     console.log("storage: ", highScoreTable)
     if (!highScoreTable){
        console.log("storage-if: ", highScoreTable)
        highScoreTable = [];
     }
     else{
         highScoreTable = JSON.parse(highScoreTable);
     }
    console.log("storage-1: ", highScoreTable)
  };

//Display array on page in order of descending score
function displayHighScores(){
   if(!highScoreTable){return;}
   else{
   highScoreTable.sort(function(a, b) {return (b.score - a.score)})
   for(i = 0; i < highScoreTable.length; i++){
   var scoreRank = document.createElement("li")
   scoreRank.className = ("high-score-item");
   scoreRank.innerHTML = "Player: "  + highScoreTable[i].name + " -  Score: " + highScoreTable[i].score;
   scoreList.appendChild(scoreRank);
   };
   };
};

//Ask for name to associate with score
//Push name/score object into array
function scorePrompt(){
  var playerName = prompt("Add your name to the wall of high scores!");
  newScoreObj = {name: playerName, score: playerScore};
  highScoreTable.push(newScoreObj);
};

//Sort array by high score
//Repopulate list with 10 highest scores
  //displayHighScores();

//Delete any items lower than 10th place from array  
function arrayClip(){
   if(highScoreTable.length > 10){
   highScoreTable.length = 10;
   }
   else{return;}
};
//Save button pushes array to localStorage
function saveScores(){
   localStorage.setItem("highScoreTable", JSON.stringify(highScoreTable));
   console.log('after save - ', highScoreTable);
};

//event listener to fire when save button is clicked
saveButton.addEventListener("click", saveScores);

getHighScores();
scorePrompt();
displayHighScores();
arrayClip();
