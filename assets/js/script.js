//Define global variables
var question = document.getElementById("question");
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");
var isStarted = false;
var timerDisplay = document.getElementById("timer");
var startButton = document.getElementById("start");
var indexFinder = 0;
var playerScore = "0";
var savedAnswer = "";
var currentCorrectAnswer = "";
var timeLeft = 120;
var timeInterval

//Array of all questions, possible answers, and correct answer
let questionArray = [
  {
    q: "Inside which element do we put JavaScript?",
    answers: ["<script>", "<javascript>", "<js>", "<scripting>"],
    correct: "<script>",
  },

  {
    q:
      "What is the correct JavaScript syntax to change the content of an HTML element <h1 id=test>?",
    answers: [
      'document.getElementById("test").innerHTML = "Hello World"',
      'document.getElement("h1").innerHTML = "Hello World"',
      'document.getElementByName("h1").innerHTML = "Hello World"',
      '#test.innerHTML = "Hello World"',
    ],
    correct: 'document.getElementById("test").innerHTML = "Hello World"',
  },

  {
    q: "Where is the correct place to insert JavaScript?",
    answers: ["<body>", "<head>", "<header>", "Both <body> and <head>"],
    correct: "Both <body> and <head>",
  },

  {
    q: 'What is the correct syntax to refer to a file called "script.js"?',
    answers: [
      '<script src="script.js">',
      '<script name= "script.js">',
      '<script href= "script.js">',
      '<script= "script.js">',
    ],
    correct: '<script src="script.js">',
  },

  {
    q: "The external JavaScript file must contain a <script> tag.",
    answers: ["True", "False"],
    correct: "False",
  },

  {
    q: 'How do you write "ALERT" in an alert box?',
    answers: [
      'alert("ALERT")',
      'msg("ALERT")',
      'msgBox("ALERT")',
      'alertBox("ALERT")',
    ],
    correct: 'alert("ALERT")',
  },

  {
    q: "How do you create a function called test in JavaScript?",
    answers: [
      "function test()",
      "function = test()",
      "function:test()",
      "defineFunction test()",
    ],
    correct: "function test()",
  },

  {
    q: "How do you call a function called test?",
    answers: ["call test()", "test()", "call function test()", "run test()"],
    correct: "test()",
  },

  {
    q: "Which is the correct way to write an IF statement in JavaScript?",
    answers: ["if(i === 5)", "if i = 5 then", "if i = 5", "if i == 5 then"],
    correct: "if(i === 5)",
  },

  {
    q: "How do we evaluate when to run code any time i is not equal to 5?",
    answers: ["if(i != 5)", "if i <> 5", "if i =! 5 then", "if (i <> 5)"],
    correct: "if(i != 5)",
  },

  {
    q: "Which is the correct way to begin a FOR loop?",
    answers: [
      "for i = 1 to 5",
      "for(i = 0, i < 5, i++)",
      "for(i = 0; i < 5)",
      "for(i = 0; i < 5; i++)",
    ],
    correct: "for(i = 0; i < 5; i++)",
  },

  {
    q: "How is JavaScript commented?",
    answers: [
      "//Here is a comment",
      "'Here is a comment'",
      "<!--Here is a comment-->",
      "*Here is a comment*",
    ],
    correct: "//Here is a comment",
  },

  {
    q: "Saving items to the browser is done through which function?",
    answers: [
      'localStorage.getItem("testObject", testObject)',
      'localStorage.setItem("testObject", testObject)',
      'localStorage.saveItem("testObject", testObject)',
      'browserStorage.storeItem("testObject", testObject)',
    ],
    correct: 'localStorage.setItem("testObject", testObject)',
  },

  {
    q: "How do you properly define a JavaScript array?",
    answers: [
      'var colors = ["red", "green", "blue", "orange"]',
      'var colors = "red", "green", "blue", "orange"',
      'var colors = 1 ="red", 2 = "green", 3 = "blue", 4 = "orange"',
      'var colors =  ("red", "green", "blue", "orange")',
    ],
    correct: 'var colors = ["red", "green", "blue", "orange"]',
  },

  {
    q: "The function to round 10.95 to the nearest integer is:",
    answers: [
      "Math.round(10.95)",
      "round(10.95)",
      "rnd(10.95)",
      "Math.rnd(10.95)",
    ],
    correct: "Math.round(10.95)",
  },

  {
    q: "What is the function to find the higher value of two numbers?",
    answers: ["ceil(x, y)", "top(x, y)", "Math.ceil(x, y)", "Math.max(x, y)"],
    correct: "Math.max(x, y)",
  },

  {
    q: "Java is the same as JavaScript.",
    answers: ["True", "False"],
    correct: "False",
  },

  {
    q: "Which event fires when a user clicks on an element?",
    answers: ["onmouseover", "onmouseclick", "onchange", "onclick"],
    correct: "onclick",
  },

  {
    q: "How are JavaScript variables declared?",
    answers: [
      "var catBreed;",
      "variable catBreed;",
      "v catBreed;",
      "define var catBreed;",
    ],
    correct: "var catBreed;",
  },

  {
    q: "Which operator assigns a value to a variable?",
    answers: ["x", "-", "+", "="],
    correct: "=",
  },

  {
    q: "Evaluate the following code: Boolean(10 > 9)",
    answers: ["false", "null", "NaN", "true"],
    correct: "true",
  },

  {
    q: "JavaScript is case-sensitive.",
    answers: ["True", "False"],
    correct: "True",
  },
];

