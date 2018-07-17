var lettersAvailble=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]


var guesses=9;
var wins=0;
var losses=0;
var remainingquesses=0;
var quesses_so_far=0;
var answer=o;
var computerGuess = lettersAvailble[Math.floor(Math.random() * lettersAvailble.length)];

document.onkeypress= function(event){

var userGuess=event.key;

if(userGuess===computerGuess){
    wins++;
} else {
    guesses--;
} 
   if (quesses ===0){
    losses++
}


}
