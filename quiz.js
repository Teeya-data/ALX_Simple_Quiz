function checkAnswer() {
    // Step 1: Identify the correct answer
    let correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    let userChoice = document.querySelector('input[name="quiz"]:checked');

    // If no answer is selected, handle it
    if (!userChoice) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    let userAnswer = userChoice.value;

    // Step 3: Compare answers and show feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
