var startButton = document.getElementById("start-btn");
var startScreen = document.getElementById("start-screen");
var quiz = document.getElementById("quiz");
var questionElement = document.getElementById("question");
var choicesList = document.getElementById("choices");
var timerElement = document.getElementById("timer");
var submitButton = document.getElementById("submit-btn");
var correctAnswer = 0;
var userScore = 0;

var questions = [
    {
        question: "What is JavaScript?",
        choices:["A coffee shop","Gives the webpage style","Allows user to interact with webpage"],
        answer: "Allows user to interact with webpage"
    },
    {
        question: "What is the index of the initial element in a JavaScript array?",
        choices: ["0","1","A or B"],
        answer: "0"
    },
    {
        question: "Is Java and JavaScript the samething?",
        choices: ["Duh, of course", "No way!", "Maybe?"],
        answer: "No way!"
    }
];

var questionIndex = 0;

var timeRemaining = 60;
var timerInterval;

function quizCompleted () {
    return questionIndex === questions.length;
};

function showDoneScreen () {
    clearInterval(timerInterval);

    var doneScreen = document.getElementById("done");
    var userInitials = document.getElementById("initials");

    doneScreen.style.display = "block";

    var displayScore = document.createElement("p");
    displayScore.textContent = "Your score: " + userScore;
    doneScreen.appendChild(displayScore);

    var finalTimeRemaining = document.createElement("p");
    finalTimeRemaining.textContent = "Time reamaining: " + timeRemaining + "sec.";
    doneScreen.appendChild(finalTimeRemaining);

    submitButton.addEventListener("click", function() {

    var userData = {
        initials: userInitials.value,
        score: userScore,
        timeRemaining: timeRemaining
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("User submitted: ", userData);

    window.location.href = "scoreboard.html";
});
}
    var storedData = JSON.parse(localStorage.getItem("userData"));
        console.log("User's score", storedData)

function askQuestion(){
    var currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesList.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, index) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", function () {
            handleUserAnswer(choice);
        });
        choicesList.appendChild(choiceButton);
    });
};
    
// when the user answers correctly 10 points are added to their score, when incorrectly answer 10 seconds removed from timer
function handleUserAnswer(userChoice) {
    var currentQuestion = questions[questionIndex]; 

    if (userChoice === currentQuestion.answer) {
        console.log("CORRECT ANSWER!")
        correctAnswer++;
        // adds 10 points each time user answers correctly
        userScore += 10;
    }
    else {
        console.log("INCORRECT ANSWER! =/")
        timeRemaining -= 10;
        if (timeRemaining < 0) {
            timeRemaining = 0;
        }
    }

    questionIndex++;

// if the quiz is completed show the done screen, if not call the askQuestion function
    if (quizCompleted ()) {
        quiz.style.display = "none";
        showDoneScreen();
    } else {
        askQuestion();
    }
    timerElement.textContent = "Timer: " + timeRemaining + " sec.";

}

timerElement.textContent = "Timer: " + timeRemaining + " sec.";

function startTimer() {
    timerInterval = setInterval(function () {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval (timerInterval);
            quiz.style.display = "none";
            showDoneScreen();
        } else {
            timerElement.textContent = "Timer: " + timeRemaining + " sec.";
        }
    }, 1000);
}

startButton.addEventListener("click", startButtonClick);
function startButtonClick() {
    console.log("Started quiz")
    // once start button is clicked this hides the start screen
    startScreen.style.display = "none";

    quiz.style.display = "block";
    startTimer();
    askQuestion();
    
};