//* FUNCTIONS

//When start button is clicked
function startQuiz() {
  //Start game bit to prevent game from being reset
  isStarted = true;
  //Show Answer buttons A-D
  answerA.style.display = "block";
  answerB.style.display = "block";
  answerC.style.display = "block";
  answerD.style.display = "block";

  //hide start button
  startButton.style.display = "none";
  //Start timer
  countdown();
  //Generate question/answer pair and display in window
  getQuestion();
  getAnswers();
};

//Start timer at 120s and count down to 0 if there are still questions left in the array.
function countdown() {
  timeInterval = setInterval(function() {
    if(timeLeft > 0 && questionArray.length > 0){
      timerDisplay.innerText = timeLeft;
      timeLeft--;
    } 
  }, 1000);
};

//pull random Question out of Array and identify correct answer
function getQuestion() {
  indexFinder = Math.floor(Math.random() * questionArray.length);
  question.innerText = "";
  question.innerText = questionArray[indexFinder].q;
  currentCorrectAnswer = questionArray[indexFinder].correct;
}

//Randomize possible answers. Prep answer buttons to display answer text.
function getAnswers() {
  let answerArray = [0, 1, 2, 3];
  answerArray = answerArray.sort(() => Math.random() - 0.5);
  answerA.innerText = "";
  answerA.innerText = questionArray[indexFinder].answers[answerArray[0]];
  answerB.innerText = "";
  answerB.innerText = questionArray[indexFinder].answers[answerArray[1]];
  answerC.innerText = "";
  answerC.innerText = questionArray[indexFinder].answers[answerArray[2]];
  answerD.innerText = "";
  answerD.innerText = questionArray[indexFinder].answers[answerArray[3]];
  
  
//Hide any empty answer boxes for T/F questions  
  if(answerA.innerText === "undefined"){
    answerA.style.display = "none"
  }
  else{answerA.style.display = "block"};

  if(answerB.innerText === "undefined"){
    answerB.style.display = "none"
  }
  else{answerB.style.display = "block"};

  if (answerC.innerText === "undefined") {
    answerC.style.display = "none";
  } 
  else {answerC.style.display = "block";};

  if (answerD.innerText === "undefined"){
    answerD.style.display = "none"
  }
  else{answerD.style.display = "block"};
}

//Evaluate whether clicked button is correct and assign points
function isAnswerCorrect() {
  if (savedAnswer === currentCorrectAnswer) {
    timeLeft = timeLeft + 2;
    correctAnswerSplash();
  } else {
    timeLeft = timeLeft - 10;
    wrongAnswerSplash();
  }
}

//Check for correct answer, pull previous question out of array, populate new question and answers
function playQuiz() {
  if(questionArray.length > 1){
    isAnswerCorrect();
    questionArray.splice(indexFinder, 1);
    getQuestion();
    getAnswers();
  }
  else{
    isAnswerCorrect();
    clearInterval(timeInterval);
    playerScore = timerDisplay.innerText;
    localStorage.setItem("playerScore", playerScore);    
    endGame();
  }
};

//Alert user of score, redirect to high scores page, and reset all data
function endGame() {
  alert(
    "Congratulations!  You have completed the quiz with a score of " +
      playerScore +
      " points! Please save your score and try again."
  );
  window.location.replace('./high-scores.html');
}

//Splash graphic for correct/incorrect answers
function correctAnswerSplash(){
  var splashText = document.querySelector("#footer")
  splashText.innerText = "CORRECT!";
  splashText.style.color = "#009c15";
  splashText.style.borderTop = "thick double #009c15";
  splashText.style.borderBottom = "thick double #009c15";
};

function wrongAnswerSplash(){
  var splashText = document.querySelector("#footer")
  splashText.innerText = "INCORRECT!";
  splashText.style.color = "#d10003";
  splashText.style.borderTop = " thick double #d10003";
  splashText.style.borderBottom = " thick double #d10003";
};

//* EVENT LISTENERS
//Start button to start timer and generate questions
startButton.addEventListener("click", startQuiz);

//Check which answer was given and save to variable for later comparison
answerA.addEventListener("click", function () {
  savedAnswer = answerA.innerText;
  playQuiz();
});

answerB.addEventListener("click", function () {
  savedAnswer = answerB.innerText;
  playQuiz();
});

answerC.addEventListener("click", function () {
  savedAnswer = answerC.innerText;
  playQuiz();
});

answerD.addEventListener("click", function () {
  savedAnswer = answerD.innerText;
  playQuiz();
})
