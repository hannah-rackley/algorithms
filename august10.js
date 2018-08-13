// Any live cell with fewer than two live neighbors dies, as if by under population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overpopulation.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// var nextGeneration = function(board) {
//     var rows = board.length;
//     var columns = board[0].length
//     var checkNearbyCells = function(y, x) {
//         var count = 0;
//         for (var i = -1; i < 2; i++) {
//             if (((y + i) > -1) && (y + i) < (rows)) {
//                 for (var j = -1; j < 2; j++) {
//                     (console.log(board[y,x]))
//                     if (((x + j) > -1) && ((x + j) < columns)) {
//                         if (i !== 0 && j !== 0) {
//                             if ([y+i][x+j] == true) {
//                                 count += 1;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//         return count;
//     }
//     for (var b = 0; b < rows; b++) {
//         for (var c = 0; c < columns; c++) {
//             console.log(board[b][c]);
//             console.log(checkNearbyCells(b, c));
//         }
//     }
//     // return newBoard;
// }


var block = 
    [[false, false, false, false], 
    [false, true, true, false], 
    [false, true, true, false], 
    [false, false, false, false]]

// nextGeneration(block)

// console.assert()

var behive = 
    [[false, false, false, false, false, false], 
    [false, false, true, true, false, false], 
    [false, true, false, false, true, false], 
    [false, false, true, true, false, false], 
    [false, false, false, false, false, false]]

var loaf = 
    [[false, false, false, false, false, false], 
    [false, false, true, true, false, false], 
    [false, true, false, false, true, false], 
    [false, false, false, true, false, false], 
    [false, false, false, false, false, false]];

var blinker = [
    [false, true, false],
    [false, true, false],
    [false, true, false]]


//Going over this again
var countNeighbors = function(board, x, y) {
    var offsets = [-1, 0, 1];
    var count = 0;
    offsets.forEach(function(yOffset) {
        offsets.forEach(function(xOffset) {
            if (!(yOffset === 0 && xOffset === 0)) {
                //Here we use truthy - if you cannot index into y + yOffset, then you can index into an empty array.
                var cellAlive = (board[y + yOffset] || [])[x + xOffset];
                if (cellAlive) {
                    count++;
                }
            }
        })
    })
    return count;
}

var shouldLive = function(cell, livingNeighborCount) {
    //If either of these conditions are met, the funciton will return true. In any other case - the function will return false.
    // return cell && (livingNeighborCount === 2 || livingNeighborCount === 3)
    // || (!cell && (livingNeighborCount === 3))
    //Simplify the above even more - the cell will be alive if the living count is three regardless of it's current status
    return livingNeighborCount === 3 || (cell && livingNeighborCount === 2);
}

//Function to loop through entire board to create the new one
var game = function(board) {
    //You can get the index of the current row - this will be the y value we will need later on in the function
    return board.map(function(row, y) {
        //rebuild the new board as we go
        //Also go ahead and get the index of the current cell you are at - which will provide the x value you will need
        return row.map(function(cell, x) {
            var countAlive = countNeighbors(board, x, y)
            return shouldLive(cell, countAlive);
        });
    });
}


var secondGeneration = (game(blinker));
console.log(game(secondGeneration));