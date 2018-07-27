//   Case converter
var capitalize = function capitalize(string) {
    var lowerString = string.toLowerCase();
    var stringArray = lowerString.split(" ");
    var capArray = []
    var finalString = ""
    for (var i = 0; i < stringArray.length; i++) {
        var capString = "";
        var firstLetter = stringArray[i].slice(0, 1);
        firstLetter = firstLetter.toUpperCase();
        capString += firstLetter;
        capString += stringArray[i].slice(1);
        capArray.push(capString);
    }
    finalString = capArray.join(" ");
    return finalString;
};
var caseConvert = function caseConvert(str, conversionType) {
 //Your code here!!
    lowerString = str.toLowerCase();
    var stringArray = lowerString.split(" ");
    var stringArrayLength = stringArray.length;
    if (stringArray[(stringArrayLength - 1)] === "") {
        stringArray = stringArray.slice(0, stringArrayLength-1);
    };
    if (conversionType === "snakecase") {
        var convertedStr = stringArray.join("_");
    } else if (conversionType === "camelcase") { 
        var convertedStr = ""
        convertedStr += stringArray[0];
        for (i = 1; i < stringArrayLength; i++) {
            var capString = capitalize(stringArray[i]);
            convertedStr += capString;
        }
    } else {
        return "Invalid conversion type.";
    }
    return convertedStr;
};
//SnakecaseAssertions
console.assert(caseConvert("hello", "snakecase") === "hello", "string should be returned.");
console.assert(caseConvert("goodbye", "snakecase") === "goodbye", "Return the input string"); 
console.assert(caseConvert("HELLO", "snakecase") === "hello", "String should be lowercase");
console.assert(caseConvert("Hello world", "snakecase") === "hello_world", "Spaces should be replaced in string with underscores");
console.assert(caseConvert("Hello world ", "snakecase") === "hello_world", "No underscores at the end of string");
//Camelcase assertions
console.assert(caseConvert("Hello world", "camelcase") === "helloWorld", "A string with spaces should not have spaces");
console.assert(caseConvert("Hannah Glasser", "camelcase") === "hannahGlasser", "The words after the first in a string should be capitalized");
//Capitalize assertions
console.assert(capitalize("hello") === "Hello", "Capitalize the first letter");
console.assert(capitalize("hello world") === "Hello World", "Capitalize a string");

//Credit Card Validator

var isValid = function isValid(cardNumber) {
    // var numArray = str(cardNumber.split(""));
    if (cardNumber[0] === 4) {
        if (cardNumber.length !== 16) {
            return "invalid";
        }
    } else if (cardNumber[0] === '3' && (cardNumber[1] === '4' ||   cardNumber[1] === '7')) {
        if(cardNumber.length !== 15){
            return 'invalid';
        } else {
            return 'valid American Express';
        }
    } else if (cardNumber.length !== 16) {
        return "invalid";
    }
    return 'valid';
}

console.assert(isValid('1111') === "invalid", "check for number length");
console.assert(isValid("370000000000000") === "valid", "American express has 15 numbers");
console.assert(isValid('') === 'invalid', "check for number length");
console.assert(isValid("370000000000000") === "valid American Express", "Return the card type");