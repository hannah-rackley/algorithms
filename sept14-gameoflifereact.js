// Any live cell with fewer than two live neighbors dies, as if by under population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overpopulation.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

var block = 
    [[false, false, false, false], 
    [false, true, true, false], 
    [false, true, true, false], 
    [false, false, false, false]]

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

// var countNeighbors = function(board, x, y) {
//     var offsets = [-1, 0, 1];
//     var count = 0;
//     offsets.forEach(function(yOffset) {
//         offsets.forEach(function(xOffset) {
//             if (!(yOffset === 0 && xOffset === 0)) {
//                 //Here we use truthy - if you cannot index into y + yOffset, then you can index into an empty array.
//                 var cellAlive = (board[y + yOffset] || [])[x + xOffset];
//                 if (cellAlive) {
//                     count++;
//                 }
//             }
//         })
//     })
//     return count;
// }

// var shouldLive = function(cell, livingNeighborCount) {
//     //If either of these conditions are met, the function will return true. In any other case - the function will return false.
//     // return cell && (livingNeighborCount === 2 || livingNeighborCount === 3)
//     // || (!cell && (livingNeighborCount === 3))
//     //Simplify the above even more - the cell will be alive if the living count is three regardless of it's current status
//     return livingNeighborCount === 3 || (cell && livingNeighborCount === 2);
// }

// //Function to loop through entire board to create the new one
// var game = function(board) {
//     //You can get the index of the current row - this will be the y value we will need later on in the function
//     return board.map(function(row, y) {
//         //rebuild the new board as we go
//         //Also go ahead and get the index of the current cell you are at - which will provide the x value you will need
//         return row.map(function(cell, x) {
//             var countAlive = countNeighbors(board, x, y)
//             return shouldLive(cell, countAlive);
//         });
//     });
// }

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            value: false,
        };
    }

    render() {
        return <button className="square" onClick={() => this.setState({ value: true })}>{JSON.stringify(this.state.value)}</button>
    }
}

class Board extends React.Component {
    render() {
        return (
        <div className="board">
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>
      </div>);
    }
}

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(5).fill(Array(5)).fill(false)
        }
    }
    render() {
        return <div className="homepage">
            <h1>Game of Life</h1>
            <button>Next!</button>
            <Board board={this.state.board}/>
        </div>
    }
 }

ReactDOM.render(
    <Homepage></Homepage>, document.querySelector('.root')
);