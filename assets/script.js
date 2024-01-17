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
    if (qI > -1) {
        console.log(this.textContent)
        console.log(questions[qI].correctAnswer)
    }
    if (qI > -1 && this.textContent != questions[qI].correctAnswer) {
        console.log("test")
        secondsLeft -= 5
    }
qI ++
if (qI > questions.length) {
    endQuiz()
}
else {
questionText.textContent = questions[qI].question
answerButtonOne.textContent = questions[qI].answer1
answerButtonTwo.textContent = questions[qI].answer2
answerButtonThree.textContent = questions[qI].answer3
answerButtonFour.textContent = questions[qI].answer4
}
}
function timer(){
    setInterval(function(){
        secondsLeft--
        timerEl.textContent = 'Timer: ' + secondsLeft
        if (secondsLeft <= 0) {
            timerEl.textContent = 'Timer: ' + 0
         endQuiz()
        }
    },1000)
}

function endQuiz() {
    var initials = prompt('enter your initials')
    var score = secondsLeft 
    localStorage.setItem('userScore', initials + ': ' + score)
    var li =document.createElement('li')
    li.textContent = localStorage.getItem('userScore')
    timerEl.style = 'display: none'
    questionScreen.style = 'display: none'


}