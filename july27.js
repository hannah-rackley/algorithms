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