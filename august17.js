//Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//How many such routes are there through a 20×20 grid? In an n x n grid?
let getAllPaths = (width, height) => {
    if (width === 0 || height === 0) {
        return 1;
    }
    return getAllPaths(width, height - 1) + getAllPaths(width - 1, height);
}

console.log(getAllPaths(4, 4));