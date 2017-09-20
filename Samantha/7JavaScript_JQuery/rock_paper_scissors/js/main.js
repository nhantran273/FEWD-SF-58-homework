// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.
var humanScore = 0;
var computerScore = 0;
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
function play(humanPlay, computerPlay){
  console.log('You played ' + humanPlay + '. The bot played ' + computerPlay);
  
  if(humanPlay === computerPlay){
    console.log('You tied. :|');
  }else if(humanPlay === 'paper' && computerPlay === 'rock' || humanPlay === 'rock' && computerPlay === 'scissors' || humanPlay === 'scissors' && computerPlay === 
  'paper'){
    console.log('You Win! :)');
    humanScore += 1;
  }else{
    console.log('You Lose! :(');
    computerScore += 1;
  }
  
  console.log('You have ' + humanScore + ' points');
  console.log('The bot has ' + computerScore + " points");
}

// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.
play('rock', 'paper');
play('paper', 'rock');
play('scissors', 'rock');
play('rock', 'scissors');
play('paper', 'scissors');
play('scissors', 'paper');

// BONUS:
// Create a "best of 3" version
humanScore = 0;
computerScore = 0;

function bestOf3(humanPlay, computerPlay){
  if (humanScore === 3 || computerScore === 3){
      console.log('Game has Ended, No More Turns Left!');
  }else if (humanScore <= 3 && computerScore <= 3){
      console.log('You played ' + humanPlay + '. The bot played ' + computerPlay);
      
      if(humanPlay === computerPlay){
        console.log('You tied. :|');
      }else if(humanPlay === 'paper' && computerPlay === 'rock' || humanPlay === 'rock' && computerPlay === 'scissors' || humanPlay === 'scissors' && computerPlay === 
      'paper'){
        console.log('You Win! :)');
        humanScore += 1;
      }else{
        console.log('You Lose! :(');
        computerScore += 1;
      }

      if (humanScore === 3) {
        console.log('You Win Best of 3!');
      }else if (computerScore ===3){
        console.log('You Lose Best of 3!');
      }else{
        console.log('You have ' + humanScore + ' points');
        console.log('The bot has ' + computerScore + " points");
      }
  }else{
    console.log('Game Over!')
  }
}

bestOf3('rock', 'paper');
bestOf3('paper', 'rock');
bestOf3('scissors', 'rock');
bestOf3('paper', 'scissors');
bestOf3('scissors', 'paper');
bestOf3('scissors', 'paper');

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.




