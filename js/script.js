
// Questions & Answers
var questions = [
    { 
        questionTitle: "Arrays in JavaScript can be used to store _____.",
        answerChoice:  ["Numbers & strings", "Other arrays", "Booleans", "All of the above"],
        correctAnswer: "all of the above"
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
var timeLimit = 10;
timerEl.textContent = timeLimit;
var timer;
var time = 0;
var score = 0;
var questionIndex = -1;
var answerChoice;
var buttonIdEl;
var penalty = 10;




function startQuiz() {
    timer = setInterval(function() {
        timerEl.textContent = timeLimit--;             
        timerEl.textContent = "Time:" + timeLimit;
    
    if (timeLimit > 0) {
        timeLimit--;
    } else {
        clearInterval(timer);
        timerEl.textContent = "Time's Up!";
    }  
    },1000);  

    startQuestions();
}     

function startQuestions() {
    //containerEl.remove();
    containerEl.innerHTML = "";
    questionIndex++;

    if (questionIndex > questions.length - 1) {
        // endGame();
        // return;
    }
    

    for (var i = 0; i < questions[questionIndex].answerChoice.length; ++i) {
        var createButtons = document.createElement("button");
        createButtons.className = "btn choice-button";
        createButtons.setAttribute("button-id", buttonIdEl);
        createButtons.setAttribute("value", questions[questionIndex].answerChoice[i]);
        createButtons.textContent = questions[questionIndex].answerChoice[i];
        containerEl.appendChild(createButtons);
        buttonIdEl++;

    var quizContent = questions[questionIndex].questionTitle
    quizContent.textContent = questions[questionIndex].questionTitle;
    document.querySelector(".question-container");
        // var quizMaterial = document.createElement("h3");
        // quizMaterial.textContent = quizContent[i];
        // containerEl.appendChild(quizMaterial);
        // console.log("test", quizContent[i]);
    }

    // for (var i = 0; i < questions[questionIndex].answerChoice.length; i++) {
    //     var buttonCode = "<buttion onclick=\"[ANS]\">[CHOICE]</BUTTON>";
    //     buttonCode = buttonCode.replace("[CHOICE]", questions[questionIndex].answerChoice[i]);
    //     if (questions[questionIndex].answerChoice[i] == questions[questionIndex].correctAnswer) {
    //         buttonCode = buttonCode.replace("[ANS]", "correct()");
    //     } else {
    //         buttonCode = buttonCode.replace("[ANS]", "incorrect()");
    //     }
    //     quizContent += buttonCode;
    // }
    // document.getElementById("quizContainer").innerHTML = quizContent;
}

// function endGame() {
//     clearInterval(timer);
    
//     var quizContent = <h2>Quiz Over!</h2>

// }


startBtnEl.addEventListener('click', startQuiz, startQuestions);
         

// quizQuestion(questionIndex);
//      });function startQuiz() {
//     timeLimit = 10;
//     document.getElementById()
// }





// startBtnEl.addEventListener("click", function() {
//     timer = setInterval(function() {
//         timerEl.textContent = timeLimit--;
//         timerEl.textContent = "Time:" + timeLimit;

//     if (timeLimit > 0) {
//         timeLimit--;
//     } else {
//         clearInterval(timer);
//         timerEl.textContent = "Time's Up!";
//         //allDone();
//     }  
//     },1000);  
//     quizQuestion(questionIndex);
// });

// function quizQuestion(questionIndex) {
//     questionContainerEl.innerHTML = "";
//     //containerWrapperEl.remove();
    

//     for (var i = 0; i < questions.length; i++) {
//         var userQuestions = questions.questionTitle;
//         var userAnswers = questions[questionIndex].answerChoice;
//         questionContainerEl.textContent = userQuestions;
//     }

//     userAnswers.forEach(function (newItem) {
//         var listItem = document.createElement("li");
//         listItem.textContent = newItem;
//         questionContainerEl.appendChild(createUl);
//         createUl.appendChild(listItem);
//         listItem.addEventListener("click");
//     })
// };

    // questionIndex++;
    // answer = questions[questionIndex].correctAnswer;

    // questions.textContent = questions[questionIndex].q;
    // questions.textContent = questions[questions].answerChoice;

    // var choices = questions[questionIndex].choices;

    // for (var i = 0; i < questions.length; i++) {
    //     var nextChoice = document.createElement("button");
    //     nextChoice.textContent = choices[questionIndex]
    //     answerBtn = a.appendChild(nextChoice).setAttribute("class", "btn-light");
    // }
//}



//startBtnEl.addEventListener("click", quizQuestion);


// function render(startQuestions) {
//     welcomePageEl.innerHTML = "";
//     mainEl.innerHTML = "";
//     // startQuestions();
//     for (var i = 0; i < questions.length; i++) {
//         var quizQuestions = questions[i].q;
//         var quizAnswers = questions[i].a;
//         questionListEl.textContent = quizQuestions;
//     }
//     quizAnswers.forEach(function (answerItem) {
//         var answerOptions = document.createElement("li");
//         answerOptions.textContent = answerItem;
//         questionListEl.appendChild(ulQuestionEl);
//         ulQuestionEl.appendChild(answerOptions);
//         answerOptions.addEventListener("click");
//     })

// startBtnEl.addEventListener("click", startQuestions);
