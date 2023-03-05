// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Get the HTML elements
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const result = document.getElementById("result");

// Add an event listener to the submit button
submitGuess.addEventListener("click", function() {
  // Get the user's guess
const guess = parseInt(guessInput.value);

  // Check if the guess is correct
if (guess === randomNumber) {
    result.innerHTML = "Congratulations! You guessed the number!";
    setTimeout(function(){window.location.reload();},3000);
} else {
    result.innerHTML = "Sorry, that's not the number. Please try again.";
    setTimeout(function(){window.location.reload();},3000);
}
});
