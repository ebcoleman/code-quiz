var startButton = document.getElementById("start-btn");
var startScreen = document.getElementById("start-screen");
var quiz = document.getElementById("quiz");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");

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
]


function startButtonClick() {
    console.log("Started quiz")
    // once start button is clicked this hides the start screen
    startScreen.style.display = "none";

    quiz.style.display = "block";
    

}

startButton.addEventListener("click", startButtonClick);

