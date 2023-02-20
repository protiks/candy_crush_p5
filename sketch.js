

var board
var selectedCandy = null;
var cellSize = 50; // Set the size of each cell in the game board
var score = 0;
var scoreDisplay
var board = [
  [1, 2, 0, 1, 2, 0, 1],
  [0, 1, 2, 0, 1, 2, 0],
  [2, 0, 1, 2, 0, 1, 2],
  [1, 2, 0, 1, 2, 0, 1],
  [0, 1, 2, 0, 1, 2, 0],
  [2, 0, 1, 2, 0, 1, 2],
  [1, 2, 0, 1, 2, 0, 1]
]

function setup() {
  createCanvas(400, 400);
  frameRate(1)
  scoreDisplay = createDiv('Score: ' + score);
  // board = createBoard(5)
}

function createBoard(gridSize) {
  var boardArray = [];
  for (var i = 0; i < gridSize; i++) {
    boardArray[i] = [];
    for (var j = 0; j < gridSize; j++) {
      boardArray[i][j] = Math.floor(Math.random() * 4);
    }
  }
  return boardArray;
}





function draw() {
  background(220);
  // console.log(board)
  scoreDisplay.html('Score: ' + score);

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      fill(getColor(board[i][j])); // Get the color of the candy
      rect(j * cellSize, i * cellSize, cellSize, cellSize);
    }
  }
   
  var matches = findMatches();
  if (matches.length > 0) {
    removeCandies(matches);
    fallCandies();
    updateScore(matches);
  } else {
    fallCandies();
  }
}

function findMatches() {
  var matches = [];

  // Check for horizontal matches
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length - 2; j++) {
      if (board[i][j] == board[i][j + 1] && board[i][j] == board[i][j + 2]) {
        matches.push({ i: i, j: j }, { i: i, j: j + 1 }, { i: i, j: j + 2 });
      }
    }
  }

  // Check for vertical matches
  for (var i = 0; i < board.length - 2; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] == board[i + 1][j] && board[i][j] == board[i + 2][j]) {
        matches.push({ i: i, j: j }, { i: i + 1, j: j }, { i: i + 2, j: j });
      }
    }
  }

  return matches;
}

function removeCandies(matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    board[match.i][match.j] = -1;
    score = score + 1
  }
}

function fallCandies() {
  for (var j = 0; j < board[0].length; j++) {
    for (var i = board.length - 1; i >= 0; i--) {
      if (board[i][j] == -1) {
        // If the space is empty, move candy down until it hits a non-empty space
        var k = i;
        while (k >= 0 && board[k][j] == -1) {
          k--;
        }
        if (k >= 0) {
          board[i][j] = board[k][j];
          board[k][j] = -1;
        } else {
          // If there are no candies above, create a new one at the top
          // board[i][j] = Math.floor(Math.random() * 3);
        }
      }
    }
  }
}

function updateScore(matches) {
  // score += matches.length;
  console.log(score, ' + score')
}

function getColor(candyType) {
  switch (candyType) {
    case -1:
      return "grey";
    case 0:
      return "#57DDF3";
    case 1:
      return  "#14C2DD";
    case 2:
      return "#A1F7A1";
    case 3:
      return "#C7F954"
    case 4:
      return "lightyellow"
    case 5: 
      return "red"
  }
}


function mouseClicked() {
  
  var i = Math.floor(mouseY / cellSize);
  var j = Math.floor(mouseX / cellSize);
  if (selectedCandy == null) {
    selectedCandy = {i: i, j: j};
  } else if (Math.abs(i - selectedCandy.i) + Math.abs(j - selectedCandy.j) == 1) {
    var temp = board[i][j];
    board[i][j] = board[selectedCandy.i][selectedCandy.j];
    board[selectedCandy.i][selectedCandy.j] = temp;
    selectedCandy = null;
  } else {
    selectedCandy = {i: i, j: j};
  }
}

module.exports = {
  fallCandies,
  createBoard,
  findMatches,
}