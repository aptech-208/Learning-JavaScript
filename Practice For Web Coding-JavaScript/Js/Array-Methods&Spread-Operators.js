const arr = [1, 2, 3, 4, 5];

// Using Push to add elements to the end of the array
arr.push(6);
console.log('After push:', arr); // [1, 2, 3, 4, 5, 6]

// Using Pop to remove the last element from the array
const poppedElement = arr.pop();
console.log('Popped element:', poppedElement); // 6
console.log('After pop:', arr); // [1, 2, 3, 4, 5]

// Using Map to print array 
arr.map((a) => console.log(a));

console.log("---------");

// Using ForEach to print array
arr.forEach((a) => console.log(a));

// Using Spread Operator to Merge arrays into a new array-one array
const arr2 = [7, 8, 9, 10];
const MergedArray = [...arr, ...arr2];
console.log('Merged Array:', MergedArray); // [1, 2, 3, 4, 5, 7, 8, 9]