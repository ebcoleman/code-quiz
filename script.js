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
];

var questionIndex = 0;

function askQuestion(){
    var currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.question;
    document.getElementById("choiceA").textContent = currentQuestion.choices[0];
    document.getElementById("choiceB").textContent = currentQuestion.choices[1];
    document.getElementById("choiceC").textContent = currentQuestion.choices[2];
};
// lines 36-44 are stating that when that choice is clicked, it is in relation to that specific answer in the array; then it will call the function to handle the user's answer
document.getElementById("choiceA").addEventListener("click", function (){
    handleUserAnswer(currentQuestion.choices[0])
});
document.getElementById("choiceB").addEventListener("click", function (){
    handleUserAnswer(currentQuestion.choices[1])
});
document.getElementById("choiceC").addEventListener("click", function (){
    handleUserAnswer(currentQuestion.choices[2])
});

function handleUserAnswer(userChoice) {
    var currentQuestion = questions[questionIndex]; 

    if (userChoice === currentQuestion.answer) {
        console.log("CORRECT ANSWER!")
    }
    else {
        console.log("INCORRECT ANSWER! =/(")
    }

    questionIndex++;

    askQuestion();
}

function startButtonClick() {
    console.log("Started quiz")
    // once start button is clicked this hides the start screen
    startScreen.style.display = "none";

    quiz.style.display = "block";

    askQuestion();
    
};

startButton.addEventListener("click", startButtonClick);


