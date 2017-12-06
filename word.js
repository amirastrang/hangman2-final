  var Letter = require("./letter.js");
module.exports = Word;

function Word(wrd) {
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function() {
   
   
    for (var i = 0; i < this.word.length; i++) {
      this.lets[i] = new Letter(this.word.charAt(i));
    }
  }
  //check to see if the guess letter is in the word
  this.checkIfLetterFound = function(guessLetter) {
    this.whatToReturn = 0;
    for (var i = 0; i < this.lets.length; i++){
      if (guessLetter === this.lets[i].charac) {
        this.lets[i].appear = true;
        this.whatToReturn += 1;
      }
    }
    return this.whatToReturn;
  }


  this.didWeFindTheWord = function(){
    var result = this.lets.every(function(curLet){
      if(curLet.appear === true){
        curLet.found = true;
        return curLet.found;
      }
    });
    return result;
  }

  //create a string of the characters guessed in the array using letterRender()
  this.wordRender = function() {
    this.str = "";
    var string1 = "";
    for (var i = 0; i < this.lets.length; i++){
       string1 = string1 + this.lets[i].letterRender();
       this.str = string1;
    }
    return this.str;
  }
}

