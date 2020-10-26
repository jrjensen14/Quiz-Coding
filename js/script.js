var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtnEl = document.getElementById('start-quiz');
var welcomePageEl = document.getElementById('welcome-page');
var questionEl = document.getElementById('ul')
var questionListEl = document.querySelector("question-list");
var answerListEl = document.querySelector('#answers')
var score = 0;
var currentQuestion = 0
var timeLimit = 10;
timerEl.textContent = timeLimit;
var timer;
//var time = 0;
var penalty = 10;




var questions = [
    { q: 'Arrays in JavaScript can be used to store _____.',
    a:  ["Numbers & strings", "Other arrays", "Booleans", "All of the above"],
    correctAnswer: "all of the above"},

    { q: 'The condition in an if/else statement is enclosed with ______.',
    a: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
    correctAnswer: "Curly brackets",
    },

    {q: 'String values must be closed within ____ when being assigned to variables.', 
    a: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    correctAnswer: "Quotes"
    },

    {q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    a: ["JavaScript", "Terminal/bash", "For loops", "Console.log"],
    correctAnswer: "Console.log"
    },

    {q: 'Commonly used data types DO Not include:', 
    a: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts"
    },

    {q: 'What does DOM stand for:', 
    a: ["Document of Mobile", "Document Object Model", "Dominant Object Model", "Domain of Model"],
    correctAnswer: "Document Object Model"
    },
];


// start timer when start quiz button is clicked
startBtnEl.addEventListener("click", function() {
    //console.log("test")
        timer = setInterval(function() {
            timerEl.textContent = timeLimit--;
            timerEl.textContent = "Time:" + timeLimit;

        if (timeLimit > 0) {
            timeLimit--;
        } else {
            clearInterval(timer);
            timerEl.textContent = "Time's Up!";
            allDone();
        }  
    },1000);   
    startQuiz();    
});

function startQuiz() {
    welcomePageEl.remove();
    // startQuestions();
    for (var i = 0; i < questions[currentQuestion].a.length; i++) {
        var quizQuestions = questions[i].q;
        var quizAnswers = questions[i].a;
        questionEl.textContent = quizQuestions;
    }
    // quizAnswers.forEach(function (answerItem) {
    //     var answerList = document.createElement("li");
    //     answerList.textContent = answerItem;
    //     questionListEl.appendChild(welcomePageEl);
    //     welcomePageEl.appendChild(answerList);
    //     answerList.addEventListener("click");
    //}

};

function stopTime() {
    clearInterval(timer);
};



startBtnEl.addEventListener("click", startQuiz);
