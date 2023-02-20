# Candy Crush Game
This is a basic implementation of the popular game "Candy Crush" using p5.js library.

## Game Link
[Candy Crush in p5.js](https://candy-crush-p5.netlify.app/)

## How to Play

The goal of the game is to match at least 3 candies of the same color in a row or column to earn points.
Click on any two adjacent candies to swap them, If this swap results in a matching group of three or more candies, they will disappear and new candies will fall from above to fill the space.
The game ends when there are no more matching candies left on the board.

## Implementation

The game is played on a 7x7 board, where each cell contains a candy of a specific color.
The game is implemented in JavaScript, using the p5.js library for rendering graphics.
The candies are represented by integers 0-3, with each number corresponding to a different color.

The game logic is implemented using several functions that handle the following tasks:
- Creation of a new random board
- Finding matching candies in a row or column
- Removing matching candies
- Dropping candies down to fill empty spaces
- Updating score
- The game also includes a "shuffle" button to generate a new random board, and a score display to keep track of the player's score.

## How to Run
To run the game, simply open the HTML file in a web browser.
Click on the "shuffle" button to generate a new random board and start playing.
Click on any two adjacent candies to swap them and try to create matching groups of at least 3 candies to earn points.

## Tests
The code includes two basic tests to check that the createBoard() and findMatches() functions work as expected. To run the tests, open the test.html file in a web browser. The tests will be displayed, with a summary of the test results at the bottom of the page.
