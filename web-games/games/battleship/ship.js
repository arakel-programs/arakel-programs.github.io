var model = {
    bordSize: 7,
    numShip: 3,
    shipLength: 3,
    shipSunk: 0,

    // ships: [
    //     { locations: [0, 0, 0], hits: ["", "", ""] },
    //     { locations: [0, 0, 0], hits: ["", "", ""] },
    //     { locations: [0, 0, 0], hits: ["", "", ""] }
    // ],

    // original hard-coded values for ship locations

    ships: [
        { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] }
    ],


    fire: function(guess) { // "00"
        for (var i = 0; i < this.numShip; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess); // what is the index of guess ("00") in ship.locations

            if (index === -1) {
                continue;
            }

            // here's an improvement! Check to see if the ship
            // has already been hit, message the user, and return true.
            if (ship.hits[index] === "hit") {
                view.displayMessage("Oops, you already hit that location!");
                return true;
            } else if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess) // #04
                view.displayMessage("HIT!");

                if (this.isSunk(ship)) {
                    view.displayMessage("you sank my battleship!");
                    this.shipSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("you missed.");
        return false;
    },

    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") { // "" !== "hit"
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function() {
        var locations;
        for (var i = 0; i < this.numShip; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },

    generateShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        if (direction === 1) { // horizontal
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        } else { // vertical
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * this.boardSize);
        }

        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },

    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }

};


var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }

};

var controller = {
    guesses: 0,

    processGuess: function(guess) { //A0
        var location = parseGuess(guess); // #02

        if (location) { // null is falsy value
            this.guesses++;
            var hit = model.fire(location); // #03
            if (hit && model.shipSunk === model.numShips) {
                view.displayMessage("you sank my all battleship in " + this.guesses + " guesses ");
            }
        }
    }
}


// helper function to parse a guess from the user

function parseGuess(guess) { //"A0"
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess === undefined || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
        return null;
    }

    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (row < 0 || row >= model.boardSize) {
        alert("Oops, row is not exist on board!");
        return null;
    }

    if (column < 0 || column >= model.boardSize) {
        alert("Oops, column is not exist on board!");
        return null;
    }

    return row + column;
}


// event handlers

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value.toUpperCase();

    controller.processGuess(guess); // #1

    guessInput.value = "";
}

function handleKeyPress(e) {
    console.log('Caling fn:handleKeyPress', e);

    if (e.keyCode === 13) {
        handleFireButton();
    }
}


// init - called when the page has completed loading
window.onload = initHandler

function initHandler() {
    console.log('Caling fn:init');
    // This fn only get called when windown load
    // Fire! button onclick handler
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    // handle "return" key press
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;


    // place the ships on the game board
    // model.generateShipLocations();
}