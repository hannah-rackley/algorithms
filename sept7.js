// let maps = new Set();

// maps.add({1: [2, 3, 5]});
// maps.add({2: [1, 3, 4]});
// maps.add({3: [1, 2, 5]});
// maps.add({4: [2, 5, 6]});
// maps.add({5: [1, 3, 4, 6]});
// maps.add({6: [4, 5]});

let maps = {
    1: ['2', '3', '5'],
    2: ['1', '3', '4'],
    3: ['1', '2', '5'],
    4: ['2', '5', '6'],
    5: ['1', '3', '4', '6'],
    6: ['4', '5']
}

let newSet = new Set();
let sets = new Set();

let main = (map, start, end) => {
    debugger;
    newSet.add(start);
    map[start].forEach((city) => {
        if (city !== end && newSet.has(city) === false) {
            newSet.add(city);
            main(map, city, end);
        } else if (city === end) {
            newSet.add(city);
            sets.add(newSet);
            newSet.clear();
            return sets;
        }
    })
} 

console.log(main(maps, '1', '6'));

// let newSet = new Set();
// let sets = new Set();
// let i = 0;

let main = (map, start, end) => {
    // console.log(end);
    newSet.add(start);
    let current = maps[start];
    debugger;
    if (current[i] !== end && newSet.has(current[i]) === false) {
        newSet.add(current[i]);
        console.log(current[i]);
        // console.log(end);
        i++;
        if (i < current.length) {
            main(map, current[i], end);
        } else if (i >= current.length) {
            i = 0;
        }
    } else if (current[i] === end) {
        newSet.add(current[i]);
        console.log(newSet);
        sets.add(newSet);
        newSet.clear();
        i = 0;
        // return sets;
    } else if (newSet.has(current[i]) === true) {
        i++;
        main(map, current[i], end);
    } 
} 

main(maps, '1', '6');