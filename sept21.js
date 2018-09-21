let tasks = [
    { node: 'a', depends: ['b'] },
    { node: 'b', depends: [] },
    { node: 'c', depends: ['a'] },
    { node: 'g', depends: ['a', 'j'] },
    { node: 'e', depends: ['j'] },
    { node: 'j', depends: ['b'] },
];

let tasks2 = [
    { node: 'a', depends: ['b', 'c'] },
    { node: 'b', depends: [] },
    { node: 'c', depends: ['b'] },
  ];

let originalArray = (tasks) => {
    let taskArray = tasks.map(task => task.node);
    return taskArray;
};

let orderOfChores = (arr, tasks) => {
    let finalArray = [];
    while (finalArray.length < arr.length) {
        tasks.map(task => {
            if (!finalArray.includes(task.node)){
                let included = 0;
                task.depends.forEach(depend => {
                    if (finalArray.includes(depend)) {
                        included += 1;
                    }    
                });
                if (included === task.depends.length) {
                    finalArray.push(task.node)
                }
            }
        });
    }
    return finalArray
};

let taskNames = originalArray(tasks);
let taskNames2 = originalArray(tasks2);

console.log(orderOfChores(taskNames, tasks));

console.log(orderOfChores(taskNames2, tasks2));