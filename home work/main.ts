// function homework

//function calculateProduct(a, b) {
    //return a * b;
//}

/*const result = calculateProduct(5, 10);
console.log(result); // should print 50cls


function add(a: number, b: number): number {
    return a + b;
}*/


function greet(name, greeting = "Hello"){
    return `${greeting}, ${name}!` ;
}

console.log(greet("Ameen")); // should print "Hello, Ameen!"
console.log(greet("Zia", "Hi")); // should print "Hi, Zia!"

//enums and tuple

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}


//function countdown(n) {
  //  while (n >= 0) {
    //    console.log(n);
      //  n--;
    //}
//}

// Example usage:
//countdown(5); // should print 5, 4, 3, 2, 1, 0






// Array of favorite movies
const favoriteMovies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "The Lord of the Rings: The Return of the King"
];

// Function to print each movie
function printMovies(movies) {
    for (const movie of movies) {
        console.log(movie);
    }

    // Object representing a car
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// Function to print each property name and its value
function printCarProperties(car) {
    for (const property in car) {
        console.log(`${property}: ${car[property]}`);
    }
}

// Call the function
printCarProperties(car);


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Call the function
fizzBuzz();


// Import necessary modules for user input
import * as readline from 'readline';

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to prompt the user for a guess and handle the guessing game logic
function guessingGame() {
    const randomNumber = getRandomNumber(1, 10);
    let userGuess: number;

    // Function to ask the user for their guess
    function askGuess() {
        rl.question('Guess the number between 1 and 10: ', (answer) => {
            userGuess = parseInt(answer, 10);
            
            if (isNaN(userGuess)) {
                console.log('Please enter a valid number.');
                askGuess();
            } else if (userGuess !== randomNumber) {
                console.log('Incorrect, try again!');
                askGuess();
            } else {
                console.log('Congratulations! You guessed the correct number.');
                rl.close();
            }
        });
    }

    // Start the guessing game
    askGuess();
}

// Run the guessing game
guessingGame();


//homework assignment

type colors=[string,string,string]
function RGB(){
    let rgb: colors=["red", "blue","green"]
    return rgb

}

let result =RGB()
console.log(result);
