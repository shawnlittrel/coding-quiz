//Define global variables
var textBody = document.getElementById('question-container')

//Start timer at 60s and count down from there
var counter = 120

let questionArray = [
    {q: "Inside which element do we put JavaScript?", 
    answers: ["<script>", "<javascript>", "<js>", "<scripting>"], 
    correct: "<script>"},

    {q: "What is the correct JavaScript syntax to change the content of an HTML element <h1 id=test>?", 
    answers: ["document.getElementById(\"test\").innerHTML = \"Hello World\"", "document.getElement(\"h1\").innerHTML = \"Hello World\"", "document.getElementByName(\"h1\").innerHTML = \"Hello World\"", "#test.innerHTML = \"Hello World\""],
    correct: "document.getElementById(\"test\").innerHTML = \"Hello World\""},

    {q: "Where is the correct place to insert JavaScript?", 
    answers: ["<body>", "<head>", "<header>", "Both <body> and <head>"],
    correct: "Both <body> and <head>"},

    {q: "What is the correct syntax to refer to a file called \"script.js\"?", 
    answers: ["<script src=\"script.js\">", "<script name= \"script.js\">", "<script href= \"script.js\">", "<script= \"script.js\">"],
    correct: "<script src=\"script.js\">"},

    {q: "The external JavaScript file must contain a <script> tag.", 
    answers: ["True", "False"],
    correct: "False"},

    {q: "How do you write \"ALERT\" in an alert box?", 
    answers: ["alert(\"ALERT\")", "msg(\"ALERT\")", "msgBox(\"ALERT\")", "alertBox(\"ALERT\")"],
    correct: "alert(\"ALERT\")"},

    {q: "How do you create a function called test in JavaScript?", 
    answers: ["function test()", "function = test()", "function:test()", "defineFunction test()"],
    correct: "function test()"},

    {q: "How do you call a function called test?", 
    answers: ["call test()", "test()", "call function test()", "run test()"],
    correct: "test()"},

    {q: "Which is the correct way to write an IF statement in JavaScript?", 
    answers: ["if(i===5)", "if i = 5 then", "if i = 5", "if i == 5 then"],
    correct: "if(i===5)"},

    {q: "How do we evaluate when to run code any time i is not equal to 5?", 
    answers: ["if(i != 5)", "if i <> 5", "if i =! 5 then", "if (i <> 5)"],
    correct: "if(i != 5"},

    {q: "Which is the correct way to begin a FOR loop?", 
    answers: ["for i = 1 to 5", "for(i = 0, i < 5, i++)", "for(i = 0; i < 5)", "for(i = 0; i < 5; i++)"],
    correct: "for(i = 0; i < 5; i++"},

    {q: "How is JavaScript commented?", 
    answers: ["//Here is a comment", "'Here is a comment'", "<!--Here is a comment-->", "*Here is a comment*"],
    correct: "//Here is a comment"},

    {q: "Which is the correct way to comment multiple JavaScript lines?", 
    answers: ["/* This comment has \n more than one line */", "//This comment has \n more than one line//", "<!--This comment has \n morethan one line-->", "**This comment has \n more than one line**"],
    correct: "/* This comment has \n more than one line */"},

    {q: "How do you properly define a JavaScript array?", 
    answers: ["var colors = [\"red\", \"green\", \"blue\", \"orange\"]", "var colors = \"red\", \"green\", \"blue\", \"orange\"", "var colors = 1 =\"red\", 2 = \"green\", 3 = \"blue\", 4 = \"orange\"", "var colors =  (\"red\", \"green\", \"blue\", \"orange\")"],
    correct: "var colors = [\"red\", \"green\", \"blue\", \"orange\"]"},

    {q: "The function to round 10.95 to the nearest integer is:", 
    answers: ["Math.round(10.95)", "round(10.95)", "rnd(10.95)", "Math.rnd(10.95)"],
    correct: "Math.round(10.95)"},

    {q: "What is the function to find the higher value of two numbers?", 
    answers: ["ceil(x, y)", "top(x, y)", "Math.ceil(x, y)", "Math.max(x, y)"],
    correct: "Math.max(x, y)"},

    {q: "Java is the same as JavaScript.", 
    answers: ["True", "False"],
    correct: "False"},

    {q: "Which event fires when a user clicks on an element?", 
    answers: ["onmouseover", "onmouseclick", "onchange", "onclick"],
    correct: "onclick"},

    {q: "How are JavaScript variables declared?", 
    answers: ["var catBreed;", "variable catBreed;", "v catBreed;", "define var catBreed;"],
    correct: "var catBreed"},

    {q: "Which operator assigns a value to a variable?", 
    answers: ["x", "-", "+", "="],
    correct: "="},

    {q: "Evaluate the following code: Boolean(10 > 9)", 
    answers: ["false", "null", "NaN", "true"],
    correct: "true"},

    {q: "JavaScript is case-sensitive.", 
    answers: ["True", "False"],
    correct: "True"}
];

// let newArray = questionArray.filter(function(u){
//     return u.used === 0;
// });
// console.log(newArray);
for(i = 0; i < questionArray.length; i++){
    if(questionArray === "false"){
        console.log(questionArray[i]);
        questionArray[i].used === "true"
    }
    console.log(questionArray);
}



//Subtract 1 from counter every 1000ms
// function counterDec(){
//     counter--;
// }
// setInterval(counterDec, 1000)

//Timer runs until it hits 0, then end game
// if(counter <= 0)
//     counter = 0;
//     endGame();

//On wrong answer, subtract 10 from timer
// if(wrongAnswer){
//     counter - 10;
// }

//pull random question from question array to display on the screen.  The question should have an identifier attached so it isn't used again.  Or would it be easier to pull it from array entirely and then repopulate array after quiz completion
