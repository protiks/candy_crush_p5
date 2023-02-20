const { fallCandies, createBoard, findMatches } = require('./sketch.js');

test('fallCandies creates new candies at top of columns with empty spaces', () => {
    const board = [[1, 0, 2],
    [1, -1, 2],
    [-1, 1, 0]
    ];
    fallCandies(board);
    for (let i = 0; i < board.length; i++) {
        if (board[0][i] == -1) {
            expect(board[0][i]).not.toEqual(-1);
        }
    }
});

test('fallCandies does not move or create candies when no empty spaces exist', () => {
    const board = [
        [0, 1, 2],
        [1, 2, 0],
        [2, 0, 1]
    ];
    const expected = [[0, 1, 2],
    [1, 2, 0],
    [2, 0, 1]
    ];
    fallCandies(board);
    expect(board).toEqual(expected);
});

test('createBoard returns a 5x5 board array', () => {
    const board = createBoard(5);
    expect(board.length).toEqual(5);
    expect(board[0].length).toEqual(5);
});

test('createBoard returns a 10x10 board array', () => {
    const board = createBoard(10);
    expect(board.length).toEqual(10);
    expect(board[0].length).toEqual(10);
});

