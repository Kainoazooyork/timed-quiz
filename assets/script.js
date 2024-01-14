//1. Create working timer
//2. Create quiz questions
//3. Cycle through questions and the answers
//4. Save high scores

var questions = [
    {
        question: "What does JS stand for?", 
        answer1: "Jelly sandwich",
        answer2: "Jolly santa",
        answer3: "Java script",
        answer4: "Joey script",
        correctAnswer: "Java script",
    },
    {
        question: "What does CSS stand for?", 
        answer1: "Computer science syntax",
        answer2: "Coffee stuff shop",
        answer3: "Canned soda stuff",
        answer4: "Cascading style sheet",
        correctAnswer: "Cascading style sheet",
    },
    {
        question: "What does HTML stand for?", 
        answer1: "Hitmonlee",
        answer2: "Hyper text markup language",
        answer3: "Hotmeal",
        answer4: "Hotmail",
        correctAnswer: "Hyper text markup language",
    },
]

var highscoreButton = document.querySelector('#highscore')
var timerEl = document.querySelector('#timer')
var quizIntro = document.querySelector('.quiz-intro')
var startButton = document.querySelector('#beginQuiz')
var questionScreen = document.querySelector('.question-screen')
var questionText = document.querySelector('#questionText')
var answerButtonOne = document.querySelector('#answerButtonOne')
var answerButtonTwo = document.querySelector('#answerButtonTwo')
var answerButtonThree = document.querySelector('#answerButtonThree')
var answerButtonFour = document.querySelector('#answerButtonFour')
var qI = -1
var secondsLeft = 30
startButton.addEventListener('click', function(){
    nextQuestion()
    timer()
    quizIntro.style='display:none'
    answerButtonOne.addEventListener('click', nextQuestion)
    answerButtonTwo.addEventListener('click', nextQuestion)
    answerButtonThree.addEventListener('click', nextQuestion)
    answerButtonFour.addEventListener('click', nextQuestion)
}) 
function nextQuestion(){
qI ++
questionText.textContent = questions[qI].question
answerButtonOne.textContent = questions[qI].answer1
answerButtonTwo.textContent = questions[qI].answer2
answerButtonThree.textContent = questions[qI].answer3
answerButtonFour.textContent = questions[qI].answer4
}
function timer(){
    setInterval(function(){
        secondsLeft--
        timerEl.textContent = 'Timer: ' + secondsLeft
        if (secondsLeft <= 0){
            clearInterval(timer)
        }
    },1000)
}