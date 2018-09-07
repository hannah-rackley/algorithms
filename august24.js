//Huffman's Code
let createFrequencyObject = (word) => {
    let letters = word.split('');
    let obj = {};
    letters.forEach(letter => {
        // console.log(letter);
        if (obj[letter] > 0) {
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    })
    return obj;
}

let happy = createFrequencyObject('fun');

let getSortedArray = (obj) => {
    let keys = Object.keys(obj);
    let mappedKeys = keys.map(key => {
        return {
           key: key,
           value: obj[key] 
        }
    })
    return mappedKeys;
}

let sortableLetterFrequency = getSortedArray(happy);

let sortIntoArray = (objects) => {
    console.log(objects);
    let sortedObjects = objects.sort((a, b) => {
        if (a.value === b.value) {
            return b.key < a.key;
        } else {
            return b.value - a.value;
        }
    })
    let sortedLetters = sortedObjects.map(obj => {
        return obj.key;
    })

    return sortedLetters;
}

let sortedLetters = sortIntoArray(sortableLetterFrequency);

let createEncodeLegend = (letters) => {
    let i = 1;
    let obj = {};
    obj[letters[0]] = "1";
    while (i < letters.length) {
        let code = '0'.repeat(i) + '1';
        obj[letters[i]] = code;
        i++;
    }
    obj[letters[(letters.length-1)]] = '0'.repeat(letters.length - 1);
    console.log(obj);
    return obj;
}

let legend = createEncodeLegend(sortedLetters);

let encode = (word, encodeLegend) => {
    let compressedWord = '';
    let letters = word.split('');
    letters.forEach(letter => {
        compressedWord += encodeLegend[letter];
    })
    return compressedWord;
}

let encodedHappy = (encode('fun', legend));
console.log(encodedHappy);

let convertLegend = (encodeLegend) => {
    let flippedKeyValues = {};
    for (let key in encodeLegend) {
        flippedKeyValues[encodeLegend[key]] = key;
    }
    return flippedKeyValues;
}

let decode = (encodedWord, encodeLegend) => {
    let decodeLegend = convertLegend(encodeLegend);
    let decompressedWord = '';
    let code = '';
    for (let letter of encodedWord) {
        code += letter;
        if (decodeLegend[code]) {
            decompressedWord += decodeLegend[code];
            code = '';
        } 
    }
    return decompressedWord;
}

console.log(decode(encodedHappy, legend));
