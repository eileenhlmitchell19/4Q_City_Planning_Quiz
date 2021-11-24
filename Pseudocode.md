# What starting data my application needs to run?

- Questions and Answers

    - Array list for our series of questions

    - Each question will be an object
    ```
    {
        "Commonly used data types DO NOT include:",
        multipleChoiceOptions: [
            "string",
            "boolean"
            "alert",
            "number"
        ],
        correct: "alert"
    }
    ```

- Timer / Score

- timer interval
var interval;

# What kinds of actions does my application need to do?

- Start Game action
function startGame () { ... }

    - Hide welcome message
    function hideWelcome () { ... }

    - Display the next question
    function displayNextQuestion () { ... }

    - Start the countdown timer
    function startTimer()  {
        interval = setInterval(function() {
            ...
            clearInterval(Interval);
        }
    }

- Validate the users choice(if else)

    - IF the choice is wrong, subtract time from the timer

- Display the next question

- Display the answer result

- End the game

    - Stop the timer from counting down (clearInterval)



