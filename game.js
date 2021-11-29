//VARIABLES-------------------------------------
let question1 = document.getElementById('questions');
let question2 = document.getElementById('questions2');
let question3 = document.getElementById('questions3');
let question4 = document.getElementById('questions4');
var questionElements = [question1, question2, question3, question4];

let messageId = document.getElementById('messageId');

let quizTimer;
let totalAllowedQuizTimeInSeconds = 60;
let currentQuestionIndex = 0;
let currentScore = 0;
let welcome = document.getElementById('welcome');
let totalScore = 40;

var questions = [
    {
        question: "What does GIS Stand for?",
        MultipleChoiceOptions: [
        "Geographic Information Software",
        "Geographic Information Systems",
        "Geographic Interpretational Solutions",
        "Geologic Interpolation Sinking"
    ],
    correctAnswer: "Geographic Information Systems"
    },
    {
        question: "Who is an american activist and urbanist who led the way to community based planning practices and philosophies?",
        MultipleChoiceOptions: [
        "Le Corbusier",
        "David Hasselhoff",
        "Jane Jacobs",
        "Frank Lloyd Wright"
    ],
    correctAnswer: "Jane Jacobs"
    },
    {
        question: "What agency maintains the National Flood Insurance Program?",
        MultipleChoiceOptions: [
        "FEMA",
        "EPA",
        "WSDOT",
        "WHO"
    ],
    correctAnswer: "FEMA"
    },
    {
        question: "In the Township, Section, Range model, how many sections are there and what size are they?",
        MultipleChoiceOptions: [
        "16 Sections, 600 square feet",
        "36 Sections, 1 mile",
        "20 Sections, 2 miles",
        "5 Sections, 1/2 mile"
    ],
    correctAnswer: "36 Sections, 1 mile"
    }
];
//-----------------------------------------


// --- START BUTTON ON CLICK---------------
let startButtonElement = document.getElementById("start");
startButtonElement.addEventListener("click", startQuiz); 
//-----------------------------------------


// --- INITIALS BUTTON ON CLICK------------
let initialButtonElement = document.getElementById("initialButton");
initialButtonElement.addEventListener("click", saveInitials);     

for(var index = 0;index < questionElements.length;index++) {
    questionElements[index].addEventListener('click', answerQuestion );
}
//------------------------------------------


// --- START QUIZ QUESTIONS & TIMER---------
function startQuiz(){
    startTimer();

    // Show question 1
    question1.classList.remove('hidden');

    // Hide welcome message and start Quiz button.
    welcome.classList.add('hidden'); 
}
//-------------------------------------------



// --- START TIMER FUNCTION -----------------
function startTimer() {
// Update the count down every 1 second
    quizTimer = setInterval(function() {
    totalAllowedQuizTimeInSeconds = totalAllowedQuizTimeInSeconds - 1;
    let timerId = document.getElementById("timerId");
    timerId.innerHTML = "Time Remaining: " + totalAllowedQuizTimeInSeconds;
    if (totalAllowedQuizTimeInSeconds < 0) {
        endQuiz("Time Finished.");
    }
}, 1000);
}
//-------------------------------------------


// --- END QUIZ FUNCTION --------------------
function endQuiz(message) {
    clearInterval(quizTimer);
    
    timerId.innerHTML = message;
    hideAllQuestions();
    messageId.classList.add('hidden');
    let saveDivElement = document.getElementById("saveDiv")
    saveDivElement.classList.remove('hidden');
}
//-------------------------------------------


// --- ANSWER QUESTION FUNCTION -------------
function answerQuestion(event) {
    
    var selectedAnswer = event.target.dataset.answer;
    //if you get the correct answer, you get +10 points
    if( selectedAnswer === questions[currentQuestionIndex].correctAnswer ) {
        messageId.innerHTML = selectedAnswer + " is the right answer.";
        hideQuestion(currentQuestionIndex);
        currentScore = currentScore + 10;
        let isLastQuestion = (currentQuestionIndex == questions.length - 1);
       //end the quiz if you run out of questions
        if(isLastQuestion) {
            endQuiz("You completed Quiz in time.");
        }
        currentQuestionIndex = currentQuestionIndex + 1;
    } else {
        //if you get the wrong answer, -10 seconds from the clock but no point deduction
        totalAllowedQuizTimeInSeconds = totalAllowedQuizTimeInSeconds - 10;
        messageId.innerHTML = selectedAnswer + " is wrong answer. Try again.";
    }
}
//-------------------------------------------


// --- HIDE QUESTION FUNCTION -------------
function hideQuestion(questionIndex){

    let lastIndex = questions.length - 1;
    questionElements[questionIndex].classList.add('hidden');
    if(questionIndex != lastIndex) {
        // We are not processing last index
        questionElements[questionIndex+1].classList.remove('hidden');
    }
}
//-------------------------------------------


// --- HIDE ALL QUESTIONS FUNCTION ----------
function hideAllQuestions() {
    for(var index = 0;index < questionElements.length;index++) {
        hideQuestion(index);
    }
}
//-------------------------------------------


// --- SAVE INITIALS and SCORE FUNCTION -----
function saveInitials() {
    let initialsElement = document.getElementById("initials");
    let timerIdElement = document.getElementById("timerId");
    timerIdElement.innerHTML = "Hello " + initialsElement.value + ". Your score is " + currentScore + " out of " + totalScore;

}
//-------------------------------------------
