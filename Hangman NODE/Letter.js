


function Letter(value){
    //holds the letters
    this.letter = value;
    //seting bolean to false
    this.guess = false;
   

};

function displayLetter(){
    //display blank
    if(this.letter == " "){
        this.guess === true;
        return " ";
    }
    //if user guess is false = return _ else display letter
    if(this.guess === false){
        return "_";
    } else {
        return this.letter;
    }

};


exports.Letter = Letter;





