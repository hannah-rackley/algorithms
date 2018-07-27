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
var newArray = [];

function steamrollArray(arr) {
    debugger;
    var index = arr.length - 1;
    if ((typeof arr[index]) !== number) {
        steamrollArray(arr[index - 1]);
    }
    
    newArray.push(arr[index]);
    return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);