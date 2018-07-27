//Array Steamroller
//Flatten a nested array. You should account for various levels of nesting. 
//steamrollArray([1, [2], [3, [[4]]]]); should return [1,2,3,4]


//example:
// var greet = function(i) {
//     if (i !== 0) {
//         console.log('greetings!');
//         greet(i-1);
//     }
// }

// greet(5);
// var newArray = [];

// function steamrollArray(arr) {
//     debugger;
//     var index = arr.length;
    
//     if ((Array.isArray([arr[index-1]])) && arr.length > 0) {
//         steamrollArray(arr[index-1]);
//     } else {
//         newArray.push(arr);
//     }  
//     console.log(newArray);
// }

// console.log(steamrollArray([1, [2], [3, [[4]]]]));
var finalArray = [];
function flatten(arr) {
    arr.forEach(function(item) {
        if (Array.isArray(item)) {
            flatten(item);
        } else {
            finalArray.push(item);
        }
    });
    return finalArray;
}
console.log(flatten([1, [2], [3, [[4]]]]));



// Write a function that accepts two parameters (you may add a third to differentiate type). The first is an array, and the second is a function. The function should look through the array for the first thing that matches the condition of the function passed. If a match is not found, return false.

// Test at least these:

// findElement([1,3,5,8,9,10], function(num){return num % 2 === 0})
// Return 8
// findElement([1,3,5,9], function(num){reutrn num % 2 === 0})

// Return false
// findElement['Jim','Indian','Marsh','Glitch'], function(str){reutrn str.indexOf('itch) !== -1})

var findElement = function (array, fn) {

    for (var i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return array[i];
        }
    }
    return false;
};

// console.log(findElement([1,3,5,8,9,10], function(num){return num % 2 === 0}));

// console.log(findElement([1,3,5,9], function(num){return num % 2 === 0}))

console.log(findElement['Jim','Indian','Marsh','Glitch'], function(str){return str.indexOf('itch') !== -1})