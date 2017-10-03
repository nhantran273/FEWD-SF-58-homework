// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.

var humanScore= 0; //global vars
var computerScore=0;


// Create a function play. It should accept two parameters: humanPlay and computerPlay
// Inside the function:
  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."

  // If the human play is equal to the computer play
    // Log "You tied. :|" to the console.
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
    // Log "You win! :)" to the console
    // Add one to the humanScore variable (be sure to use += )
  // Otherwise log "You lose! :(" to the console
    // Add one to the computerScore variable (be sure to use += )

  // Log "You have {humanScore} points" to the console
  // For example: "You have 0 points"
  // Log "The bot has {computerScore} points" to the console.
  // For example: "The bot has 3 points"


//Defining the function play the specifies a game of rock paper scissors
function play(humanPlay,computerPlay) {
  console.log("You played "+humanPlay+". The bot played "+computerPlay);

  if(humanPlay===computerPlay){
    console.log("You tied. :|");
  } else if((humanPlay==="paper" && computerPlay==="rock") 
    | (humanPlay==="rock" && computerPlay==="scissors")
    | (humanPlay==="paper" && computerPlay==="rock")) {
    console.log("You win! :)");
    humanScore += 1;
  } else {
    console.log("You lose! :(");
    computerScore += 1; 
  }

  console.log("You have "+humanScore+" points.");
  console.log("The bot has "+computerScore+" points.");
}


// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.


//Calling the function play
play("rock","scissors"); //human wins, human=1, bot=0
play("scissors", "rock"); //human loses, human=1, bot=1 
play("paper", "paper"); //human ties bot, human=1, bot=1
play("paper", "rock"); //human wins, human=2, bot=1
play("paper", "scissors") //human loses, human=2, bot=2


console.log('||||||||||||||||||||||Best of Three Version||||||||||||||||||||||||||||||');

//Resets the two global score variables
console.log('Resetting human score and bot score.....');
humanScore=0;
computerScore=0;
console.log('Human score is now '+humanScore+ " and bot score is now "+computerScore);

//creates an Array of length 3 and max index position of 2
var textArray = [
"rock",
"paper",
"scissors"
];

// BONUS:
// Create a "best of 3" version

//runs until either human or computer has reached 3 points
while(humanScore<3 && computerScore<3) {

//generates a random index point that is max = 2, i.e. the floor of the max length times a decimal will always be 
//at least one less than the max length. I.e. floor or .9999 times max length 3 is 2. 
//does this twice, once for the human and once for the computer
var randomIndex = Math.floor(Math.random()*textArray.length);
var randomIndexTwo = Math.floor(Math.random()*textArray.length);

//whichever play the two random indexes correspond to, gets stored in the humanPlayRandomSelected variable,
// and the computerPlayRandomSelected variable, respectively 
var humanPlayRandomSelected = textArray[randomIndex];
var computerPlayRandomSelected = textArray[randomIndexTwo];

//initiates play
play(humanPlayRandomSelected,computerPlayRandomSelected);

}

if(computerScore ===3) {
  console.log("Bot has won the best of three game!");
} else {
  console.log("You have won the best of three game! Take that, computer overlords!");
}
