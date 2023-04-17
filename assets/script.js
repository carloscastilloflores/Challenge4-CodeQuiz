var startQuizBtn = document.getElementById('start-quiz-btn');
var container = document.getElementById('content');
var firstQuestion = document.getElementById('question-container');
var question = document.getElementById("question");
var containerChoices = document.getElementsByClassName("options-list")
var choices = Array.from(document.getElementsByClassName("choice-text"));
var currentQuestion = {};
var acceptingAnswers = false; 
var score = 0; 
var questionCounter = 0; 
var availableQuestions = []; 
var correctAnswer = document.getElementsByClassName("correct-response");
var incorrectAnswer = document.getElementsByClassName("incorrect-response");

var timerElement = document.getElementById('timer');
var timer;

var questions = [
    {
        question: "The condition in an if / else statement is enclosed with ______", 
        choice1: "Quotes", 
        choice2: "Curly brackets", 
        choice3: "Parenthesis",
        choice4: "Square brackets", 
        answer: 2
    }, 
    {
        question: "Arrays in Javascript can be used to store _____.", 
        choice1: "Numbers and strings ", 
        choice2: "Other arrays", 
        choice3: "Booleans",
        choice4: "All of the above", 
        answer: 4
    }, 
    {
        question: "String values must be enclosed within ______ when being assigned to variables.", 
        choice1: "Commas", 
        choice2: "Curly brackets", 
        choice3: "Quotes",
        choice4: "Parenthesis", 
        answer: 3
    }, 
    {
        question: "A very useful tool used during development for printing content to the debugger is:", 
        choice1: "Javascript", 
        choice2: "Terminal/bash", 
        choice3: "For loops",
        choice4: "console.log", 
        answer: 4
    }, 
    {
        question: "Commonly used data types DO Not Include:", 
        choice1: "Strings", 
        choice2: "Booleans", 
        choice3: "Alerts",
        choice4: "Numbers", 
        answer: 3
    }, 

]

startQuizBtn.addEventListener("click", function() {
    container.style.display = 'none';
    firstQuestion.style.display = 'block';
    startTimer();
});

const MAX_QUESTIONS = 5; 

startGame = () => {
    questionCounter = 0; 
    score = 0; 
    availableQuestions= [...questions];
    getNewQuestion(); 

}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >MAX_QUESTIONS) {
        return window.location.assign("/end.html");
    }
    questionCounter++; 
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); 
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question; 

    choices.forEach( choice => {
        var number = choice.dataset['number']; 
        choice.innerText = currentQuestion['choice' + number]; 
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true; 
};

removeResponse = () => {
    document.getElementsByClassName('correct-response')[0].style.display = "none";
    document.getElementsByClassName('incorrect-response')[0].style.display = "none";
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {   
        removeResponse();
        if(!acceptingAnswers) return; 

        acceptingAnswers: false; 
        const selectedChoice = e.target; 
        const selectedAnswer = selectedChoice.dataset["number"]; 

        //verifying if the question is correct or wrong
        console.log(selectedAnswer == currentQuestion.answer);
        //Displaying the HTML Element 
        if (selectedAnswer == currentQuestion.answer) {
            document.getElementsByClassName('correct-response')[0].style.display = "block";
        } else {
            document.getElementsByClassName('incorrect-response')[0].style.display = "block"; 
        }

        getNewQuestion();

/* This is not showing the right answer 
        Option 1: 
        const responseToApply = 
        selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";
        console.log(responseToApply);

        Option 2: 
        if (responseToApply === "correct") {

        Option 3: 
        if (selectedAnswer === currentQuestion.answer) {
            document.getElementsByClassName('correct-response')[0].style.display = "block";
        } else {
            document.getElementsByClassName('incorrect-response')[0].style.display = "block"; 
        }
        Option 4;
        var responseStatus = (selectedAnswer === currentQuestion.answer);
        console.log(responseStatus);
  */
    })
});

startGame();




function startTimer() {
    // Set the initial timer count
    var timerCount = 75;
  
    // Update the timer element with the initial count
    timerElement.textContent = timerCount;
  
    // Update the timer every second
    var timerInterval = setInterval(function() {
      // Decrease the timer count by 1
      timerCount--;
  
      // Update the timer element with the new count
      timerElement.textContent = timerCount;
  
      // Check if the timer has reached 0
      if (timerCount <= 0) {
        // Stop the timer interval
        clearInterval(timerInterval);
  
        // Perform any actions when the timer reaches 0
        // For example, show game over message, end the quiz, etc.
      }
    }, 1000); // 1000 milliseconds = 1 second
  }
  

