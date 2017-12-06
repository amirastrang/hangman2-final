var Word = require("./word.js");
var prompt = require("prompt");

prompt.start();

debugger
var game = function() {
  this.wordBank = ["number", "guess", "remember", "forget"];
  this.guessesleft = 10;
  this.currentWord = null;
  this.startGame = function(wrd) {
    var startWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    this.currentWord = new Word(startWord);
    this.currentWord.getLets();
    this.keepPromptingUser();
  }
  this.keepPromptingUser = function() {
    var self = this;
    prompt.get(["guessLetter"], function(err, result){
      console.log("The letter you chose is " + result.guessLetter);
      var usersguess = self.currentWord.checkIfLetterFound(result.guessLetter);
      if (usersGuess === 0){
        console.log("Wrong Guess!");
        self.guessesleft -= 1;
      } else {
        console.log("You guessed right!")
        if (self.currentWord.didWeFindTheWord() === true) { 
          console.log("Winner,Winner Chicken Dinner!")
          return 1;
        }
      }
      console.log("Guesses remaining: " + self.guessesRemaining);
      console.log(self.currentWord.wordRender());
      if (self.guessesleft> 0 || self.currentWord === false){
        self.keepPromptingUser();        
      } else if (self.guessesleft === 0){ 
        console.log("Better Luck Next Time" + self.currentWord.word);
      } else {
        console.log(self.currentWord.wordRender());
      }
    }); 
  } 
}


//these are used to check variables in the game
var game1 = new game();
game1.startGame();
// var resultWordBank = game1.wordBank;
// var wordBankLength = game1.wordBank.length;
// var resultGuessesRemaining = game1.guessesRemaining;
// var resultsLets = game1.currentWrd;


