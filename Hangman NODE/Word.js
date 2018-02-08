
var Letter = require('./letter.js');
var randomResult = require("./index.js");

//var randomResult = new randomResult();
var inquirer = require("inquirer");

//constructor game that holds objs
function Game(){
    this.win = 0
	this.loss = 0;
	this.lives = 0;
    
    
    this.startGame = function(){
		this.lives = 8;
	};

    this.run = function (sc) {

		switch(sc){
			case "correct":
				console.log('You are correct!!!');
				break;
			case "wrong":
				console.log('You are wrong!!!');
				console.log('You have ', this.lives + " lives left");
				break;
			case "already":
				console.log('You already used that letter!');
				break;
			default:
				console.log('err')
		}
	}


}

exports.Game = Game;

//produceOutcomes = run



















