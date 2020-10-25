var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var timeLimit = 60;
timerEl.textContent = timeLimit
var timer;

var questions = [
    {q: 'what color is the sky:', a: 'blue' },
    {q: 'An array is used for:', a: 'store multiple values in a single variable'},
    {q: ' ', a: ' '},
    {q: ' ', a: ' '},
    {q: ' ', a: ' '},
    {q: ' ', a: ' '},
];

//start game at 0
var score = 0;

//for loop questions
for (var i = 0; i < questions.length; i++) {

};

startBtn.addEventListener("click", function(){
    console.log("test")
    timer = setInterval(function(){
        timerEl.textContent = timeLimit--;
    },1000)
})
