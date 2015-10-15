


var userFinalDecision = (667);

var firstAnswer = confirm("Are you ready to hike Mt. Doom?");
if(firstAnswer) {
  console.log("Let's Go!");
} else {
  console.log("Well fuck you too then.");
}

var userAnswer = prompt ("You are hiking the mystical Mt. Doom in New Zealand. You are about half of the way up, when suddenly, you come to a fork in the path. Do you want to go left or right?");

if (userAnswer === "left") {
  var userChoice = prompt ("Hmmm... you may regret that...The path to the left is rather rugged. Unfortunately, you trip on a log and twist your ankle! Bummer man. Would you like to 'sit and wait' for help to come or 'keep on hiking'?");
  //  //  //
  if (userChoice === "keep on hiking") {
    console.log ("Good Choice. You have a clear path to the top! Even with your twisted ankle, you have climbed Mt. Doom! Congrats, you win!");
  } else {
    console.log( "That was dumb. You waited for three days an no one came to your rescue! Unfortunately you die from starvation and thirst. You lose. Game over....");
  };
} else  {
    var userDecision = prompt ("Okay....most people don't like this path! Too bad. Next, you run into the Three-Legged Unicorn Man! Would you like to 'run' or 'talk to him'?");
    if (userDecision === "talk to him") {
      var userNextMove = prompt ("Smart move. The Three-Legged Unicorn Man can be really tricky sometimes, but he is willing to negotiate. He will let you live if you guess his age correctly. He asks you if he is older or younger than 500 years, or just plain dead. Do you think he is older or younger than 500, or 'dead'? ");
      if (userNextMove === "younger") {
        console.log ("Nope, you guessed incorrectly! The Three-Legged Unicorn Man is 677 years old! He kills you, so basically...you lose.");
      } if (userNextMove === "older") {
        console.log ( "Wow you are right! The Three-Legged Unicorn Man is 677 years old! You should be so proud of your intelligence. You are really freaking smart. He lets you go, so you get to hike to the top of Mt. Doom. YOU WIN!!");
      } if  (userNextMove === "dead") {
        console.log ("Nope you're wrong. He is very very alive. But he kills you, so you are not.")
      }
    } else {
      console.log("Bad idea! The Three-Legged Unicorn Man chased you down and stabbed you with his horn. Better luck next time. Sorry, but you lose.");
    }
}
