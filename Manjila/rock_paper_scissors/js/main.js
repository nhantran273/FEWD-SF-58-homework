// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.
var humanScore=0;
var computerScore=0;

// Create a function play. It should accept two parameters: humanPlay and computerPlay
// Inside the function:
plays=0
while (plays<3){
  function play(humanPlay, computerPlay){
    console.log("You played ", humanPlay, ". The bot played ", computerPlay);
    if (humanPlay === computerPlay){
      console.log('You tied!');
      console.log("You have ", humanScore, " points!")
      console.log("The bot has ", computerScore, " points!")

    } else if ((humanPlay === 'paper' && computerPlay ==='rock') || (humanPlay === 'rock' && computerPlay === 'scissors') || (humanPlay === 'scissors' && computerPlay=== 'paper')){
      console.log('You win!');
      humanScore +=1;
      console.log("You have ", humanScore, " points!")
    } else{
      console.log('You lose!');
      computerScore +=1;
      console.log("The bot has ", computerScore, " points!")
    }
  }
  
  var compPick=Math.floor(Math.random()*3)+1;
  if (compPick===1){
    choice2= 'rock';
  } else if (compPick===2){
    choice2= 'paper';
  }else{
    choice2= 'scissors';
  }
  var humanPick=Math.floor(Math.random()*3)+1;
  if (humanPick===1){
    choice1= 'rock';
  } else if (compPick===2){
    choice1= 'paper';
  }else{
    choice1= 'scissors';
  }
  plays +=1;
  play(choice1, choice2);
} 

if (humanScore>computerScore){
  console.log('You won the best of 3 with the score of ', humanScore);
} else if(computerScore>humanScore){
  console.log('The Bot won the best of 3 with the score of ', computerScore);
} else{
  console.log('Its a tie');
}




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


// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.


// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.