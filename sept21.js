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

let orderOfChores = (tasks) => {
    let arr = tasks.map(task => task.node);
    let finalArray = [];
    while (finalArray.length < arr.length) {
        tasks.forEach(task => {
            if (!finalArray.includes(task.node)){
                let notIncluded = task.depends.find(depend => !finalArray.includes(depend));
                if (notIncluded === undefined) {
                    finalArray.push(task.node)
                }
            }
        });
    }
    return finalArray
};

console.log(orderOfChores(tasks));
console.log(orderOfChores(tasks2));