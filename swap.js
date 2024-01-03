let first = 5;
let second = 7;
console.log(first, second);
// This is wrong approach

/* first = second;
second = first; */

// console.log(first, second);

// Approach 1
/* const temp = first;
first = second;
second = temp; */
// console.log(first, second);

// Approach 2 --- Destrucuring
[first, second] = [second, first];
console.log(first, second);

