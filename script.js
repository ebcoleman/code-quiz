var startButton = document.getElementById("start-btn");
var startScreen = document.getElementById("start-screen");
var quiz = document.getElementById("quiz");
var questionElement = document.getElementById("question");
var choicesList = document.getElementById("choices");
var timerElement = document.getElementById("timer");


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
    // do not yet have a calculateScore function which will link to below var
    // var score = calculateScore ();

    // doneScreen.innerHTML += "<p>Your score: " + score + "</p>";
};

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
    
function handleUserAnswer(userChoice) {
    var currentQuestion = questions[questionIndex]; 

    if (userChoice === currentQuestion.answer) {
        console.log("CORRECT ANSWER!")
    }
    else {
        console.log("INCORRECT ANSWER! =/(")
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

function startButtonClick() {
    console.log("Started quiz")
    // once start button is clicked this hides the start screen
    startScreen.style.display = "none";

    quiz.style.display = "block";
    startTimer();
    askQuestion();
    
};

startButton.addEventListener("click", startButtonClick);


