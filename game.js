let question1 = document.getElementById('questions');
let question2 = document.getElementById('questions2');
let question3 = document.getElementById('questions3');
let question4 = document.getElementById('questions4');
var questionElements = [question1, question2, question3, question4];

let messageId = document.getElementById('messageId');
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

let quizTimer;
let totalAllowedQuizTimeInSeconds = 60;
let currentQuestionIndex = 0;
let currentScore = 0;
let welcome = document.getElementById('welcome');

// --------------------------------------------------------
    // --- START QUIZ FUNCTION----
//hide, display, display contentq1
// startQuiz.textContent = "Start"

// --------------------------------------------------------
// --- START GAME,----
let startButtonElement = document.getElementById("start");
    
startButtonElement.addEventListener("click", startQuiz);   

for(var index = 0;index < questionElements.length;index++) {
    questionElements[index].addEventListener('click', answerQuestion );
}
    
function startQuiz(){
    startTimer();

    // Show question 1
    question1.classList.remove('hidden');

    // Hide welcome message and start Quiz button.
    welcome.classList.add('hidden'); 
}

function startTimer() {
    // alert("s: " + totalAllowedQuizTimeInSeconds);
// Update the count down every 1 second
    quizTimer = setInterval(function() {
    totalAllowedQuizTimeInSeconds = totalAllowedQuizTimeInSeconds - 1;
    // alert("totalAllowedQuizTimeInSeconds: " + totalAllowedQuizTimeInSeconds);
    let timerId = document.getElementById("timerId");
    timerId.innerHTML = "Time Remaining: " + totalAllowedQuizTimeInSeconds;
    // If the count down is over, write some text 
    if (totalAllowedQuizTimeInSeconds < 0) {
        endQuiz("Time Finished.");
    }
}, 1000);
}

function endQuiz(message) {
    clearInterval(quizTimer);
    let endMessage = message + " Your score is: " + currentScore;
    // alert(endMessage);
    timerId.innerHTML = endMessage;
    hideAllQuestions();
    messageId.classList.add('hidden');
}

function answerQuestion(event) {
    
    // Which answer the choice (which button)
    var selectedAnswer = event.target.dataset.answer;
    
    // Compare `answer` to the "current question" answer
    // var currentQuestion = questions[currentQuestionIndex];
    if( selectedAnswer === questions[currentQuestionIndex].correctAnswer ) {
        // Answer is right
        messageId.innerHTML = selectedAnswer + " is the right answer.";
        hideQuestion(currentQuestionIndex);
        currentScore = currentScore + 10;
        let isLastQuestion = (currentQuestionIndex == questions.length - 1);
        if(isLastQuestion) {
            endQuiz("You completed Quiz in time.");
        }
        currentQuestionIndex = currentQuestionIndex + 1;
    } else {
        totalAllowedQuizTimeInSeconds = totalAllowedQuizTimeInSeconds - 10;
        messageId.innerHTML = selectedAnswer + " is wrong answer. Try again.";
    }
    //IF we have no questions left, we end the game
    //THEN we end the game
    //ELSE
}

function hideQuestion(questionIndex){

    let lastIndex = questions.length - 1;
    questionElements[questionIndex].classList.add('hidden');
    if(questionIndex != lastIndex) {
        // We are not processing last index
        questionElements[questionIndex+1].classList.remove('hidden');
    }
}

function hideAllQuestions() {
    for(var index = 0;index < questionElements.length;index++) {
        hideQuestion(index);
    }
}



// function startGame() {
//     count = 10;
//     questionIndex = 0;
//     document.getElementById("welcome").style.display = "none";
//     document.getElementById("timer").innerHTML = count;
//     makeQuiz();
    
// }

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

//when you click the start button, then the empty start button is read?
// function emptyStartBox() {
//     emptyStartBox.innerHTML = "";
//     document.querySelector("#button").style.display="none";
// }

// startButton.addEventListener("click", emptyStartBox)

// function startButton() {
//     startButton.addEventListener('click', startButton);
// }
