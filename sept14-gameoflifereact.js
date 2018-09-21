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
        return <button className="square" onClick={() => this.setState({ value: !this.state.value })}>{JSON.stringify(this.state.value)}</button>
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(5).fill(Array(5)).fill(false)
        };
    }
    //handle clicks update board at i based upon value
    setSquareValue(index) {
        console.log(this.state.board);
        const newBoard = this.state.board.slice();
        newBoard[index] = !this.state.board[index];
        this.setState({board: newBoard})
    }

    handleClick(i) {
        this.setSquareValue(i);
    }

    renderSquare(i) {
        return <Square
            value={this.state.board[i]} onClick={this.handleClick(i)}/>
    }
    render() {
        return (
        <div className="board">
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
            </div>
            <div className="board-row">
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
            </div>
            <div className="board-row">
                {this.renderSquare(10)}
                {this.renderSquare(11)}
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
            </div>
            <div className="board-row">
                {this.renderSquare(15)}
                {this.renderSquare(16)}
                {this.renderSquare(17)}
                {this.renderSquare(18)}
                {this.renderSquare(19)}
            </div>
            <div className="board-row">
                {this.renderSquare(20)}
                {this.renderSquare(21)}
                {this.renderSquare(22)}
                {this.renderSquare(23)}
                {this.renderSquare(24)}
            </div>
      </div>);
    }
}

class Homepage extends React.Component {
    render() {
        return <div className="homepage">
            <h1>Game of Life</h1>
            <button>Next!</button>
            <Board setSquareValue={this.setSquareValue} />
        </div>
    }
 }

ReactDOM.render(
    <Homepage></Homepage>, document.querySelector('.root')
);