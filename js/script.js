
// Questions & Answers
var questions = [
    {
        questionTitle: "Arrays in JavaScript can be used to store _____.",
        answerChoice: ["Numbers & strings", "Other arrays", "Booleans", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        questionTitle: "The condition in an if/else statement is enclosed with ______.",
        answerChoice: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
        correctAnswer: "Curly brackets",
    },
    {
        questionTitle: "String values must be closed within ____ when being assigned to variables.",
        answerChoice: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        correctAnswer: "Quotes"
    },
    {
        questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerChoice: ["JavaScript", "Terminal/bash", "For loops", "Console.log"],
        correctAnswer: "Console.log"
    },
    {
        questionTitle: "Commonly used data types DO Not include:",
        answerChoice: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Alerts"
    },
    {
        questionTitle: "What does DOM stand for:",
        answerChoice: ["Document of Mobile", "Document Object Model", "Dominant Object Model", "Domain of Model"],
        correctAnswer: "Document Object Model"
    },
];

var timerEl = document.querySelector("#timer");
var startBtnEl = document.getElementById('start-quiz');
var quizContainerEl = document.querySelector("#quiz-container");
var containerEl = document.getElementById("container");
var questionsDivEl = document.getElementById("question-list-title");
var alertContainer = document.getElementById("alert-container");
var correctScore = document.getElementById("correctScore");
var timeLimit = 60;
timerEl.textContent = timeLimit;
var timer = 0
//var time = 0;
var score = 0;
var questionIndex = 0;
var answerChoice;
var buttonIdEl;
var penalty = 10;
var correctAnswer = 0




function startQuiz() {
    timer = setInterval(function () {
        timerEl.textContent = timeLimit--;
        timerEl.textContent = "Time:" + timeLimit;

        if (timeLimit > 0) {
            timeLimit--;
        } else {
            clearInterval(timer);
            endGame();
            timerEl.textContent = "Time's Up!";
        }
    }, 1000);

    startQuestions();
}

function startQuestions() {
    containerEl.innerHTML = "";
    // alertContainer.innerHTML = "";

    if (questionIndex >= questions.length) {
        endGame();
        return;
    }
    var quizQuestionList = questions[questionIndex].questionTitle;
    containerEl.textContent = quizQuestionList;

    for (var i = 0; i < questions[questionIndex].answerChoice.length; ++i) {
        var createButtons = document.createElement("button");
        createButtons.className = "btn-choice-button";
        createButtons.setAttribute("button-id", buttonIdEl);
        createButtons.setAttribute("value", questions[questionIndex].answerChoice[i]);
        createButtons.textContent = questions[questionIndex].answerChoice[i];
        containerEl.appendChild(createButtons);
        buttonIdEl++;
    }
    // questionIndex++;

    // buttonHandler();
}

var buttonHandler = function (event) {
    // console.log(event.target.value);
    // var element = event.target;
    // console.log(event.target.matches(".btn-choices-button"));
    if (event.target.matches(".btn-choice-button")) {
        var elementId = event.target.value;
        // console.log(elementId, "value");

        if (elementId === questions[questionIndex].correctAnswer) {
            console.log("correct");
            var correctAnswerAlert = document.createElement("ul");
            correctAnswerAlert.className = "alert";
            correctAnswerAlert.textContent = "Correct Answer!";
            alertContainer.appendChild(correctAnswerAlert);
            score = +10
            questionIndex++;
            correctAnswer++;
            correctScore.textContent = correctAnswer;
            startQuestions();
        } else {
            console.log("incorrect");
            var incorrectAlert = document.createElement("ul");
            incorrectAlert.className = "alert";
            incorrectAlert.textContent = "Incorrect Answer";
            alertContainer.appendChild(incorrectAlert);
            timeLimit = timeLimit - penalty;
            // createDiv.textContent = "Incorrect Answer:" + quesitons[questionIndex].correctAnswer;
            questionIndex++;
            startQuestions();
        }
    }
};

var endGame = function () {
    // clearInterval(timeLimit);

    if (questionIndex >= questions.length) {
        containerEl.textContent = "End of Quiz!"
        alert("final score is: " + timeRemaining)
    } else {
        render(questionIndex);
    }
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");
    containerEl.appendChild(createP);

    if (timeLimit >= 0) {
        var timeRemaining = timeLimit;
        var createP = document.createElement("p");
        var input = document.createElement("input");
        var submitButton = document.createElement("button");
        input.classList.add("initials-input");
        submitButton.classList.add("submitButton");
        // var submitButton = document.querySelector(".submitButton")
        submitButton.addEventListener('click', function () {
            var inputEl = document.querySelector(".initials-input");
            var initials = inputEl.value;
             console.log(initials);
        setScore();
        })

        clearInterval(timer);
        createP.textContent = "Your final score is: " + timeRemaining;
        submitButton.textContent = "Submit";
        containerEl.appendChild(createP);
        containerEl.appendChild(input);
        containerEl.appendChild(submitButton);
    }

    var createDivHighscore = document.createElement("div");
    createDivHighscore.setAttribute("id", "createDivHighscore");
    containerEl.appendChild(createDivHighscore);

    var setScore = function () {
        localStorage.setItem("initials", timeRemaining);
        console.log("initials saved");
    }
};


// createDiv.setAttribute("taskId", "createDiv");

// if (targetEl.textContent == questions[questionIndex].correctAnswer) {
//     score++;
//     createDiv.textContent = "Correct! the answer is" + questions[questionIndex].correctAnswer;

// } else {
//     timeLimit = timeLimit - penalty;
//     createDiv.textContent = "Wrong! The correct answer is:" + questions[questionIndex].correctAnswer;
// }


//         //taskId = targetEl.getAtt

startBtnEl.addEventListener('click', startQuiz, startQuestions);
containerEl.addEventListener('click', buttonHandler);   