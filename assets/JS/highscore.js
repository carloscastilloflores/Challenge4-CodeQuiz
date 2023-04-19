var timeCount = localStorage.getItem("score");
var initials = localStorage.getItem("userName");
var highScoreList = document.getElementById('highscore-list');
var startGame = document.querySelector('#btn-start');
var clearGame = document.querySelector("#btn-clear");
var userData = [];
renderScores()

 function renderScores() {
   // highScoreList.innerHTML ="Hola";
   //  highScoreList.textContent = userData.length;
    
    var info = JSON.parse(localStorage.getItem("userData"));
    var number = 1 + ". ";
  if (info) {
    for (var i = 0; i < info.length; i++) {

        var listScore = document.createElement("li");
        listScore.textContent = number++ + ". " + info[i].userName + " " + "-" + " " +  info[i].score; 
        highScoreList.appendChild(listScore);
    }}
    };

startGame.addEventListener("click", function(event) {
    
    //     localStorage.setItem('initials', storedInitials);
    //     localStorage.setItem('score', timerCount);
        window.location.href = "./index.html";
        saveLastScore();
    });

//Add event listener that when click 
function  saveHighscore() {
    var initials = document.querySelector('.initials').value; 
    var storedInitials = localStorage.getItem(initials);
    console.log('Username', storedInitials);
    console.log('score', timeCount);
    
    
    // Retrieve the value of the timeCount variable and save it to the local storage
    localStorage.setItem('initials', storedInitials)
    localStorage.setItem('score', timeCount);
}

clearGame.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    highScoreList.style.display = 'none';
    renderScores(); 
    });

function init() {
    var storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData !== null) {
    userData = storedData;
    }
};

init() 
/*

var highscoresElement = document.querySelector(".highscores");
var clear = document.querySelector.apply("clear-button");

function renderScores() {
    var info = JSON.parse(localStorage.getItem("userInfo"));

    for (var i = 0; i < info.length; i++) {
        var listScore = document.createElement("li");
        listScore.textContent = "Name" + info[i].name + "Score " +  info[i].Score; 
        
        highscoresElement.appendChild(listScore)
    }
}

renderScores*/