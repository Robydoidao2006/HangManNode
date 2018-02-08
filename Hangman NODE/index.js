
//variable that holds the guessing words
var randomWord = [ "schwarzenegger", "angelina", "selena" ];
//randomly selects one word.
var randomResult = randomWord[Math.floor(Math.random()*randomWord.length)].toString();

exports.randomResult = randomResult;


console.log(randomResult);





// split words in letters
// var chars = "overpopulation".split('');

// var s = "overpopulation";
// for (var i = 0; i < s.length; i++) {
//     console.log(s.charAt(i));
// }



// exporting the randomResult 












