var questionsEl = document.getElementById('questions');
var questionsEl2 = document.getElementById('questions2');
var questionsEl3 = document.getElementById('questions3');
var questionsEl4 = document.getElementById('questions4');

// function startGame() {
//     count = 10;
//     questionIndex = 0;
//     document.getElementById("welcome").style.display = "none";
//     document.getElementById("timer").innerHTML = count;
//     makeQuiz();
    
// }
// var questionElements = [questionsEl, questionsEl2, questionsEl3, questionsEl4];
// function makeQuiz() {
//     quizBox.style.display = "block";
//     var currentQuestion = quizQuestion = quizQuestions[QuestionIndex];
//     correctAnswer = currentQuestion.correctAnswer;
//     displayCurrentQuestion();
// }

// function displayCurrentQuestion() {
//     var currentQuestion = question(0)[QuestionIndex];
//     var questionEl = document.createElement("div");
//     questionEl.textContent = currentQuestion.question;
//     quizBox.appendChild(questionEl);
// }

//create a for loop for each question answer
var questions = [
    {
        question: "What's your favorite color?",
        MultipleChoiceOptions: [
        "Yellow",
        "Green",
        "Blue",
        "Pink"
    ],
    correctAnswer: "Green"
    },
    {
        question: "What's your favorite food?",
        MultipleChoiceOptions: [
        "Cake",
        "Cookies",
        "Pasta",
        "Burgers"
    ],
    correctAnswer: "Pasta"
    },
    {
        question: "What's your favorite sport?",
        MultipleChoiceOptions: [
        "Basketball",
        "Volleyball",
        "Track",
        "Football"
    ],
    correctAnswer: "Basketball"
    },
    {
        question: "What's your favorite animal?",
        MultipleChoiceOptions: [
        "Dolphin",
        "Doggo",
        "Cat",
        "Skunk"
    ],
    correctAnswer: "Doggo"
    }
];


var currentQuestionIndex = 0;

function answerQuestion(event) {

    // Which answer the choice (which button)
    var buttonEl = event.target;
    var answer = buttonEl.dataset.answer;

    // Compare `answer` to the "current question" answer
    var currentQuestion = questions[currentQuestionIndex];
    if( answer === currentQuestion.correctAnswer ) {

        currentQuestionIndex = currentQuestionIndex + 1;
        alert("Right answer is " + answer);
    } else {
        alert(answer + " is wrong answer. Try again.");
    }
    
//IF we have no questions left, we end the game
//THEN we end the game
//ELSE
}

for(var index = 0;index < questionElements.length;index++) {
    questionElements[index].addEventListener('click', answerQuestion );
}
